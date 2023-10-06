import { useContext, useRef } from "react";
import '../css/Generator.css';
import useLotto from "../hooks/useLotto";
import Button from "./Button";
import { HiOutlineRefresh, HiOutlinePlus, HiOutlineSave } from "react-icons/hi";
import LottoNumbers from "./LottoNumbers";
import SpecialNumbers from "./SpecialNumbers";
import { LocalStorageContext } from "../context/LocalStorageProvider";
import LottoOption from "./LottoOption";

const Generator = () => {
    const { lotto, specialNumbers, random, setSpecialNumbers, isSPExist, lottoOption, handleLottoOption } = useLotto();
    
    const { addLotto } = useContext(LocalStorageContext);

    const inputEl = useRef('');

    const handleClick = () => {
        // Don't include zero value in specialNumbers
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

    // Lotto option
    const isChecked = (val) => {
        if(Number(lottoOption) !== Number(val)) { return false }
        return true;
    }

    return (
        <div className="generator">
            <LottoNumbers lotto={lotto}>
                
                <Button onClick={() => addLotto(lotto)} className="save-btn secondary-btn">
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
                <LottoOption onChange={handleLottoOption} isChecked={isChecked}/>
                
                <Button disabled={isSPExist} className={`generate-btn primary-btn ${isSPExist ? 'btn-disabled' : ''}`} onClick={handleClick}>
                    <HiOutlineRefresh /> 
                    Generate
                </Button>
                {
                (specialNumbers.length <= 5 ) &&
                <Button disabled={isSPExist} className={`add-field outlined-btn ${isSPExist ? 'btn-disabled' : ''}`} onClick={addFields}>
                    <HiOutlinePlus />
                    Add field
                </Button>
                }
            </div>
        </div>
    )
}

export default Generator;