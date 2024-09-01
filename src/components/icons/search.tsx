import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';

import { IconProps, iconStyles } from '@/components/icons';

export const Search = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    className = cx(iconStyles(props), className);
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={className}>
        <path
          d="M16.5 16.5L13.5834 13.5833M15.6667 8.58333C15.6667 12.4954 12.4954 15.6667 8.58333 15.6667C4.67132 15.6667 1.5 12.4954 1.5 8.58333C1.5 4.67132 4.67132 1.5 8.58333 1.5C12.4954 1.5 15.6667 4.67132 15.6667 8.58333Z"
          stroke="currentColor"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);
Search.displayName = 'Search';
