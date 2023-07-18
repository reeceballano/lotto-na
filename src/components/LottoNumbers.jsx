import LottoNumber from "./LottoNumber";

const LottoNumbers = ({ lotto }) => {
    return (
        <div className="lotto-numbers">
            {
                lotto &&
                lotto.map(num => {
                    return <LottoNumber num={num} key={num} />
                })
            }
        </div>
    )
}

export default LottoNumbers;