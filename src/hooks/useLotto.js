import { useCallback, useEffect, useState } from "react";

const useLotto = () => {
    const [lotto, setLotto] = useState(null);
    const [specialNumbers, setSpecialNumbers] = useState([]);
    const [lottoOption, setLottoOption] = useState(45);

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

    useEffect(() => {
        random(6);
    },[])

    return {
        random,
        lotto,
        setLotto,
        specialNumbers,
        setSpecialNumbers,
        lottoOption,
        setLottoOption
    }
}

export default useLotto;