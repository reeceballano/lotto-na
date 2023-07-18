import { motion } from "framer-motion";
import slideUpDown from "../effects/slideUpDown";

const Sidebar = ({ children }) => {
    const { initial, animate, exit } = slideUpDown();

    return (
        <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            className="sidebar"
        >
            { children}
        </motion.div>
    )
}

export default Sidebar;