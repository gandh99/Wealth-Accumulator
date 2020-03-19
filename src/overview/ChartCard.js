import React from 'react'
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts'
import './chart-card.css'

export default function ChartCard(props) {
    return (
        <div className='chart-card'>
            <ResponsiveContainer>
                <LineChart
                    data={props.data}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <XAxis dataKey="year" />
                    <YAxis 
                        // mirror={true}
                        width={40}  //either mirror this or dynamically set the  width
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
