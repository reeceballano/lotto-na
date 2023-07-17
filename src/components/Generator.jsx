import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Input from "./Input";
import '../css/Generator.css';
import LottoNumber from "./Number";

const Generator = () => {
    const [lotto, setLotto] = useState(null);
    const [specialNumbers, setSpecialNumbers] = useState([]);
    const [lottoOption, setLottoOption] = useState(45);

    const inputEl = useRef('');

    const random = useCallback((num) => {
        const lottoArr = [];
        for(let i = 0; i < num; i++) {
            const r = Math.floor(Math.random() * (lottoOption - 1) + 1);
            lottoArr.push(r);
        } 
        // INSERT SPECIAL NUMBERS IF EXIST
        const newSP = specialNumbers.map(item => Number(item)).filter(item => item !== 0);
        const lottoData = [...lottoArr, ...newSP]
        setLotto(lottoData)

        // IF THERE IS DUPLICATE IN ARRAY RERUN random method
        const check = findDuplicates(lottoData);
        if(check.length) { random(num) }
    },[lotto, specialNumbers]);

    const handleClick = () => {
        const num = 6 - parseInt(specialNumbers.map(item => Number(item)).filter(item => item !== 0).length);

        if(specialNumbers.length) {
            random(num);
        } else {
            random(6)
        }
    } 

    const findDuplicates = (arry) => {
        const uniqueElements = new Set(arry);
        const filteredElements = arry.filter(item => {
            if (uniqueElements.has(item)) {
                uniqueElements.delete(item);
            } else {
                return item;
            }
        });
    
        return [...new Set(filteredElements)]
    }

    const addFields = () => {
        if(specialNumbers.length >= 6) { return }
        setSpecialNumbers((prev) => [...prev, '']);
        setTimeout(() => {
            inputEl.current.focus();
        },100)
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

    useEffect(() => {
        random(6);
    },[])

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
                <button className="generate-btn" onClick={handleClick}>
                    Generate
                </button>
                {
                    (specialNumbers.length <= 5 ) &&
                    <button className="add-field" onClick={addFields}>Add field</button>
                }
            </div>
        </div>
    )
}

export default Generator;