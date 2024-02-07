import React from "react";
import classNames from "classnames";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={classNames(
          "bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
          className
        )}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
