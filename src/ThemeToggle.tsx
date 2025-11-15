import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileTap={{ scale: 0.9 }}
      className="
        flex items-center gap-2 px-4 py-2 rounded-full 
        bg-pink-200 dark:bg-purple-700 
        border border-pink-300 dark:border-purple-500
        shadow-lg hover:shadow-xl transition-all
        text-pink-800 dark:text-purple-100
      "
    >
      <motion.span
        key={dark ? "moon" : "sun"}
        initial={{ rotate: -20, opacity: 0, y: -5 }}
        animate={{ rotate: 0, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="text-2xl"
      >
        {dark ? "🌙" : "🌞"}
      </motion.span>

      {dark ? "Night Mode" : "Day Mode"}
    </motion.button>
  );
}