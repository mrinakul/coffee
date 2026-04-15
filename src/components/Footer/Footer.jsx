import './footer.css'
import logoFooter from '/footer/logoFooter.svg'
import maxIcon from '/footer/max.svg'
import vkIcon from '/footer/vk.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">

                <div className="footer__left">
                    <a href="#" className="footer__social-item">
                        <img src={maxIcon} alt="" />
                        <span>Написать в MAX</span>
                    </a>

                    <a href="#" className="footer__social-item">
                        <img src={vkIcon} alt="" />
                        <span>Сообщество ВКонтакте</span>
                    </a>
                </div>

                <div className="footer__center">
                    <img src={logoFooter} alt="Шаг за кофе" />
                </div>

                <div className="footer__right">
                    <span>go_coffee@mail.ru</span>
                    <span>+7 (800) 555-35-35</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer