import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'

import product1 from '/menu/product1.png'
import product2 from '/menu/product2.png'
import product3 from '/menu/product3.png'
import product4 from '/menu/product4.png'
import product5 from '/menu/product5.png'
import product6 from '/menu/product6.png'
import product7 from '/menu/product7.png'
import product8 from '/menu/product8.png'
import product9 from '/menu/product9.png'
import product10 from '/menu/product10.png'
import product11 from '/menu/product11.png'
import product12 from '/menu/product12.png'
import cartIconActive from '/menu/cartIcon.svg'
import cartIcon from '/menu/cartIconActive.svg'
import trashIcon from '/menu/trashIcon.svg'
import pinIcon from '/menu/pinIcon.svg'
import searchIcon from '/menu/search.svg'

function Menu() {
    const [searchTerm, setSearchTerm] = useState('')

    const [selectedCategories, setSelectedCategories] = useState({
        Кофе: true,
        Чай: true,
        Десерты: true
    })

    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const coffeeItems = [
        {
            id: 1,
            name: 'Американо',
            volume: '200 мл',
            description: 'Эспрессо с добавлением горячей воды. Насыщенный вкус и тонкий аромат.',
            price: '200р',
            image: product1,
            category: 'Кофе'
        },
        {
            id: 2,
            name: 'Латте',
            volume: '300 мл',
            description: 'Нежный кофейный напиток на основе эспрессо с большой порцией вспененного молока. Мягкий вкус с молочными нотками.',
            price: '300р',
            image: product2,
            category: 'Кофе'
        },
        {
            id: 3,
            name: 'Капучино',
            volume: '300 мл',
            description: 'Эспрессо с горячим молоком и густой шапкой молочной пены. Бархатистый и насыщенный.',
            price: '300р',
            image: product3,
            category: 'Кофе'
        },
        {
            id: 4,
            name: 'Малиновый раф',
            volume: '350 мл',
            description: 'Эспрессо со сливками и малиновым сиропом. Мягкий, ягодный и очень уютный вкус.',
            price: '350р',
            image: product4,
            category: 'Кофе'
        },
        {
            id: 5,
            name: 'Черный чай',
            volume: '200 мл',
            description: 'Насыщенный черный чай с приятной терпкостью и долгим послевкусием. Подается с сахаром, лимоном или медом по желанию.',
            price: '100р',
            image: product5,
            category: 'Чай'
        },
        {
            id: 6,
            name: 'Улун',
            volume: '200 мл',
            description: 'Полуферментированный чай с нежным сливочным вкусом и цветочным ароматом. Мягкий и слегка сладковатый.',
            price: '130р',
            image: product6,
            category: 'Чай'
        },
        {
            id: 7,
            name: 'Жасмин',
            volume: '200 мл',
            description: 'Зеленый чай высшего сорта с добавлением лепестков жасмина. Тонкий аромат и мягкий, чуть сладковатый вкус.',
            price: '110р',
            image: product7,
            category: 'Чай'
        },
        {
            id: 8,
            name: 'Каркаде',
            volume: '200 мл',
            description: 'Напиток из цветков гибискуса. Насыщенный рубиновый цвет, бодрящий вкус с кислинкой и тонкий цветочный аромат.',
            price: '110р',
            image: product8,
            category: 'Чай'
        },
        {
            id: 9,
            name: 'Черничный чизкейк',
            volume: '150 г',
            description: 'Воздушная творожная начинка с цельными ягодами черники на хрустящей песочной основе. Легкий и освежающий десерт.',
            price: '170р',
            image: product9,
            category: 'Десерты'
        },
        {
            id: 10,
            name: 'Маффин шоколадный',
            volume: '100 г',
            description: 'Пышный кекс с насыщенным шоколадным вкусом. Внутри мягкая влажная текстура и кусочки растопленного шоколада.',
            price: '150р',
            image: product10,
            category: 'Десерты'
        },
        {
            id: 11,
            name: 'Круассан с миндалем',
            volume: '100 г',
            description: 'Слоеный круассан с нежной миндальной начинкой и лепестками миндаля сверху. Хрустящая корочка и мягкая середина.',
            price: '150р',
            image: product11,
            category: 'Десерты'
        },
        {
            id: 12,
            name: 'Классический тирамису',
            volume: '150 г',
            description: 'Воздушный и нежный десерт с насыщенным кофейным вкусом. Какао дополняет идеальный баланс сливочности и легкой горчинки.',
            price: '160р',
            image: product12,
            category: 'Десерты'
        }
    ]

    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) => ({
            ...prev,
            [category]: !prev[category]
        }))
    }

    const selectAllCategories = () => {
        setSelectedCategories({
            Кофе: true,
            Чай: true,
            Десерты: true
        })
    }

    const parsePrice = (price) => {
        return Number(price.replace('р', ''))
    }

    const addToCart = (product) => {
        setCartItems((prev) => {
            const exist = prev.find((item) => item.id === product.id)

            if (exist) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [
                ...prev,
                {
                    ...product,
                    quantity: 1,
                    priceValue: parsePrice(product.price)
                }
            ]
        })
    }

    const increase = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        )
    }

    const decrease = (id) => {
        setCartItems((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        )
    }

    const removeItem = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    const totalAmount = () => {
        return cartItems.reduce((sum, item) => {
            return sum + item.priceValue * item.quantity
        }, 0)
    }

    const totalCount = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0)
    }

    const filteredItems = coffeeItems.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategories[item.category]
        return matchesSearch && matchesCategory
    })

    const selectedCount = Object.values(selectedCategories).filter(Boolean).length
    const allSelected = selectedCount === 3

    return (
        <div>
            <section className="menu page-with-border">
                <div className="menu__content">
                    <h2 className="menu-title">Наше меню</h2>

                    <div className="container">
                        <div className="filters-sidebar">
                            <div className="search-box">
                                <img src={searchIcon} alt="Поиск" className="search-icon" />

                                <input
                                    type="text"
                                    placeholder="Введите название товара"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                            </div>

                            <div className="filter-categories">
                                <label className={`filter-option ${allSelected ? 'active' : ''}`}>
                                    <input
                                        type="checkbox"
                                        checked={allSelected}
                                        onChange={selectAllCategories}
                                    />
                                    <span>Все</span>
                                </label>

                                <label className={`filter-option ${selectedCategories.Кофе ? 'active' : ''}`}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.Кофе}
                                        onChange={() => handleCategoryChange('Кофе')}
                                    />
                                    <span>Кофе</span>
                                </label>

                                <label className={`filter-option ${selectedCategories.Чай ? 'active' : ''}`}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.Чай}
                                        onChange={() => handleCategoryChange('Чай')}
                                    />
                                    <span>Чай</span>
                                </label>

                                <label className={`filter-option ${selectedCategories.Десерты ? 'active' : ''}`}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.Десерты}
                                        onChange={() => handleCategoryChange('Десерты')}
                                    />
                                    <span>Десерты</span>
                                </label>
                            </div>

                            <button
                                className={`cart-toggle ${cartOpen ? 'cart-toggle--open' : ''}`}
                                onClick={() => setCartOpen(!cartOpen)}
                                type="button"
                            >
                                <img
                                    src={cartOpen ? cartIconActive : cartIcon}
                                    alt="Корзина"
                                    className="cart-toggle__icon"
                                />

                                {totalCount() > 0 && (
                                    <span className="cart-toggle__count-text">{totalCount()}</span>
                                )}
                            </button>
                        </div>

                        <div className="coffee__grid">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="coffee-card">
                                    <div className="coffee-image">
                                        <img src={item.image} alt={item.name} />
                                    </div>

                                    <div className="coffee-info">
                                        <h3 className="coffee-name">{item.name}</h3>
                                        <div className="coffee-volume">{item.volume}</div>
                                        <p className="coffee-description">{item.description}</p>

                                        <div className="coffee-price-wrapper">
                                            <div className="coffee-price">{item.price}</div>
                                            <button
                                                className="coffee-buy-btn"
                                                onClick={() => addToCart(item)}
                                                type="button"
                                            >
                                                Купить
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredItems.length === 0 && (
                            <div className="no-results">
                                Ничего не найдено. Попробуйте изменить параметры поиска.
                            </div>
                        )}

                        {cartOpen && (
                            <div className="cart-modal">
                                <h3 className="cart-modal__title">Корзина</h3>

                                {cartItems.length === 0 ? (
                                    <div className="cart-empty">Корзина пуста</div>
                                ) : (
                                    <>
                                        <div className="cart-list">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="cart-row">
                                                    <button
                                                        type="button"
                                                        className="cart-row__delete"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        <img src={trashIcon} alt="Удалить" />
                                                    </button>

                                                    <div className="cart-row__name">
                                                        <div className="cart-row__title">{item.name}</div>
                                                        <div className="cart-row__volume">{item.volume}</div>
                                                    </div>

                                                    <div className="cart-row__controls">
                                                        <button type="button" onClick={() => decrease(item.id)}>
                                                            −
                                                        </button>
                                                        <span>{item.quantity}шт</span>
                                                        <button type="button" onClick={() => increase(item.id)}>
                                                            +
                                                        </button>
                                                    </div>

                                                    <div className="cart-row__price">
                                                        {item.priceValue * item.quantity}р
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="cart-summary">
                                            <div className="cart-summary__top">
                                                <h4 className="cart-total">К оплате: {totalAmount()}р</h4>

                                                <NavLink
                                                    to="/checkout"
                                                    state={{
                                                        cartItems: cartItems,
                                                        totalAmount: totalAmount()
                                                    }}
                                                    className="cart-pay-btn"
                                                >
                                                    Оплатить
                                                </NavLink>
                                            </div>

                                            <div className="cart-pickup">
                                                <img
                                                    src={pinIcon}
                                                    alt="Локация"
                                                    className="cart-pickup__icon"
                                                />

                                                <div className="cart-pickup__info">
                                                    <div className="cart-pickup__title">
                                                        Самовывоз из кофейни
                                                    </div>
                                                    <div className="cart-pickup__text">
                                                        Забрать заказ по адресу: г. Екатеринбург, ул. Проспект Ленина 46
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {totalCount() > 0 && <div className="cart-counter">{totalCount()}</div>}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu