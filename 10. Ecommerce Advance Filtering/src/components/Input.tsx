

interface InputProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    title: string;
    name: string;
    color?: string;
}


function Input ({handleChange, value, title, name, color } : InputProps) {
    return  (
        <>
        <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value={value} name={name} />
            <span className="checkmark" style={{backgroundColor: color}}>{""}
            {title}
            </span>
        </label>
        </>
    );
};

export default Input;