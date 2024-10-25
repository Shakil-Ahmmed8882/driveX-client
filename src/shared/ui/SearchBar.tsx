import { Input } from 'antd';
import React from 'react';

interface InputProps {
  onChange: (p:string) => void;
  placeholder?: string;
  prefix?: React.ReactNode;
  style?: React.CSSProperties;
}

const SearchBar: React.FC<InputProps> = ({ onChange, placeholder = "Enter text...", prefix, style }) => {
  return (
    <div className='md:w-1/2'>
      {prefix && <span style={{ marginRight: 8 }}>{prefix}</span>}
      <Input 
        className="p-3 focus-within:border-none hover:border-primaryColor w-full" 
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder} 
        style={{ flex: 1 }}
      />
    </div>
  );
};

export default SearchBar;
