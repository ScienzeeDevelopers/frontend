import React from 'react'
import styles from './Select.module.css'

const Select = ({ name, options, handleOnChange, value }) => {
    return (
        <div className={styles.form_control}>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option></option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select