// react libraries
import * as React from 'react';

/**
 * 
 * @param param0 
 */
const SelectInput: React.SFC<any> = (props) => {
  const {
    id,
    name,
    error,
    className,
    onChange,
    options,
    value,
    label
  } = props;
  
  return (
    <div className="input-field col s12">
      <select
        id={id}
        name={name}
        value={value}
        className={className}
        onChange={onChange}
      >
        <option value="" disabled> Choose your option </option>
        {
          options && options.map((option) => {
            return (
              <option 
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            );
          })
        }
      </select>
      <label>{label}</label>
      { 
        error && <span className="red-text">{error}</span>
      }
    </div>
  );
};

export default SelectInput;
