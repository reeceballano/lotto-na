import { useRef } from "react";
import '../css/Generator.css';
import useLotto from "../hooks/useLotto";
import Button from "./Button";
import { HiOutlineRefresh, HiOutlinePlus, HiOutlineSave } from "react-icons/hi";
import LottoNumbers from "./LottoNumbers";
import SpecialNumbers from "./SpecialNumbers";

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

    const handleSave = () => {
    
    }

    return (
        <div className="generator">
            <LottoNumbers lotto={lotto}>
                <Button onClick={handleSave} className="save-btn secondary-btn">
                    <HiOutlineSave /> Save 
                </Button>
            </LottoNumbers>

            {
                (specialNumbers.length > 0) &&
                <SpecialNumbers 
                    specialNumbers={specialNumbers} 
                    onClick={handleRemove}
                    onChange={handleChange}
                    inputEl={inputEl}
                />
            }

            <div className="generate-container">
                <Button className="generate-btn primary-btn" onClick={handleClick}>
                    <HiOutlineRefresh /> 
                    Generate
                </Button>
                {
                (specialNumbers.length <= 5 ) &&
                <Button className="add-field secondary-btn" onClick={addFields}>
                    <HiOutlinePlus />
                    Add field
                </Button>
                }
            </div>
        </div>
    )
}

export default Generator;