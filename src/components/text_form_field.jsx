import { FormLabel } from '@chakra-ui/react';
import cls from 'classnames';
import { useState } from 'react';
import styles from '../components/styles/textFormField.module.css';

export const TextFormField = ({ value, checkIfPassword, label, onChange, onBlur, name }) => {
  var { textValue, setTextValue } = useState(value);
  var isPassword = checkIfPassword ?? false;
  var borderClass = "text-black bg-cream mt-8 mb-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center";
  
  return (
    <div className='relative w-full'>
      <FormLabel className="text-left leading-3 text-sm">{label}</FormLabel>
      <input type={isPassword ? "password" : "text"} name={name} className={cls(borderClass, styles.formInput)} value={textValue} onBlur={onBlur} onChange={onChange}/>
    </div>
  );
}