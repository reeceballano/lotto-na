import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import slideUpDown from '../effects/slideUpDown';

const LocalStorageItem = ({ item }) => {
    const { initial, animate, exit } = slideUpDown();

    return (
        <motion.li
            ke={item}
            initial={initial}
            animate={animate}
            exit={exit}    
        >
            {
                item.number.map(item => {
                    return <span key={item}>{item} </span>
                })
            } 
            <small>{dayjs(item.date).format('MMMM D, YYYY')}</small>
        </motion.li>
    )
}

export default LocalStorageItem;