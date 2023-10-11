import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import slideUpDown from '../effects/slideUpDown';
import { HiOutlineX } from 'react-icons/hi';
import { useContext } from 'react';
import { LocalStorageContext } from '../context/LocalStorageProvider';
import Button from './Button';

const LocalStorageItem = ({ item }) => {
    const { initial, animate, exit, transition } = slideUpDown();
    const { removeLotto } = useContext(LocalStorageContext);

    return (
        <motion.li
            key={item}
            transition={transition}
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
            <small className="lotto-option">{item.option}</small>
            <Button className="remove-field" onClick={() => removeLotto(item.id)}>
                <HiOutlineX />
            </Button>
        </motion.li>
    )
}

export default LocalStorageItem;