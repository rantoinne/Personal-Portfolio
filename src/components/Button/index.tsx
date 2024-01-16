import React from 'react';
import './styles.css';

/*eslint no-undef: "error"*/
interface ButtonProps {
  title: string;
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  title,
  className,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`basicButton__main ${className}`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
