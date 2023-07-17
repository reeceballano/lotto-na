import { motion } from "framer-motion";

const Input = ({ innerRef, id, field, onChange}) => {
    return (
        <div className="input-field">
            <motion.input 
                initial={{ y: -20, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: -20, opacity: 0 }}
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