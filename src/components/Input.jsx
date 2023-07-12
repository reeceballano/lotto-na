const Input = ({ id, field, onChange}) => {
    return (
        <div className="input-field">
            <input 
                type="text" 
                value={field || ''} 
                onChange={onChange}
            />
        </div>
    )
}

export default Input;