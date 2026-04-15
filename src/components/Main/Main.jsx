import './main.css'
import { NavLink } from 'react-router-dom'
import coffeeHero from '/main/coffee1.png'
import grains from '/main/grains.svg'
import coffee from '/main/coffee.svg'
import wifi from '/main/wifi.svg'
import dessert from '/main/dessert.svg'
import coffee2 from '/main/coffee2.svg'
import product1 from '/main/product1.png'
import product2 from '/main/product2.png'
import product3 from '/main/product3.png'
import product4 from '/main/product4.png'
import sale1 from '/main/sale1.png'
import sale2 from '/main/sale2.png'
import sale3 from '/main/sale3.png'

function Main() {
    const coffeeItems = [
        {
            id: 1,
            name: 'Американо',
            volume: '200 мл',
            description: 'Эспрессо с добавлением горячей воды. Насыщенный вкус и тонкий аромат.',
            price: '200р',
            image: product1
        },
        {
            id: 2,
            name: 'Латте',
            volume: '300 мл',
            description: 'Нежный кофейный напиток на основе эспрессо с большой порцией вспененного молока. Мягкий вкус с молочными нотками.',
            price: '300р',
            image: product2
        },
        {
            id: 3,
            name: 'Капучино',
            volume: '300 мл',
            description: 'Эспрессо с горячим молоком и густой шапкой молочной пены. Бархатистый и насыщенный.',
            price: '300р',
            image: product3
        },
        {
            id: 4,
            name: 'Малиновый раф',
            volume: '350 мл',
            description: 'Эспрессо со сливками и малиновым сиропом. Мягкий, ягодный и очень уютный вкус.',
            price: '350р',
            image: product4
        }
    ]

    return (
        <div>
            <section className="hero">
                <img src={coffeeHero} alt="Кофе" className="hero__image" />

                <div className="hero__overlay"></div>

                <div className="hero__content">
                    <h1 className="hero__title">Шаг за кофе</h1>
                    <p className="hero__subtitle">Твой кофе – твой темп.</p>
                </div>
            </section>

            <section className="harmony">
                <div className="container">
                    <div className="harmony__image">
                        <img src={grains} alt="Зерна" />
                    </div>
                    <div className="harmony__content">
                        <p className="harmony__text">Позвольте себе остановиться в мире кофейной гармонии. Здесь воздух пропитан ароматом свежеобжаренных зёрен, а спокойная, утончённая атмосфера подарит вам полное расслабление и знакомство с лучшими сортами кофе.
                        </p>
                    </div>
                </div>
            </section>

            <section className="advantages">
                <div className="container">
                    <h2 className="advantages__title">Наши преимущества</h2>

                    <div className="advantages__grid">
                        <div className="advantage__card">
                            <img className="advantage-icon" src={coffee} alt="Кофе" />
                            <h3 className="advantage-title">Лучшие сорта кофе</h3>
                        </div>

                        <div className="advantage__card">
                            <img className="advantage-icon" src={wifi} alt="Wi-Fi" />
                            <h3 className="advantage-title">Бесплатный Wi-fi</h3>
                        </div>

                        <div className="advantage__card">
                            <img className="advantage-icon" src={dessert} alt="Десерт" />
                            <h3 className="advantage-title">Вкусные десерты</h3>
                        </div>

                        <div className="advantage__card">
                            <img className="advantage-icon" src={coffee2} alt="Кофе с собой" />
                            <h3 className="advantage-title">Кофе с собой</h3>
                        </div>
                    </div>

                    <div className="advantages__button">
                        <NavLink to="/about" className="btn-more">
                            Узнать больше →
                        </NavLink>
                    </div>
                </div>
            </section>

            <section className="recommend">
                <div className="recommend__content">
                    <h2 className="recommend-title">Рекомендуем попробовать</h2>
                    <div className="container">
                        <div className="coffee__grid">
                            {coffeeItems.map((item) => (
                                <div key={item.id} className="coffee-card">
                                    <div className="coffee-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="coffee-info">
                                        <h3 className="coffee-name">{item.name}</h3>
                                        <div className="coffee-volume">{item.volume}</div>
                                        <p className="coffee-description">{item.description}</p>
                                        <div className="coffee-price">{item.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="coffee__button">
                            <NavLink to="/menu" className="btn-show-more">
                            Показать еще
                        </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sale'>
                <div className="container">
                    <h2 className='sale__title'>Новинки</h2>
                    <div className="sale__content">
                        <img src={sale1} alt="sale" className='sale-img' />
                        <img src={sale2} alt="sale" className='sale-img' />
                        <img src={sale3} alt="sale" className='sale-img' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main