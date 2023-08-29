import * as React from "react";
import Flex from "./Flex";
import Box, { BoxProps } from "./Box";

export interface GridProps extends BoxProps {
  columns?: number;
  gapX?: number;
  gapY?: number;
}

export default function Grid({
  children,
  columns = 2,
  gapX = 0,
  gapY = 0,
  ...props
}: React.PropsWithChildren<GridProps>) {
  const isNonFirstColumn = (idx: number) => idx % columns !== 0;
  const isNonFirstRow = (idx: number) => idx >= columns;

  return (
    <Box {...props}>
      <Flex className="flex-wrap">
        {React.Children.map(children, (child, childIdx) => (
          <Box
            key={childIdx}
            style={{
              paddingLeft: isNonFirstColumn(childIdx) ? gapX : undefined,
              paddingTop: isNonFirstRow(childIdx) ? gapY : undefined,
              width: `${100 / columns}%`,
            }}
          >
            {child}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
