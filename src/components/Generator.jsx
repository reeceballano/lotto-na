import { useRef } from "react";
import { motion } from "framer-motion";
import Input from "./Input";
import '../css/Generator.css';
import LottoNumber from "./Number";
import useLotto from "../hooks/useLotto";
import Button from "./Button";
import { HiOutlineRefresh, HiOutlinePlus } from "react-icons/hi";

const Generator = () => {
    const { lotto, specialNumbers, random, setSpecialNumbers } = useLotto();

    const inputEl = useRef('');

    const handleClick = () => {
        const num = 6 - parseInt(specialNumbers.map(item => Number(item)).filter(item => item !== 0).length);
        if(specialNumbers.length) { return random(num); }
        random(6)
    } 

    const addFields = () => {
        if(specialNumbers.length >= 6) { return }
        setSpecialNumbers((prev) => [...prev, '']);
        setTimeout(() => { inputEl.current.focus(); },100)
    }

    const handleChange = (id, event) => {
        const re = /^[0-9\b]+$/;

        // only number is allowed
        if(event.target.value === '' || re.test(event.target.value) ) { 
            const values = [...specialNumbers];
            values[id] = event.target.value;
            setSpecialNumbers(values);
        }
    }

    const handleRemove = (id) => {
        const values = [...specialNumbers];
        values.splice(id, 1);
        setSpecialNumbers(values);
    }

    return (
        <div className="generator">
            <div className="lotto-numbers">
                {
                    lotto &&
                    lotto.map(num => {
                        return <LottoNumber num={num} key={num} />
                    })
                }
            </div>

            <div className={`${specialNumbers.length >= 1 ? '' : 'hidden'} special-numbers`}>
                {
                    specialNumbers.map((field, id) => {
                        return (
                            <div className="special-number" key={id}>
                                    <Input
                                        innerRef={inputEl} 
                                        key={id}
                                        id={id}
                                        field={field}
                                        onChange={(e) => (handleChange(id, e))}
                                />

                                <button className="remove-field" onClick={() => handleRemove(id)}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>

            <div className="generate-container">
                <Button className="generate-btn" onClick={handleClick}>
                    <HiOutlineRefresh /> 
                    Generate
                </Button>
                {
                (specialNumbers.length <= 5 ) &&
                <Button className="add-field" onClick={addFields}>
                    <HiOutlinePlus />
                    Add field
                </Button>
                }
            </div>
        </div>
    )
}

export default Generator;