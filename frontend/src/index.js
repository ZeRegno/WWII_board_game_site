import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';  // Подключаем глобальные стили
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Если хотите начать измерение производительности в вашем приложении, передайте функцию
// для логирования результатов (например: reportWebVitals(console.log))
// или отправьте их на аналитический сервер. Подробнее: https://bit.ly/CRA-vitals
reportWebVitals();
