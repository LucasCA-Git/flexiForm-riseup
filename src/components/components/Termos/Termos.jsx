import React from 'react';
import './Termos.css';

export default function Termos({
  id,
  label,
  value, // Valor booleano: true ou false
  onChange,
  visible = true,
  className = ''
}) {
  if (!visible) {
    return null;
  }

  const handleChange = (e) => {
    // Retorna o estado booleano do checkbox (e.target.checked)
    if (onChange) {
      onChange(id, e.target.checked, { valid: true });
    }
  };

  return (
    <div className={`form-field-checkbox ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={!!value} // Usa !!value para garantir que valor seja tratado como booleano
        onChange={handleChange}
        className="form-checkbox-input"
      />
      {label && (
        <label htmlFor={id} className="form-checkbox-label">
          {label}
        </label>
      )}
    </div>
  );
}