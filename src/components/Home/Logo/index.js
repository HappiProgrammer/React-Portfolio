import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        const path = outlineLogoRef.current
        if (!path) return

        const length = path.getTotalLength()
        path.style.strokeDasharray = `${length} ${length}`
        path.style.strokeDashoffset = `${length}`

        const ctx = gsap.context(() => {
            gsap
                .timeline()
                .to(bgRef.current, {
                    duration: 0.8,
                    opacity: 1,
                })
                .to(path, {
                    strokeDashoffset: 0,
                    duration: 3.5,
                    ease: 'power2.inOut',
                })

            gsap.fromTo(
                solidLogoRef.current,
                {
                    opacity: 0,
                    scale: 0.98,
                },
                {
                    opacity: 1,
                    scale: 1,
                    delay: 2.2,
                    duration: 1.4,
                    ease: 'power2.out',
                }
            )
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="H" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g className="svg-container" fill="none">
                    <path
                        ref={outlineLogoRef}
                        d="M96 135 A25 25 0 0 1 121 110 L183 110 A25 25 0 0 1 208 135 L208 390 L351 390 L351 135 A25 25 0 0 1 376 110 L438 110 A25 25 0 0 1 463 135 L463 765 A25 25 0 0 1 438 790 L376 790 A25 25 0 0 1 351 765 L351 510 L208 510 L208 765 A25 25 0 0 1 183 790 L121 790 A25 25 0 0 1 96 765 Z M96 135 L51 90 A25 25 0 0 1 76 65 L138 65 A25 25 0 0 1 163 90 L208 135 M51 90 L51 720 A25 25 0 0 0 76 745 L96 765 M76 745 L138 745 A25 25 0 0 0 163 720 L208 765 M351 135 L306 90 A25 25 0 0 1 331 65 L393 65 A25 25 0 0 1 418 90 L463 135 M306 90 L306 345 L351 390 M208 390 L163 345 L306 345 M351 510 L306 465 L306 720 A25 25 0 0 0 331 745 L393 745 A25 25 0 0 0 418 720 L463 765"
                    />
                </g>
            </svg>
        </div>
    )
}

export default Logo