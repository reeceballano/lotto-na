import { motion } from "framer-motion";

const Sidebar = ({ children }) => {
    return (
        <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: -20, opacity: 0 }}
            className="sidebar"
        >
            { children}
        </motion.div>
    )
}

export default Sidebar;