import React from 'react'

function FormField({ value, onChange, name, type, label }) {
    return (
        <div>
            <label>
                {label}
            </label>
            {type === "textarea" ?
                <textarea type={type}
                    name={name}
                    value={value}
                    onChange={onChange}>

                </textarea> :
                <input type={type}
                    name={name}
                    value={value}
                    onChange={onChange} />

            }

        </div>
    )
}

export default FormField;