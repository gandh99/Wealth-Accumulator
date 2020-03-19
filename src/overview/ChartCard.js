import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts'
import './chart-card.css'

export default function ChartCard(props) {
    return (
        <div className='chart-card'>
            <div className='chart-title'>{props.title}</div>
            <ResponsiveContainer>
                <LineChart
                    data={props.data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <XAxis dataKey="year" stroke='#524e62' />
                    <YAxis mirror={true} stroke='#524e62' />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#7962f2"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
