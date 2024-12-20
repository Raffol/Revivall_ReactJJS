import React, { useState } from 'react';
import './Header.css'; // Стили вынесем в отдельный файл

function Header({ isAuthenticated, onLogout }) {
    return (
        <header>
            <nav className="navbar">
                <ul className="menu">
                    <li><a href="/homee" className="projects">Главная</a></li>
                    <li><a href="/news" className="news">Новости</a></li>
                    <li><a href="/organizations" className="organizers">Организаторы</a></li>
                    <li><a href="/about" className="about">О нас</a></li>
                    <li>
                        <a href="/home">
                            <img
                                src="/img/Возрождение.png"
                                alt="<<ИРОО Возрождение>>"
                                style={{ width: '300px', height: '100px' }}
                            />
                        </a>
                    </li>
                    <li><a href="/events" className="events">Мероприятия</a></li>
                    <li><a href="/ourgames" className="ourgames">Список Игр</a></li>
                    {isAuthenticated ? (
                        <li>
                            <a className="about" href="/lk">Личный кабинет</a>
                            {/* Кнопка выхода */}
                            <button onClick={onLogout} className="logout-button">Выйти</button>
                        </li>
                    ) : (
                        <li>
                            <a className="about" href="/login">Авторизация</a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
