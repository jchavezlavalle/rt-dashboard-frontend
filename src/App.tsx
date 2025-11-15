import { useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import {useWebSocket} from "./useWebSocket";
import { MetricCards } from './MetricCards';
import { motion } from "framer-motion";
import { ThemeToggle } from './ThemeToggle';


import './App.css'

function App() {
  const data = useWebSocket("ws://127.0.0.1:3000/ws");
  const latestValue = data.length > 0 ? data[data.length - 1].value : null;

  return (
    <>
    <div className="flex justify-end mb-6">
        <ThemeToggle />
      </div>
    <div className="min-h-screen flex items-center justify-center p-6">
      
      <motion.div
        className="absolute top-10 right-10 text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      > ✨
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-10 text-4xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      >
        🌸
      </motion.div>
      <div className="bg-white/70 dark:bg-violet-900/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-4xl border border-white/50">

        <h1 className="text-4xl dark:text-white font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
        Real-Time Metrics Dashboard
        </h1>

        <p className="text-center text-gray-600 mb-10 dark:text-white">
          Streaming live data from CPU/memory metrics obtained through WebSockets ✨
        </p>

        <MetricCards latestValue={latestValue} />

        <div className="flex justify-center">
          <LineChart width={700} height={400} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#ec4899" // Tailwind pink-500
              strokeWidth={3}
              dot={false}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="timestamp" hide />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>

      </div>
    </div>
    </>
  );
}

export default App
