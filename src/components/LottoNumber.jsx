import { motion } from "framer-motion";
import slideUpDown from "../effects/slideUpDown";

const LottoNumber = ({ num }) => {
    const { initial, animate, exit } = slideUpDown();

    return (
        <div className="lotto-number">
            <motion.span
                key={num}
                initial={initial}
                animate={animate}
                exit={exit}
            >
                {num}
            </motion.span>
        </div>
    )
}

export default LottoNumber;