import React, { PureComponent } from 'react';
import { Treemap } from 'recharts';

const data = [
  {
    name: 'HTML 90%',size: 90
  },
  {
    name: 'CSS 90%',size: 90 
  },
  {
    name: 'Javascript 80%',size: 80
  },
  {
    name: 'React 70%', size: 70
  },
  {
    name: 'MongoDB 60%', size: 60
  },
  {
    name: 'Node 60%', size: 60
  },
  {
    name: 'Express 60%', size: 60
  },
  {
    name: 'TypeScript 60%', size: 60
  },
  {
    name: 'Sass 70%', size: 70
  },
  {
    name: 'TDD/BDD 60%', size: 70
  },
    
];

const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];

class CustomizedContent extends PureComponent {
  render() {
    const {
      root, depth, x, y, width, height, index, colors, name,
    } = this.props;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: depth < 2 ? colors[Math.floor(index / root.children.length * 6)] : 'none',
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {
          depth === 1 ? (
            <text
              x={x + width / 2}
              y={y + height / 2 + 7}
              textAnchor="middle"
              fill="#fff"
              fontSize={14}
            >
              {name}
            </text>
          ) : null
        }
        {
          depth === 1 ? (
            <text
              x={x + 4}
              y={y + 18}
              fill="#fff"
              fontSize={16}
              fillOpacity={0.9}
            >
              {index + 1}
            </text>
          ) : null
        }
      </g>
    );
  }
}

export default class TreeMap extends PureComponent {

  render() {
    return (
      <Treemap
        width={800}
        height={400}
        data={data}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
        content={<CustomizedContent colors={COLORS} />}
      />
    );
  }
}
