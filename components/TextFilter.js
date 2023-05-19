import TextFieldStyle from '../styles/TextFilter.module.scss';
import CurrencyInput from 'react-currency-input-field';
import { useState } from "react";

const TextFilter = ({currency, setApiParams, apiParams, id}) => {
  
  const [value, setValue] = useState(apiParams[id]);

  const handleChange = () => {
    const newParams = {
      ...apiParams,
      [id]: value
    }
    setApiParams(newParams);
  }

  const onFieldChange = (newVal) => {
    setValue(newVal);
  }

  return (<>
    <div className={TextFieldStyle.wrapper}>
      <span>{currency}</span>
      {/* <input type="number" value={value} onChange={e => onFieldChange(e.target.value)} /> */}
      <CurrencyInput
        id={id}
        name={id}
        placeholder=""
        defaultValue={value}
        decimalsLimit={2}
        onValueChange={(value, name) => onFieldChange(value)}
      />
      <button type="button" onClick={handleChange}>Confirm</button>
    </div>
  </>)
}

export default TextFilter;