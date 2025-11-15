import { motion } from "framer-motion";

interface MetricCardsProps {
  latestValue: number | null;
}

export function MetricCards({ latestValue }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

      {/* Latest Metric */}
      <motion.div
        key={latestValue} // important: re-animates on change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Latest Value</h2>
        <p className="text-4xl font-bold text-pink-600">
          {latestValue !== null ? latestValue.toFixed(2) : "--"}
        </p>
      </motion.div>

      {/* Placeholder: Add more metrics later */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Average (Coming Soon)</h2>
        <p className="text-3xl font-bold text-indigo-600">--</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50"
      >
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Min/Max (Soon)</h2>
        <p className="text-3xl font-bold text-purple-600">--</p>
      </motion.div>
    </div>
  );
}