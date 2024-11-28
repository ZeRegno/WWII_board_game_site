import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api/game')
            .then((response) => response.json())
            .then((data) => setGameInfo(data))
            .catch((error) => console.error('Ошибка загрузки данных:', error));
    }, []);

    return (
        <div className="page-container">
            <h1>Добро пожаловать на сайт игры!</h1>
            {gameInfo ? (
                <>
                    <p><strong>Состояние:</strong> {gameInfo.status}</p>
                    <p><strong>Описание:</strong> {gameInfo.description}</p>
                    <p><strong>Прогресс:</strong> {gameInfo.progress}</p>
                    <p><strong>Версия:</strong> {gameInfo.version}</p>
                </>
            ) : (
                <p>Загрузка информации о проекте...</p>
            )}
            <a href="/units" className="button">
                Перейти к списку юнитов
            </a>
        </div>
    );
};

export default HomePage;