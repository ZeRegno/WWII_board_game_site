import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HexagonGrid from './HexagonGrid';
import HexagonGridWithArmor from './HexagonArmor';

// Импорт PNG-иконок
import APIcon from '../images/icons/AP.png';
import HEIcon from '../images/icons/HE.png';

const UnitDetailPage = () => {
    const { id } = useParams();
    const [unit, setUnit] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:8080/api/units/${id}`)
            .then(response => response.json())
            .then(data => {
                setUnit(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching unit details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!unit) {
        return <div>Юнит не найден</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1 className="unit-title">{unit.name}</h1>
            {/* Контейнер с Flexbox для изображения и информации */}
            <div className="unit-header">
                {unit.imageName && (
                    <div className="unit-image">
                        <img
                            src={`http://localhost:8080/images/units/${unit.imageName}`}
                            alt={unit.name}
                            style={{ maxWidth: '300px', maxHeight: '200px' }}
                        />
                    </div>
                )}
                <div className="unit-info">
                    <p><strong>Нация:</strong> {unit.nation}</p>
                    <p><strong>Класс:</strong> {unit.vehicleClass} техника</p>
                    <p><strong>Цена:</strong> {unit.price} ●</p>
                    <p><strong>Вес:</strong> {unit.weight} КО</p>
                </div>
            </div>

            {/* Оставшаяся информация */}
            <div>
                <p><strong>Модификатор точности:</strong> {unit.accuracyModifier}</p>

                <div className="stats-container"
                     style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '20px'}}>
                    {/* Пробитие и Урон по технике */}
                    <div className="stat-item"
                         style={{
                             display: 'flex',
                             flexDirection: 'column',
                             alignItems: 'center',
                             justifyContent: 'flex-start',
                             height: '200px'
                         }}>
                        <img
                            src={APIcon}
                            alt="AP Icon"
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'contain',
                                marginBottom: '10px'
                            }}
                        />
                        <p style={{margin: 0}}><strong>Пробитие:</strong> {unit.penetration}</p>
                        <p style={{margin: 0}}><strong>Урон по технике:</strong> {unit.damageVehicles}</p>
                    </div>

                    {/* Урон по пехоте */}
                    <div className="stat-item"
                         style={{
                             display: 'flex',
                             flexDirection: 'column',
                             alignItems: 'center',
                             justifyContent: 'flex-start',
                             height: '200px'
                         }}>
                        <img
                            src={HEIcon}
                            alt="HE Icon"
                            style={{
                                width: '100px',
                                height: '100px',
                                objectFit: 'contain',
                                marginBottom: '10px'
                            }}
                        />
                        <p style={{margin: 0}}><strong>Урон по пехоте:</strong> {unit.damageInfantry}</p>
                    </div>
                </div>


                <h3>Точность</h3>
                <p><strong>Пехота:</strong> {unit.accuracyInfantry}</p>
                <p><strong>Артиллерия:</strong> {unit.accuracyArtillery}</p>
                <p><strong>Малые цели:</strong> {unit.accuracySmallV}</p>
                <p><strong>Средние цели:</strong> {unit.accuracyMediumV}</p>
                <p><strong>Большие цели:</strong> {unit.accuracyLargeV}</p>

                <h3>Защита</h3>
                {/* Рендер шестиугольника */}
                <HexagonGrid
                    centerX={250} // Центр изображения
                    centerY={250}
                    size={50} // Размер стороны шестиугольника
                    strokeColor="white" // Цвет линий
                    strokeWidth={10} // Толщина линий
                />
                <h3>Орудия и атаки</h3>
                <p><strong>Атак за ход:</strong> {unit.attacksPerTurn}</p>
                <p><strong>Выстрелов за атаку:</strong> {unit.shotsPerAttack}</p>

                <h3>Дальность движения</h3>
                <p><strong>Дистанция движения:</strong> {unit.moveDistance} м</p>

                <h3>Модули и действия</h3>
                <p><strong>Модули:</strong> {unit.modules.join(', ')}</p>
                <p><strong>Дополнительные действия:</strong> {unit.additionalActions.join(', ')}</p>

                <a href="/units" className="button">
                    Назад к списку юнитов
                </a>
            </div>
        </div>
    );
};

export default UnitDetailPage;