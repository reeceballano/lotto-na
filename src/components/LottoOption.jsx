import useLotto from '../hooks/useLotto';
import '../css/LottoOption.css';

const LottoOption = ({ onChange, isChecked }) => {

    return(
        <div className="lotto-options">
            <div className="form-group">
                <input 
                    type="checkbox" 
                    name="option-45" 
                    id="option-45"
                    className="option-checkbox"
                    checked={isChecked(45)}
                    onChange={() => onChange(45)}
                />
                <label className="option-checkbox" htmlFor="option-45">45</label>
            </div>
            <div className="form-group">
                <input 
                    type="checkbox" 
                    name="option-49" 
                    id="option-49"
                    className="option-checkbox"
                    checked={isChecked(49)} 
                    onChange={() => onChange(49)}
                />
                <label className="option-label" htmlFor="option-49">49</label>
            </div>
            <div className="form-group">
                <input 
                    type="checkbox" 
                    name="option-55" 
                    id="option-55"
                    className="option-checkbox"
                    checked={isChecked(55)} 
                    onChange={() => onChange(55)}
                />
                <label className="option-checkbox" htmlFor="option-55">55</label>
            </div>
        </div>
    )
}

export default LottoOption;