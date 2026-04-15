import { useEffect, useRef, useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import './checkout.css'

function Checkout() {
    const location = useLocation()
    const redirectRef = useRef(null)

    const { totalAmount = 0, cartItems = [] } = location.state || {}

    const [formData, setFormData] = useState({
        fullName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    })

    const [errors, setErrors] = useState({
        fullName: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    })

    const [isPaid, setIsPaid] = useState(false)

    useEffect(() => {
        if (isPaid && redirectRef.current) {
            redirectRef.current.click()
        }
    }, [isPaid])

    const handleChange = (e) => {
        const { name, value } = e.target
        let formattedValue = value

        if (name === 'cardNumber') {
            formattedValue = value
                .replace(/\D/g, '')
                .slice(0, 16)
                .replace(/(\d{4})(?=\d)/g, '$1 ')
        }

        if (name === 'expiry') {
            formattedValue = value.replace(/\D/g, '').slice(0, 4)

            if (formattedValue.length > 2) {
                formattedValue = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`
            }
        }

        if (name === 'cvv') {
            formattedValue = value.replace(/\D/g, '').slice(0, 3)
        }

        setFormData((prev) => ({
            ...prev,
            [name]: formattedValue
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: ''
        }))
    }

    const validateForm = () => {
        const newErrors = {
            fullName: '',
            cardNumber: '',
            expiry: '',
            cvv: ''
        }

        const cardDigits = formData.cardNumber.replace(/\s/g, '')
        const expiryDigits = formData.expiry.replace('/', '')

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Введите ФИО'
        }

        if (!cardDigits) {
            newErrors.cardNumber = 'Введите номер карты'
        } else if (cardDigits.length !== 16) {
            newErrors.cardNumber = 'Номер карты должен содержать 16 цифр'
        }

        if (!formData.expiry.trim()) {
            newErrors.expiry = 'Введите срок действия'
        } else if (expiryDigits.length !== 4) {
            newErrors.expiry = 'Формат: ММ/ГГ'
        } else {
            const month = Number(formData.expiry.slice(0, 2))
            if (month < 1 || month > 12) {
                newErrors.expiry = 'Месяц должен быть от 01 до 12'
            }
        }

        if (!formData.cvv.trim()) {
            newErrors.cvv = 'Введите CVV'
        } else if (formData.cvv.length !== 3) {
            newErrors.cvv = 'CVV должен содержать 3 цифры'
        }

        setErrors(newErrors)

        return !Object.values(newErrors).some(Boolean)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validateForm()

        if (!isValid) return

        setIsPaid(true)
    }

    return (
        <section className="checkout-page page-with-border">
            <div className="checkout-card">
                <h1 className="checkout-title">Оплата заказа</h1>

                <NavLink
                    ref={redirectRef}
                    to="/payment"
                    state={{
                        fullName: formData.fullName,
                        cartItems,
                        totalAmount
                    }}
                    className="checkout-hidden-link"
                    tabIndex={-1}
                    aria-hidden="true"
                >
                    Перейти
                </NavLink>

                <form className="checkout-form" onSubmit={handleSubmit} noValidate>
                    <label className="checkout-label">
                        <span>Ваше ФИО</span>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Иванова Анна Ивановна"
                            className={`checkout-input ${errors.fullName ? 'checkout-input--error' : ''}`}
                        />
                        {errors.fullName && (
                            <span className="checkout-error">{errors.fullName}</span>
                        )}
                    </label>

                    <label className="checkout-label">
                        <span>Номер карты</span>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="0000 0000 0000 0000"
                            className={`checkout-input ${errors.cardNumber ? 'checkout-input--error' : ''}`}
                        />
                        {errors.cardNumber && (
                            <span className="checkout-error">{errors.cardNumber}</span>
                        )}
                    </label>

                    <div className="checkout-row">
                        <label className="checkout-label">
                            <span>MM/YY</span>
                            <input
                                type="text"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleChange}
                                placeholder="12/26"
                                className={`checkout-input ${errors.expiry ? 'checkout-input--error' : ''}`}
                            />
                            {errors.expiry && (
                                <span className="checkout-error">{errors.expiry}</span>
                            )}
                        </label>

                        <label className="checkout-label">
                            <span>CVV</span>
                            <input
                                type="password"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                className={`checkout-input ${errors.cvv ? 'checkout-input--error' : ''}`}
                            />
                            {errors.cvv && (
                                <span className="checkout-error">{errors.cvv}</span>
                            )}
                        </label>
                    </div>

                    <div className="checkout-total">
                        К оплате: {totalAmount}р
                    </div>

                    <button type="submit" className="checkout-btn">
                        Оплатить
                    </button>

                    <p className="checkout-note">
                        Оплата защищена. Данные не сохраняются.
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Checkout