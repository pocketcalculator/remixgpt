import { ReactNode } from 'react';

interface FormLabelProps {
  children?: ReactNode;
  className?: string;
  htmlFor?: string;
}

const FormLabel = ({ children, className = '', htmlFor }: FormLabelProps) => {
  return (
    <label className={`block text-sm font-medium leading-6 text-gray-900 ${className}`} htmlFor={htmlFor}>
      { children }
    </label>
  )
}

export default FormLabel;