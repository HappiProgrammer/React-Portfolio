import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

const RecenterMap = ({ position }) => {
    const map = useMap()
    useEffect(() => {
        if (position) {
            map.flyTo(position, 14, { animate: true })
        }
    }, [position, map])
    return null
}

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [position, setPosition] = useState([4.155, 9.2415])
    const [isLive, setIsLive] = useState(false)
    const form = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if ('geolocation' in navigator) {
            const watchId = navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords
                    setPosition([latitude, longitude])
                    setIsLive(true)
                },
                (error) => {
                    console.warn('Geolocation access denied or unavailable:', error.message)
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 0,
                }
            )
            return () => navigator.geolocation.clearWatch(watchId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_bytxsaq',
                'template_aamopcv',
                form.current,
                'UjVdunroDTMufl2nW'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                            idx={15} 
                        />
                    </h1>
                    <p>
                        I am a passionate Software Engineering student with a strong interest in programming, 
                        technology, and building practical solutions to real-world problems. I enjoy working with languages such as Python, Java, JavaScript, C, C++, and Rust,
                        while continuously expanding my knowledge across software development and emerging technologies.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Happi Geniune,
                    <br />
                    Buea, Cameroon
                    <br />
                    <br />
                    <span>happigeniune@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={position} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={position}>
                            <Popup>
                                {isLive ? '📍 Live location tracked!' : 'Happi lives here, come over for a cup of coffee :)'}
                            </Popup>
                        </Marker>
                        <RecenterMap position={position} />
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact