import React from 'react';
import './SelectMultiple.css';

export default function SelectMultiple({ 
  id, 
  label, 
  options = [],
  required = false,
  value = [],
  onChange,
  visible = true,
  placeholder = 'Selecione uma ou mais opções',
  className = ''
}) {
  if (!visible) {
    return null;
  }

  const selectedValues = Array.isArray(value) ? value : [];

  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    
    if (onChange) {
      onChange(id, selectedOptions);
    }
  };

  return (
    <div className={`form-field select-multiple-field ${className}`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <select
        id={id}
        multiple
        required={required}
        value={selectedValues}
        onChange={handleChange}
        className="form-select-multiple"
        size={Math.min(Math.max(options.length, 3), 6)}
      >
        {options.map((option, index) => {
          const optionValue = typeof option === 'object' ? option.value : option;
          const optionLabel = typeof option === 'object' ? option.label : option;
          
          return (
            <option key={index} value={optionValue}>
              {optionLabel}
            </option>
          );
        })}
      </select>
      {selectedValues.length > 0 && (
        <div className="selected-count">
          {selectedValues.length} opção(ões) selecionada(s)
        </div>
      )}
    </div>
  );
}

