import React, { useState, useRef, useEffect } from 'react';

const RadarChart = ({ 
  name, 
  traits, 
  size = 200, 
  className = "" 
}) => {
  const [hoveredTrait, setHoveredTrait] = useState(null);
  const svgRef = useRef(null);

  // 五个特质的定义
  const traitDefinitions = [
    { key: 'warmth', label: '陪伴温度', labelEn: 'Warmth', color: '#FF7262' },
    { key: 'understanding', label: '情绪理解', labelEn: 'Emotional Understanding', color: '#5FA896' },
    { key: 'playfulness', label: '互动趣味', labelEn: 'Playfulness', color: '#FFB347' },
    { key: 'loyalty', label: '忠诚守护', labelEn: 'Loyalty', color: '#7B68EE' },
    { key: 'growth', label: '共成长动力', labelEn: 'Growth Motivation', color: '#244285' }
  ];

  // 计算五边形的顶点坐标
  const getPolygonPoints = (centerX, centerY, radius, values = null) => {
    const points = [];
    const angleStep = (2 * Math.PI) / 5;
    const startAngle = -Math.PI / 2; // 从顶部开始

    for (let i = 0; i < 5; i++) {
      const angle = startAngle + i * angleStep;
      const value = values ? values[i] / 100 : 1; // 标准化到0-1
      const pointRadius = radius * value;
      const x = centerX + pointRadius * Math.cos(angle);
      const y = centerY + pointRadius * Math.sin(angle);
      points.push([x, y]);
    }
    
    return points;
  };

  // 计算标签位置
  const getLabelPosition = (centerX, centerY, radius, index) => {
    const angleStep = (2 * Math.PI) / 5;
    const startAngle = -Math.PI / 2;
    const angle = startAngle + index * angleStep;
    const labelRadius = radius + 30; // 标签距离中心更远
    const x = centerX + labelRadius * Math.cos(angle);
    const y = centerY + labelRadius * Math.sin(angle);
    return { x, y };
  };

  const centerX = size / 2;
  const centerY = size / 2;
  const maxRadius = size / 2 - 50; // 留出标签空间

  // 获取特质值数组
  const traitValues = traitDefinitions.map(trait => traits[trait.key] || 0);

  // 背景网格线（多层五边形）
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
  
  // 数据多边形的点
  const dataPoints = getPolygonPoints(centerX, centerY, maxRadius, traitValues);
  const dataPolygonPath = `M ${dataPoints.map(p => p.join(',')).join(' L ')} Z`;

  return (
    <div className={`relative ${className}`}>
      <svg 
        ref={svgRef}
        width={size} 
        height={size} 
        className="overflow-visible"
      >
        {/* 定义渐变 */}
        <defs>
          <radialGradient id={`radarGradient-${name}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(36, 66, 133, 0.3)" />
            <stop offset="100%" stopColor="rgba(36, 66, 133, 0.1)" />
          </radialGradient>
          <filter id={`glow-${name}`}>
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* 背景网格 */}
        {gridLevels.map((level, levelIndex) => {
          const gridPoints = getPolygonPoints(centerX, centerY, maxRadius * level);
          const gridPath = `M ${gridPoints.map(p => p.join(',')).join(' L ')} Z`;
          
          return (
            <path
              key={levelIndex}
              d={gridPath}
              fill="none"
              stroke="rgba(36, 66, 133, 0.15)"
              strokeWidth={levelIndex === gridLevels.length - 1 ? 2 : 1}
              strokeDasharray={levelIndex === gridLevels.length - 1 ? "none" : "2,2"}
            />
          );
        })}

        {/* 从中心到顶点的线 */}
        {traitDefinitions.map((trait, index) => {
          const endPoint = getPolygonPoints(centerX, centerY, maxRadius)[index];
          return (
            <line
              key={`axis-${index}`}
              x1={centerX}
              y1={centerY}
              x2={endPoint[0]}
              y2={endPoint[1]}
              stroke="rgba(36, 66, 133, 0.2)"
              strokeWidth="1"
            />
          );
        })}

        {/* 数据多边形 */}
        <path
          d={dataPolygonPath}
          fill={`url(#radarGradient-${name})`}
          stroke="#244285"
          strokeWidth="2"
          filter={`url(#glow-${name})`}
          className="transition-all duration-300"
        />

        {/* 数据点 */}
        {dataPoints.map((point, index) => (
          <circle
            key={`point-${index}`}
            cx={point[0]}
            cy={point[1]}
            r="4"
            fill={traitDefinitions[index].color}
            stroke="white"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-200 hover:r-6"
            onMouseEnter={() => setHoveredTrait(index)}
            onMouseLeave={() => setHoveredTrait(null)}
          />
        ))}

        {/* 特质标签 */}
        {traitDefinitions.map((trait, index) => {
          const labelPos = getLabelPosition(centerX, centerY, maxRadius, index);
          const isHovered = hoveredTrait === index;
          
          return (
            <g key={`label-${index}`} className="cursor-pointer">
              <text
                x={labelPos.x}
                y={labelPos.y - 5}
                textAnchor="middle"
                className={`text-xs font-medium transition-all duration-200 ${
                  isHovered ? 'fill-current text-blue-600' : 'fill-current text-gray-700'
                }`}
                onMouseEnter={() => setHoveredTrait(index)}
                onMouseLeave={() => setHoveredTrait(null)}
              >
                {trait.label}
              </text>
              <text
                x={labelPos.x}
                y={labelPos.y + 8}
                textAnchor="middle"
                className={`text-xs transition-all duration-200 ${
                  isHovered ? 'fill-current text-blue-500' : 'fill-current text-gray-500'
                }`}
                onMouseEnter={() => setHoveredTrait(index)}
                onMouseLeave={() => setHoveredTrait(null)}
              >
                {trait.labelEn}
              </text>
              {/* 数值显示 */}
              <text
                x={labelPos.x}
                y={labelPos.y + 20}
                textAnchor="middle"
                className={`text-xs font-semibold transition-all duration-200 ${
                  isHovered ? 'fill-current text-blue-600' : 'fill-current text-gray-600'
                }`}
                onMouseEnter={() => setHoveredTrait(index)}
                onMouseLeave={() => setHoveredTrait(null)}
              >
                {traitValues[index]}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 悬停提示 */}
      {hoveredTrait !== null && (
        <div className="absolute top-2 left-2 bg-white rounded-lg shadow-lg p-3 border border-gray-200 z-10">
          <div className="text-sm font-semibold text-gray-800">
            {traitDefinitions[hoveredTrait].label}
          </div>
          <div className="text-xs text-gray-600">
            {traitDefinitions[hoveredTrait].labelEn}
          </div>
          <div className="text-lg font-bold text-blue-600 mt-1">
            {traitValues[hoveredTrait]}/100
          </div>
        </div>
      )}
    </div>
  );
};

export default RadarChart;