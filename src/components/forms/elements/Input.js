export const Input = ({
    type = 'text', tag = 'input', placeholder, register, options, error, label,
}) => {
    let input = (
        <input
            placeholder = { placeholder }
            type = { type }
            { ...register } />
    );

    if (tag === 'textarea') {
        input = (
            <textarea placeholder = { placeholder } { ...register }></textarea>
        );
    }

    if (tag === 'select') {
        const optionsJSX = options?.map((option) => {
            return (
                <option key = { option.value } value = { option.value }>
                    { option.name }
                </option>
            );
        });

        input = <select { ...register }>{ optionsJSX }</select>;
    }

    return (
        <label>
            <div className = 'input-label'>
                { label }{ ' ' }
                <span className = 'error-message'>{ error?.message }</span>
            </div>
            { input }
        </label>
    );
};
