/***
 * @param specialNumbers - array of numbers, user input fields
 * @param onClick - function to remove field
 * @param onChange - event function to push numbers in specialNumbers array
 * @param inputEl - inner ref to map each input field; usage autofocus
 */


import Button from "./Button";
import Input from "./Input";
import { HiOutlineX } from 'react-icons/hi';
import { AnimatePresence, motion } from "framer-motion";
import slideUpDown from "../effects/slideUpDown";

const SpecialNumbers = ({ specialNumbers, onClick, onChange, inputEl }) => {
    const { initial, animate, exit } = slideUpDown();

    return (
        <div className="special-numbers">
            <AnimatePresence>
                {
                    specialNumbers.map((field, id) => {
                        return (
                            <motion.div 
                                className="special-number" 
                                key={id}
                                initial={initial}
                                animate={animate}
                                exit={exit}
                            >
                                <Input
                                    innerRef={inputEl} 
                                    key={id}
                                    id={id}
                                    field={field}
                                    onChange={(e) => (onChange(id, e))}
                                />
                                <Button className="remove-field" onClick={() => onClick(id)}>
                                    <HiOutlineX />
                                </Button>
                            </motion.div>
                        )
                    })
                }
            </AnimatePresence>
        </div>
    )
}

export default SpecialNumbers;