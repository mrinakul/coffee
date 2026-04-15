import { NavLink } from 'react-router-dom'
import './header.css'
import logoHeader from '/header/logoHeader.svg'

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to="/" className="header__logo-link">
                    <img
                        src={logoHeader}
                        alt="Шаг за кофе"
                        className="header__logo"
                    />
                </NavLink>

                <nav className="header__nav">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? 'header__link header__link--active' : 'header__link'
                        }
                    >
                        Главная
                    </NavLink>
                    
                    <NavLink
                        to="/menu"
                        className={({ isActive }) =>
                            isActive ? 'header__link header__link--active' : 'header__link'
                        }
                    >
                        Меню
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'header__link header__link--active' : 'header__link'
                        }
                    >
                        О нас
                    </NavLink>

                    <NavLink
                        to="/reviews"
                        className={({ isActive }) =>
                            isActive ? 'header__link header__link--active' : 'header__link'
                        }
                    >
                        Отзывы
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header