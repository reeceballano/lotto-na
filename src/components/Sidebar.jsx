import { motion } from "framer-motion";
import slideUpDown from "../effects/slideUpDown";

const Sidebar = ({ children }) => {
    const { initial, animate, exit, transition } = slideUpDown();

    return (
        <motion.div
            transition={transition}
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