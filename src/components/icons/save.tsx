import { cx } from 'class-variance-authority';
import { forwardRef } from 'react';

import { IconProps, iconStyles } from '@/components/icons';

export const Save = forwardRef<SVGSVGElement, IconProps>(
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
          d="M4.83333 1.5V4.33333C4.83333 4.80004 4.83333 5.0334 4.92416 5.21166C5.00406 5.36846 5.13154 5.49594 5.28834 5.57584C5.4666 5.66667 5.69996 5.66667 6.16667 5.66667H11.8333C12.3 5.66667 12.5334 5.66667 12.7117 5.57584C12.8685 5.49594 12.9959 5.36846 13.0758 5.21166C13.1667 5.0334 13.1667 4.80004 13.1667 4.33333V2.33333M13.1667 16.5V11.1667C13.1667 10.7 13.1667 10.4666 13.0758 10.2883C12.9959 10.1315 12.8685 10.0041 12.7117 9.92416C12.5334 9.83333 12.3 9.83333 11.8333 9.83333H6.16667C5.69996 9.83333 5.4666 9.83333 5.28834 9.92416C5.13154 10.0041 5.00406 10.1315 4.92416 10.2883C4.83333 10.4666 4.83333 10.7 4.83333 11.1667V16.5M16.5 6.77124V12.5C16.5 13.9001 16.5 14.6002 16.2275 15.135C15.9878 15.6054 15.6054 15.9878 15.135 16.2275C14.6002 16.5 13.9001 16.5 12.5 16.5H5.5C4.09987 16.5 3.3998 16.5 2.86502 16.2275C2.39462 15.9878 2.01217 15.6054 1.77248 15.135C1.5 14.6002 1.5 13.9001 1.5 12.5V5.5C1.5 4.09987 1.5 3.3998 1.77248 2.86502C2.01217 2.39462 2.39462 2.01217 2.86502 1.77248C3.3998 1.5 4.09987 1.5 5.5 1.5H11.2288C11.6364 1.5 11.8402 1.5 12.0321 1.54605C12.2021 1.58688 12.3647 1.65422 12.5138 1.7456C12.682 1.84867 12.8261 1.9928 13.1144 2.28105L15.719 4.88562C16.0072 5.17387 16.1513 5.318 16.2544 5.48619C16.3458 5.63531 16.4131 5.79789 16.4539 5.96795C16.5 6.15976 16.5 6.36358 16.5 6.77124Z"
          stroke="currentColor"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);
Save.displayName = 'Save';
