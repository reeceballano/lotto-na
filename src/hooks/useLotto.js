import { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useLotto = () => {
    const [lotto, setLotto] = useState(null);
    const [specialNumbers, setSpecialNumbers] = useState([]);
    const [lottoOption, setLottoOption] = useState(45);
    const [isSPExist, setIsSPExist] = useState(false);

    const random = useCallback((num) => {
        const lottoArr = [];
        for(let i = 0; i < num; i++) {
            const r = Math.floor(Math.random() * (lottoOption - 1) + 1);
            lottoArr.push(r);
        } 

        // INSERT SPECIAL NUMBERS IF EXIST
        const newSP = specialNumbers.map(item => Number(item)).filter(item => item !== 0);
        const lottoData = [...lottoArr, ...newSP]
        setLotto(lottoData);

        // IF THERE IS DUPLICATE IN ARRAY RERUN random method
        const check = findDuplicates(lottoData);
        if(check.length) { random(num) }
    },[lotto, specialNumbers]);

    const checkExist = useDebounce(() => {
        const check = findDuplicates(specialNumbers);
        
        if(check.length >= 1) { return setIsSPExist(true) }
        return setIsSPExist(false);
    },500)

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

    // Handle lotto option
    const handleLottoOption = (val) => {
        console.log('handle lotto option',val)
        setLottoOption(val);
    }

    // RUN ON FIRST LOAD THE RANDOM FUNCTION
    useEffect(() => {
        random(6);
    },[])

    // WATCH specialNumbers changes
    useEffect(() => {
        // CHECK IS SPECIAL NUMBER IS ALREADY EXIST IS specialNumbers array
        console.log('...')
        checkExist();
    }, [specialNumbers])

    return {
        random,
        lotto,
        setLotto,
        specialNumbers,
        setSpecialNumbers,
        lottoOption,
        handleLottoOption,
        isSPExist
    }
}

export default useLotto;