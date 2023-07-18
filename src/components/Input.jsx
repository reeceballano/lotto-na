import { motion } from "framer-motion";
import slideUpDown from "../effects/slideUpDown";
const Input = ({ innerRef, id, field, onChange}) => {
    const { initial, animate, exit } = slideUpDown();

    return (
        <div className="input-field">
            <motion.input 
                initial={initial}
                animate={animate}
                exit={exit}
                className="lotto-input"
                ref={innerRef}
                type="text" 
                value={field || ''} 
                onChange={onChange}
            />
        </div>
    )
}

export default Input;