import { motion } from "framer-motion";

interface MetricCardsProps {
  latestValue: number | null;
}

export function MetricCards({ latestValue }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

      {/* Latest Metric */}
      <motion.div
        key={latestValue}
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="bg-pink-200/60 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-pink-100/70
                   hover:scale-[1.03] hover:shadow-2xl transition-all cursor-default"
      >
        <div className="text-5xl text-pink-600 mb-2">✨</div>
        <h2 className="text-lg font-semibold text-pink-700 mb-2">Latest Value</h2>
        <p className="text-4xl font-extrabold text-pink-800 drop-shadow-sm">
          {latestValue !== null ? latestValue.toFixed(2) : "--"}
        </p>
      </motion.div>

      {/* Avg placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
        className="bg-indigo-200/60 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-indigo-100/70
                   hover:scale-[1.03] hover:shadow-2xl transition-all cursor-default"
      >
        <div className="text-5xl text-indigo-600 mb-2">🌈</div>
        <h2 className="text-lg font-semibold text-indigo-700 mb-2">Average (Soon)</h2>
        <p className="text-4xl font-extrabold text-indigo-800 drop-shadow-sm">--</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        className="bg-purple-200/60 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-purple-100/70
                   hover:scale-[1.03] hover:shadow-2xl transition-all cursor-default"
      >
        <div className="text-5xl text-purple-600 mb-2">💖</div>
        <h2 className="text-lg font-semibold text-purple-700 mb-2">Min / Max (Soon)</h2>
        <p className="text-4xl font-extrabold text-purple-800 drop-shadow-sm">--</p>
      </motion.div>

    </div>
  );
}