/***
 * @param specialNumbers - array of numbers, user input fields
 * @param onClick - function to remove field
 * @param onChange - event function to push numbers in specialNumbers array
 * @param inputEl - inner ref to map each input field; usage autofocus
 */


import Button from "./Button";
import Input from "./Input";

const SpecialNumbers = ({ specialNumbers, onClick, onChange, inputEl }) => {
    return (
        <div className="special-numbers">
            {
                specialNumbers.map((field, id) => {
                    return (
                        <div className="special-number" key={id}>
                            <Input
                                innerRef={inputEl} 
                                key={id}
                                id={id}
                                field={field}
                                onChange={(e) => (onChange(id, e))}
                            />
                            <Button className="remove-field" onClick={() => onClick(id)}>
                                Remove
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SpecialNumbers;