import { BoxProps } from "./Box";

export type FlexProps = BoxProps & {
  gapX?: number;
  gapY?: number;
};

export default function Flex({
  children,
  className,
  style,
  gapX = 0,
  gapY = 0,
  ...props
}: FlexProps) {
  return (
    <div
      className={`flex ${className}`}
      style={{ columnGap: `${gapX}px`, rowGap: `${gapY}px`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
