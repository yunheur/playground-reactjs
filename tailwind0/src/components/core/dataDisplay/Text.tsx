import { BoxProps } from "../layout/Box";

export type TextProps = BoxProps & {
  numberOfLines?: number; // 라인 수
};

export default function Text({
  children,
  numberOfLines,
  className = "",
  ...props
}: TextProps) {
  return (
    <div className={`line-clamp-${numberOfLines} ${className}`} {...props}>
      {children}
    </div>
  );
}
