import { useLocation, NavLink } from 'react-router-dom'
import './payment.css'

import successIcon from '/payment/success.png' // путь к твоей картинке

function Payment() {
    const location = useLocation()
    const { fullName = '' } = location.state || {}

    return (
        <section className="payment-success page-with-border">
            <div className="payment-success__card">

                {/* ИКОНКА */}
                <div className="payment-success__icon">
                    <img src={successIcon} alt="Успешно" />
                </div>

                <h1 className="payment-success__title">
                    Оплата прошла успешно!
                </h1>

                <p className="payment-success__text">
                    Ваш заказ готовится. Ждём вас в кофейне через 10–15 минут.
                    <br />
                    Назовите своё имя и фамилию при выдаче.
                </p>

                {fullName && (
                    <p className="payment-success__name">
                        {fullName}
                    </p>
                )}

                <NavLink to="/" className="payment-success__button">
                    Вернуться в меню
                </NavLink>
            </div>
        </section>
    )
}

export default Payment