import { useDispatch } from "react-redux";
import { filterSongs } from "../Features/musicSlice";
import { motion } from "framer-motion";

export default function SearchBar() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterSongs(e.target.value));
  };

  return (
    <motion.input
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      type="text"
      placeholder="Sök efter låtar..."
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
      onChange={handleChange}
      aria-label="Sök efter låtar"
    />
  );
}
