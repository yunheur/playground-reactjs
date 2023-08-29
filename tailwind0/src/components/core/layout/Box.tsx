import * as React from "react";

export type BoxProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export default function Box({ children, ...props }: BoxProps) {
  return <div {...props}>{children}</div>;
}
