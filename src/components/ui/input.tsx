import { cn } from '@/lib/utils';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  borderedPrefix?: React.ReactNode;
  inputPrefix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputPrefix, borderedPrefix, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {borderedPrefix && (
          <span className="absolute inset-y-0 left-0 flex items-center border-r pl-3.5 pr-3 text-tertiary-600">
            {borderedPrefix}
          </span>
        )}

        {inputPrefix && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-tertiary-600">
            {inputPrefix}
          </span>
        )}

        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            borderedPrefix ? 'pl-[95px]' : 'pl-3',
            inputPrefix ? 'pl-[42px]' : 'pl-3',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
