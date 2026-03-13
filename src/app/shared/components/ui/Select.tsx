import { forwardRef } from "react";
import { cn } from "../../utils/cn";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue?: string;
  children?: React.ReactNode;
  className?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ defaultValue, children, className, ...props }, ref) => {
    return (
      <select
        ref={ref}
        defaultValue={defaultValue}
        className={cn(
          "select w-min-15 select-info w-15 rounded-sm px-3",
          className,
        )}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";

export { Select };
