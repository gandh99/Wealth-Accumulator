import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer, AreaChart, ReferenceLine, Area } from 'recharts'
import './chart-card.css'

export default function ChartCard(props) {
    return (
        <div className='chart-card'>
            <ResponsiveContainer>
                <LineChart
                    data={props.data}
                >
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
