import { cva, type VariantProps } from "class-variance-authority";

export * as Icons from "./_icons";

type IconBaseProps = VariantProps<typeof iconStyles>;
type IconWithoutFillBaseProps = VariantProps<typeof iconWithoutFillStyles>;

export type IconProps<WithoutFill = false> = Omit<
  React.SVGProps<SVGSVGElement>,
  "fill"
> &
  (WithoutFill extends true ? IconWithoutFillBaseProps : IconBaseProps);

export const iconStyles = cva([], {
  variants: {
    fill: {
      true: "fill-current",
      false: "fill-none",
    },
  },
  defaultVariants: {
    fill: false,
  },
});

export const iconWithoutFillStyles = cva([], {
  variants: {},
});
