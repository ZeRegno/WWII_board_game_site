import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UnitListPage = () => {
        const [units, setUnits] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
                fetch('http://localhost:8080/api/units')
                    .then(response => {
                            if (!response.ok) {
                                    throw new Error(`HTTP error! Status: ${response.status}`);
                            }
                            return response.json();
                    })
                    .then(data => {
                            setUnits(data);
                            setLoading(false);
                    })
                    .catch(error => {
                            console.error('Error fetching units:', error);
                            setLoading(false);
                    });
        }, []);

        if (loading) {
                return <div>Загрузка...</div>;
        }

        return (
            <div className="page-container">
                    <h1>Список юнитов</h1>
                    {units.length === 0 ? (
                        <p>Нет доступных юнитов</p>
                    ) : (
                        <ul>
                                {units.map((unit, index) => (
                                    <li key={index}>
                                            <Link to={`/units/${unit.id}`} className="link">
                                                    {unit.name}
                                            </Link>
                                    </li>
                                ))}
                        </ul>
                    )}
                    <a href="/" className="button">
                            Назад на главную
                    </a>
            </div>
        );
};

export default UnitListPage;
