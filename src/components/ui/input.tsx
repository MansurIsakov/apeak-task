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
          <span
            className="text-tertiary absolute inset-y-0 left-0 flex items-center border-r pl-3.5 pr-3"
            aria-hidden={true}>
            {borderedPrefix}
          </span>
        )}

        {inputPrefix && (
          <span
            className="text-tertiary absolute inset-y-0 left-0 flex items-center pl-3.5"
            aria-hidden={true}>
            {inputPrefix}
          </span>
        )}

        <input
          type={type}
          className={cn(
            'placeholder:text-placeholder text-primary border-primary ring-focus disabled:bg-disabled disabled:border-disabled disabled:text-disabled flex h-11 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed',

            borderedPrefix ? 'pl-[95px]' : inputPrefix ? 'pl-[42px]' : 'pl-3',
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
