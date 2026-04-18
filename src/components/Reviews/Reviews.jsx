import { useState } from 'react'
import './reviews.css'
import starIcon from '/reviews/star.svg'
import starActiveIcon from '/reviews/starActive.svg'

function Reviews() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            name: 'Анна',
            rating: 5,
            text: 'Очень уютная кофейня! Малиновый раф просто божественный. Бариста приветливые, вайб спокойный. Буду заходить теперь постоянно.'
        },
        {
            id: 2,
            name: 'Мария',
            rating: 5,
            text: 'Обожаю это место! Чизкейк нежный, капучино всегда горячий и вкусный. И розеток много, можно работать с ноутбуком.'
        },
        {
            id: 3,
            name: 'Сергей',
            rating: 4,
            text: 'Захожу сюда по утрам перед работой. Американо отличный, готовят быстро. Можно взять с собой и не стоять в очереди.'
        },
        {
            id: 4,
            name: 'Иван',
            rating: 5,
            text: 'Люблю приходить сюда с друзьями. Уютно, тихо, кофе вкусный. Особенно нравится матча-латте.'
        }
    ])

    const [formData, setFormData] = useState({
        name: '',
        rating: 0,
        text: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        rating: '',
        text: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: ''
        }))
    }

    const handleRatingClick = (value) => {
        setFormData((prev) => ({
            ...prev,
            rating: value
        }))

        setErrors((prev) => ({
            ...prev,
            rating: ''
        }))
    }

    const validateForm = () => {
        const newErrors = {
            name: '',
            rating: '',
            text: ''
        }

        if (!formData.name.trim()) {
            newErrors.name = 'Введите имя'
        }

        if (!formData.rating) {
            newErrors.rating = 'Поставьте оценку'
        }

        if (!formData.text.trim()) {
            newErrors.text = 'Введите отзыв'
        }

        setErrors(newErrors)

        return !Object.values(newErrors).some(Boolean)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateForm()) return

        const newReview = {
            id: Date.now(),
            name: formData.name.trim(),
            rating: formData.rating,
            text: formData.text.trim()
        }

        setReviews((prev) => [newReview, ...prev])

        setFormData({
            name: '',
            rating: 0,
            text: ''
        })
    }

    const renderStars = (rating, clickable = false) => {
        return Array.from({ length: 5 }, (_, index) => {
            const starValue = index + 1
            const isActive = starValue <= rating

            return (
                <button
                    key={starValue}
                    type={clickable ? 'button' : 'button'}
                    className={`reviews-star ${clickable ? 'reviews-star--interactive' : ''}`}
                    onClick={clickable ? () => handleRatingClick(starValue) : undefined}
                    disabled={!clickable}
                    aria-label={`Оценка ${starValue}`}
                >
                    <img
                        src={isActive ? starActiveIcon : starIcon}
                        alt=""
                    />
                </button>
            )
        })
    }

    return (
        <section className="reviews-page page-with-border">
            <div className="reviews-container">
                <div className="reviews-header">
                    <h1 className="reviews-main-title">Отзывы наших гостей</h1>
                    <p className="reviews-subtitle">
                        Мы ценим ваше мнение — делитесь впечатлениями
                        <br />
                        о кофе и атмосфере
                    </p>
                </div>

                <div className="reviews-form-card">
                    <h2 className="reviews-form-title">Оставьте свой отзыв</h2>

                    <form className="reviews-form" onSubmit={handleSubmit} noValidate>
                        <label className="reviews-label">
                            <span>Ваше имя</span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Анна"
                                className={`reviews-input ${errors.name ? 'reviews-input--error' : ''}`}
                            />
                            {errors.name && <span className="reviews-error">{errors.name}</span>}
                        </label>

                        <div className="reviews-rating-block">
                            <span className="reviews-label-text">Оцените нас</span>

                            <div className="reviews-stars">
                                {renderStars(formData.rating, true)}
                            </div>

                            <p className="reviews-rating-hint">
                                Нажмите на звезду, чтобы поставить оценку
                            </p>

                            {errors.rating && <span className="reviews-error">{errors.rating}</span>}
                        </div>

                        <label className="reviews-label">
                            <span>Ваш отзыв</span>
                            <textarea
                                name="text"
                                value={formData.text}
                                onChange={handleChange}
                                placeholder="Поделитесь впечатлениями о кофейне..."
                                className={`reviews-textarea ${errors.text ? 'reviews-input--error' : ''}`}
                            />
                            {errors.text && <span className="reviews-error">{errors.text}</span>}
                        </label>

                        <button type="submit" className="reviews-submit-btn">
                            Оставить отзыв
                        </button>
                    </form>
                </div>

                <div className="reviews-list-section">
                    <h2 className="reviews-list-title">Что говорят наши гости</h2>

                    <div className="reviews-grid">
                        {reviews.map((review) => (
                            <article key={review.id} className="review-card">
                                <div className="review-card__top">
                                    <h3 className="review-card__name">{review.name}</h3>

                                    <div className="review-card__stars">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>

                                <p className="review-card__text">{review.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews