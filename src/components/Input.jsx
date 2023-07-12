const Input = ({ innerRef, id, field, onChange}) => {
    return (
        <div className="input-field">
            <input 
                className="lotto-input"
                ref={innerRef}
                type="text" 
                value={field || ''} 
                onChange={onChange}
            />
        </div>
    )
}

export default Input;