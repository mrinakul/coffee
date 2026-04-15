import './about.css'
import coffee from '/about/coffee.svg'
import wifi from '/about/wifi.svg'
import dessert from '/about/dessert.svg'
import coffee2 from '/about/coffee2.svg'
import heart from '/about/heart.png'
import clock from '/about/clock.svg'
import location from '/about/location.svg'
import phone from '/about/phone.svg'
import email from '/about/email.svg'

function About() {
    return (
        <div>
            <section className="about">
                <div className="about__content">
                    <h1 className="about__title">Во что мы верим</h1>
                    <p className="about__text">Кофейня «Шаг за кофе» родилась из желания создать место, где каждый может выдохнуть в бесконечном городском ритме. Здесь вы сами выбираете, как провести время: быстро взять напиток с собой и бежать дальше или устроиться с ноутбуком и наслаждаться моментом. Мы верим, что кофе — это не просто напиток, а способ сделать паузу и почувствовать вкус жизни</p>
                </div>
            </section>

            <section class="advantages">
                <div class="container">
                    <h2 class="advantages__title">Наши преимущества</h2>

                    <div class="advantages__grid">
                        <div class="advantage__card">
                            <img class="advantage-icon" src={coffee} alt="Кофе" />
                            <h3 class="advantage-title">Лучшие сорта кофе</h3>
                            <p class="advantage-description">Выбери любимый вкус напитка</p>
                        </div>

                        <div class="advantage__card">
                            <img class="advantage-icon" src={wifi} alt="Wi-Fi" />
                            <h3 class="advantage-title">Бесплатный Wi-fi</h3>
                            <p class="advantage-description">Общайся с друзьями или решай рабочие вопросы</p>
                        </div>

                        <div class="advantage__card">
                            <img class="advantage-icon" src={dessert} alt="Десерт" />
                            <h3 class="advantage-title">Вкусные десерты</h3>
                            <p class="advantage-description">Ты никогда не останешься голодным</p>
                        </div>

                        <div class="advantage__card">
                            <img class="advantage-icon" src={coffee2} alt="Кофе с собой" />
                            <h3 class="advantage-title">Кофе с собой</h3>
                            <p class="advantage-description">Оставайся в заведении или бери заказ с собой</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="taste">
                <div class="container">
                    <div class="taste__wrapper">
                        <div class="taste__content">
                            <h2 class="taste-title">Честный вкус без компромиссов</h2>

                            <div class="taste__list">
                                <div class="taste__item">
                                    <div class="taste-number">1</div>
                                    <p class="taste-text">Мы выбираем лучшие зёрна и следим за свежестью обжарки — ради настоящего вкуса в вашей чашке.</p>
                                </div>

                                <div class="taste__item">
                                    <div class="taste-number">2</div>
                                    <p class="taste-text">Натуральные ингредиенты — мы не используем искусственные сиропы и ароматизаторы.</p>
                                </div>

                                <div class="taste__item">
                                    <div class="taste-number">3</div>
                                    <p class="taste-text">Любим сладкое так же, как и вы. Поэтому десерты у нас особенные — свежие, нежные, настоящие.</p>
                                </div>
                            </div>
                        </div>

                        <div class="taste__image">
                            <img src={heart} alt="Сердце из кофейных зерен" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact">
                <div class="container">
                    <h2 class="contact-title">Мы ждем Вас!</h2>

                    <div class="contact__wrapper">
                        <div class="contact__info">
                            <div class="contact__card">
                                <img class="contact-icon" src={clock} alt="Часы"/>
                                    <div class="contact-details">
                                        <div class="contact-label">Часы открытия</div>
                                        <div class="contact-value">Пн-Вс: 10:00 – 20:00</div>
                                    </div>
                            </div>

                            <div class="contact__card">
                                <img class="contact-icon" src={location} alt="Адрес"/>
                                    <div class="contact-details">
                                        <div class="contact-label">Адрес</div>
                                        <div class="contact-value address-value">г. Екатеринбург, ул. Проспект Ленина 46</div>
                                    </div>
                            </div>

                            <div class="contact__card">
                                <img class="contact-icon" src={email} alt="Эл. почта"/>
                                    <div class="contact-details">
                                        <div class="contact-label">Эл. почта</div>
                                        <div class="contact-value">go_coffee@mail.ru</div>
                                    </div>
                            </div>

                            <div class="contact__card">
                                <img class="contact-icon" src={phone} alt="Телефон"/>
                                    <div class="contact-details">
                                        <div class="contact-label">Телефон</div>
                                        <div class="contact-value">+7 (800) 555-35-35</div>
                                    </div>
                            </div>
                        </div>

                        <div class="contact__map">
                            <div class="map__container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.356380748273!2d60.60437687666262!3d56.838939572574665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e35b1ae2a0d%3A0x78c29f080cfc4a8a!2z0L_RgNC-0YHQv9C10LrRgiDQm9C10L3QuNC90LAsIDQ2LCDQldC60LDRgtC10YDQuNC90LHRg9GA0LMsINCh0LLQtdGA0LTQu9C-0LLRgdC60LDRjyDQvtCx0LsuLCA2MjAwMTU!5e0!3m2!1sru!2sru!4v1700000000000!5m2!1sru!2sru"
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About