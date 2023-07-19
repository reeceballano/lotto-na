import { easeInOut } from "framer-motion"

const slideUpDown = () => {
    const transition = {
        delay: 0.5,
        ease: easeInOut,
        type: "spring", 
        stiffness: 100
    }

    const initial = {
        y: -20, 
        opacity: 0
    }

    const animate = {
        opacity: 1, 
        y: 0
    }

    const exit = {
        y: 60, 
        opacity: 0
    }

    return {
        initial,
        animate,
        exit,
        transition
    }
}

export default slideUpDown;