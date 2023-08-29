import Flex, { FlexProps } from "./Flex";

export default function Center({ children, className, ...props }: FlexProps) {
  return (
    <Flex className={`justify-center items-center ${className}`} {...props}>
      {children}
    </Flex>
  );
}
