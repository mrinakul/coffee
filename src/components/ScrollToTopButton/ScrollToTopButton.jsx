import { useEffect, useState } from 'react'
import './ScrollToTopButton.css'

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const windowHeight = window.innerHeight
            const fullHeight = document.documentElement.scrollHeight

            // показываем кнопку, когда пользователь почти дошел до низа
            if (scrollTop + windowHeight >= fullHeight - 120) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            type="button"
            className={`scroll-to-top ${isVisible ? 'scroll-to-top--visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Наверх"
        >
            ↑
        </button>
    )
}

export default ScrollToTopButton