const slideUpDown = () => {
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
        exit
    }
}

export default slideUpDown;