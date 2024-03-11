import React from 'react';
import clsx from 'clsx';

// Define the ButtonProps type, extending the standard button properties
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...restProps }) => {
    // Combine additional className props with the default Tailwind styles
    const buttonClassName = clsx(
        "bg-orange-100 hover:bg-orange-300 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1",
        className
    );

    return (
        <button className={buttonClassName} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
