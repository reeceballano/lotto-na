import { motion } from "framer-motion";
const LottoNumber = ({ num }) => {
    return (
        <div className="lotto-number">
            <motion.span
                key={num}
                initial={{ y: -10, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: -20, opacity: 0 }}
            >
                {num}
            </motion.span>
        </div>
    )
}

export default LottoNumber;