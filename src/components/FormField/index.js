import React from 'react';
  
  function FormField({ label, name, onChange, type, value }) {
    return (
      <div>
        <label>
          <input name={name} type={type} onChange={onChange} value={value} />
          <span>{label}:</span>
        </label>
      </div>
    );
  }

export default FormField;