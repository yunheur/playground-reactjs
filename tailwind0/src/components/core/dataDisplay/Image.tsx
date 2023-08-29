import { BoxProps } from "../layout/Box";

export type ImageProps = {
  src: string;
  resizeMode: ImageResizeMode | undefined;
} & BoxProps;
export type ImageResizeMode =
  | "cover"
  | "contain"
  | "cover"
  | "none"
  | "scale-down";

export default function Image({
  src,
  resizeMode = "cover",
  className = "",
  ...props
}: ImageProps) {
  return (
    <div className={`relative ${className}`} {...props}>
      <img
        src={src}
        style={{ width: "100%", height: "100%", objectFit: resizeMode }}
      />
    </div>
  );
}
