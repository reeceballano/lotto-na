import LottoNumber from "./LottoNumber";

const LottoNumbers = ({ lotto, children }) => {
    return (
        <div className="lotto-numbers">
            {
                lotto &&
                lotto.map(num => {
                    return <LottoNumber num={num} key={num} />
                })
            }

            { children }
        </div>
    )
}

export default LottoNumbers;