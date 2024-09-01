import { forwardRef } from "react";
import { cx } from "class-variance-authority";

import { IconProps, iconStyles } from "@/components/icons";

export const Flag = forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    className = cx(iconStyles(props), className);
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={className}
      >
        <path
          d="M13.0914 5.72222H19.0451C19.5173 5.72222 19.7534 5.72222 19.8914 5.82149C20.0119 5.9081 20.0903 6.04141 20.1075 6.18877C20.1272 6.35767 20.0126 6.56403 19.7833 6.97677L18.3624 9.53435C18.2793 9.68403 18.2377 9.75887 18.2214 9.83812C18.207 9.90827 18.207 9.98062 18.2214 10.0508C18.2377 10.13 18.2793 10.2049 18.3624 10.3545L19.7833 12.9121C20.0126 13.3248 20.1272 13.5312 20.1075 13.7001C20.0903 13.8475 20.0119 13.9808 19.8914 14.0674C19.7534 14.1667 19.5173 14.1667 19.0451 14.1667H11.6136C11.0224 14.1667 10.7269 14.1667 10.5011 14.0516C10.3024 13.9504 10.141 13.7889 10.0398 13.5903C9.92472 13.3645 9.92472 13.0689 9.92472 12.4778V9.94444M6.23027 20.5L2.00805 3.61111M3.59143 9.94444H11.4025C11.9937 9.94444 12.2892 9.94444 12.515 9.8294C12.7137 9.7282 12.8751 9.56672 12.9763 9.3681C13.0914 9.14231 13.0914 8.84672 13.0914 8.25556V3.18889C13.0914 2.59772 13.0914 2.30214 12.9763 2.07634C12.8751 1.87773 12.7137 1.71625 12.515 1.61505C12.2892 1.5 11.9937 1.5 11.4025 1.5H3.64335C2.90602 1.5 2.53735 1.5 2.2852 1.65278C2.0642 1.78668 1.89999 1.99699 1.82369 2.24387C1.73663 2.52555 1.82605 2.88321 2.00489 3.59852L3.59143 9.94444Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);
Flag.displayName = "Flag";
