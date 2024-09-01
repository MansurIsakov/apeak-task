import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';

import { IconProps, iconStyles } from '@/components/icons';

export const Close = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    className = cx(iconStyles(props), className);
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={className}>
        <path
          d="M13 1L1 13M1 1L13 13"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);
Close.displayName = 'Close';
