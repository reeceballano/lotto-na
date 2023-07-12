import { useCallback, useMemo, useRef, useState } from "react";
import Input from "./Input";

const Generator = () => {
    const [lotto, setLotto] = useState(null);
    const [specialNumbers, setSpecialNumbers] = useState([]);
    const inputEl = useRef('');

    const random = useCallback((num) => {
        const lottoArr = [];
        for(let i = 0; i < num; i++) {
            const r = Math.floor(Math.random() * (48 - 1) + 1);
            lottoArr.push(r);
        } 
        // INSERT SPECIAL NUMBERS IF EXIST
        const newSP = specialNumbers.map(item => Number(item));
        const lottoData = [...lottoArr, ...newSP]
        setLotto(lottoData)

        // IF THERE IS DUPLICATE IN ARRAY RERUN random method
        const check = findDuplicates(lottoData);
        if(check.length) { random(num) }
    },[lotto, specialNumbers]);

    const handleClick = () => {
        const num = 6 - parseInt(specialNumbers.length);
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
        const values = [...specialNumbers];
        values[id] = event.target.value;
        setSpecialNumbers(values);
    }

    const handleRemove = (id) => {
        const values = [...specialNumbers];
        values.splice(id, 1);
        setSpecialNumbers(values);
    }

    return (
        <div className="generator">
            {
                JSON.stringify(lotto)
            }
            <hr />
            {
                JSON.stringify(specialNumbers)
            }
            <div>
                {
                    (specialNumbers.length >= 1) &&
                    specialNumbers.map((field, id) => {
                        return (
                            <div key={id}>
                                <Input
                                    innerRef={inputEl} 
                                    key={id}
                                    id={id}
                                    field={field}
                                    onChange={(e) => (handleChange(id, e))}
                                />

                                <button onClick={() => handleRemove(id)}>Remove</button>
                            </div>
                        )

                    })
                }
                <hr />
                <button onClick={addFields}>Add field</button>
            </div>
            <button onClick={handleClick}>
                Generate
            </button>
        </div>
    )
}

export default Generator;