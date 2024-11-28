const HexagonWithArmor = ({ x, y, size, armorValues, strokeColor = 'white', strokeWidth = 2 }) => {
    // Генерация точек для шестиугольника
    const hexagonPoints = Array.from({ length: 6 }).map((_, i) => {
        const angle = (Math.PI / 3) * i; // 60 градусов в радианах
        return `${x + size * Math.cos(angle)},${y + size * Math.sin(angle)}`;
    }).join(' ');

    // Функция для вычисления позиций для текста на каждой из сторон шестиугольника
    const getTextPosition = (i) => {
        const angle = (Math.PI / 3) * i; // Угол для каждой стороны
        const midAngle = angle + Math.PI / 6; // Сдвиг для середины каждой стороны
        return {
            x: x + size * 0.8 * Math.cos(midAngle), // Позиция по оси X
            y: y + size * 0.8 * Math.sin(midAngle), // Позиция по оси Y
        };
    };

    return (
        <g>
            {/* Шестиугольник */}
            <polygon
                points={hexagonPoints}
                style={{
                    fill: 'none',
                    stroke: strokeColor,
                    strokeWidth: `${strokeWidth}px`,
                }}
            />

            {/* Отображение значений брони вдоль каждой стороны шестиугольника */}
            {armorValues.map((armor, index) => {
                const { x: textX, y: textY } = getTextPosition(index);
                return (
                    <text
                        key={index}
                        x={textX}
                        y={textY}
                        textAnchor="middle"
                        style={{
                            fontSize: '12px',
                            fontWeight: 'bold',
                            fill: 'white',
                        }}
                    >
                        {armor}
                    </text>
                );
            })}
        </g>
    );
};

// Использование компонента HexagonWithArmor
const HexagonGridWithArmor = ({ centerX, centerY, size, armorValues, strokeColor, strokeWidth }) => {
    // Смещения для шестиугольников (вокруг центрального)
    const offsets = [
        { dx: 0, dy: -2 * size }, // Верхний
        { dx: Math.sqrt(3) * size, dy: -size }, // Правый верхний
        { dx: Math.sqrt(3) * size, dy: size }, // Правый нижний
        { dx: 0, dy: 2 * size }, // Нижний
        { dx: -Math.sqrt(3) * size, dy: size }, // Левый нижний
        { dx: -Math.sqrt(3) * size, dy: -size }, // Левый верхний
    ];

    return (
        <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            style={{ margin: '0 auto', display: 'block' }}
        >
            {/* Центральный шестиугольник с брони и треугольником */}
            <HexagonWithArmor
                x={centerX}
                y={centerY}
                size={size}
                armorValues={armorValues}
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
            />

            {/* Внешние шестиугольники */}
            {offsets.map((offset, index) => (
                <HexagonWithArmor
                    key={index}
                    x={centerX + offset.dx}
                    y={centerY + offset.dy}
                    size={size}
                    armorValues={armorValues}
                    strokeColor={strokeColor}
                    strokeWidth={strokeWidth}
                />
            ))}
        </svg>
    );
};

export default HexagonGridWithArmor;