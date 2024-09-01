import { type VariantProps, cva } from 'class-variance-authority';
import { SVGProps } from 'react';

export * as Icons from './_icons';

type IconBaseProps = VariantProps<typeof iconStyles>;
type IconWithoutFillBaseProps = VariantProps<typeof iconWithoutFillStyles>;

export type IconProps<WithoutFill = false> = Omit<
  SVGProps<SVGSVGElement>,
  'fill'
> &
  (WithoutFill extends true ? IconWithoutFillBaseProps : IconBaseProps);

export const iconStyles = cva([], {
  variants: {
    fill: {
      true: 'fill-current',
      false: 'fill-none',
    },
  },
  defaultVariants: {
    fill: false,
  },
});

export const iconWithoutFillStyles = cva([], {
  variants: {},
});
