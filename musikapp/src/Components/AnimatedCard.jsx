import { motion } from "framer-motion";

export default function AnimatedCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-md p-6 m-4 transition-colors duration-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-primary dark:text-white">{title}</h2>
      <div className="text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </motion.div>
  );
}
