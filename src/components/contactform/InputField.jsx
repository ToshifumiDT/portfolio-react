export const InputField = ({ name, type, placeholder, value, onChange }) => (
    <div>
        {type === "textarea" ? (
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full mb-4 textarea-field"  
            />
        ) : (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full mb-4"  
            />
        )}
    </div>
);
