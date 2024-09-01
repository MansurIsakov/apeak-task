import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { Icons } from '../icons';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors shadow-xs cursor-pointer focus-visible:outline-none ring-focus focus-visible:ring-2 ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-brand-600 text-base-white hover:bg-brand-700 disabled:bg-disabled disabled:text-fg-disabled disabled:border-disabled-subtle',
        secondary:
          'bg-base-white text-fg-secondary border border-secondary hover:bg-secondary-hover disabled:text-fg-disabled disabled:border-disabled-subtle',
        destructive:
          'bg-error-600 text-fg-white ring-error hover:bg-error-700 disabled:bg-disabled disabled:text-fg-disabled disabled:border-disabled-subtle',
      },
      size: {
        default: 'h-11 px-1.5 py-2.5',
        xs: 'h-9 rounded-md py-2 px-1',
        sm: 'h-10 rounded-md py-2.5 px-1',
        lg: 'h-12 rounded-md px-1.5 py-3',
        xl: 'h-15 rounded-lg px-2.5 py-4',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

const ButtonCloseX = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(
          'hover:bg-primary-hover flex items-center justify-center rounded-md p-4 ring-offset-background data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
          className
        )}
        ref={ref}
        {...props}>
        <Icons.XClose className="h-3 w-3 text-fg-quinary" />
        <span className="sr-only">Close</span>
      </button>
    );
  }
);
ButtonCloseX.displayName = 'ButtonCloseX';

export { Button, ButtonCloseX, buttonVariants };
