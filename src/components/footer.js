import React from 'react';
import './css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>&copy; 2024 ИРОО Возрождение. Все права защищены.</p>
                <div className="footer-item">
                    <img src="/img/icons8-design-64.png" alt="Дизайн" />
                    <p>Дизайн: И.Р.</p>
                </div>
                <div className="footer-item">
                    <img src="/img/icons8-pc-100.png" alt="Разработка" />
                    <p>Разработка: Д.Е.</p>
                </div>
            </div>
            <ul className="footer-icons">
                <li>
                    <a href="https://vk.com/vozrozhdenie_38" target="_blank" rel="noopener noreferrer">
                        <img src="/img/png-clipart-computer-icons-social-media-youtube-hashtag-font-awesome-social-media-logo-monochrome.png" alt="VK" />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/vozrozhdenie_38" target="_blank" rel="noopener noreferrer">
                        <img src="/img/1461053-middle.png" alt="Telegram" />
                    </a>
                </li>
                <li>
                    <img src="/img/6254309-middle.png" alt="Viber" />
                </li>
                <li>
                    <img src="/img/scale_1200.png" alt="Дзен" />
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
