import React from "react";

// Компонент для одного шестиугольника
const Hexagon = ({ size, strokeWidth, strokeColor, x, y }) => {
    const generateHexagonPoints = (size) => {
        const angle = Math.PI / 3; // Угол между вершинами (60 градусов)
        const points = [];
        for (let i = 0; i < 6; i++) {
            const px = size * Math.cos(i * angle);
            const py = size * Math.sin(i * angle);
            points.push(`${px},${py}`);
        }
        return points.join(" ");
    };

    const points = generateHexagonPoints(size);

    return (
        <polygon
            points={points}
            transform={`translate(${x}, ${y})`}
            style={{
                fill: "none", // Шестиугольник пустой
                stroke: strokeColor, // Цвет линий
                strokeWidth: `${strokeWidth}px`, // Толщина линий
            }}
        />
    );
};

// Компонент для сетки шестиугольников
const HexagonGrid = ({ centerX, centerY, size, strokeColor, strokeWidth }) => {
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
            {/* Центральный шестиугольник */}
            <Hexagon x={centerX} y={centerY} size={size} strokeColor={strokeColor} strokeWidth={strokeWidth} />

            {/* Внешние шестиугольники */}
            {offsets.map((offset, index) => (
                <Hexagon
                    key={index}
                    x={centerX + offset.dx}
                    y={centerY + offset.dy}
                    size={size}
                    strokeColor={strokeColor}
                    strokeWidth={strokeWidth}
                />
            ))}
        </svg>
    );
};

export default HexagonGrid;
