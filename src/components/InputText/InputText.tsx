interface InputTextProps {
  className?: string;
  id?: string;
  name: string;
  type?: 'text' | 'email';
}

const InputText = ({ id, className = 'bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', type = 'text', name }: InputTextProps) => {
  return (
    <input
      id={id}
      className={`${className}`}
      type={type}
      name={name}
    />
  );
}

export default InputText;