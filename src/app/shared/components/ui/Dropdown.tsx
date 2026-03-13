import React, { type FC, type ReactNode } from "react";

interface DropdownProps {
  title: string;
  items?: ReactNode;
}

export const Dropdown: FC<DropdownProps> = ({ title, items }) => {
  return (
    <details className="dropdown dropdown-end">
      <summary className="btn m-1">{title}</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        {items}
      </ul>
    </details>
  );
};
