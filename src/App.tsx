import { useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {useWebSocket} from "./useWebSocket";

import './App.css'

function App() {
  const data = useWebSocket("ws://127.0.0.1:3000/ws");

  return (
    <><div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>Real-time WebSockets Metrics Dashboard 📊 </h1>
      <LineChart width={800} height={400} data={data}>
        <Line type="monotone" dataKey="value" stroke="#4f46e5" />
        <CartesianGrid stroke="#aaa" />
        <XAxis dataKey="timestamp" hide />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
    </>
  )
}

export default App
