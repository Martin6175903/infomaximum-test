import { ComponentProps, PropsWithChildren } from 'react';
import './button.scss';

interface ButtonProps extends ComponentProps<'button'> {
  width?: number;
  availability?: boolean;
}

const Button = ({
  children,
  width,
  availability = true
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`button-primary ${availability ? '' : 'button--active'}`}
      style={{ width: width ? `${width}px` : `254px` }}
    >
      {children}
    </button>
  );
};

export default Button;
