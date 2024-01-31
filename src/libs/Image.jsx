const Image = ({
  src,
  alt,
  onClick,
  onLoad,
  loading,
  id,
  className,
  width,
  height,
  color,
  smartCrop = true,
}) => {
  const config = {
    width: typeof width === "number" ? width : undefined,
    height: typeof height === "number" ? height : undefined,
    smartCrop: smartCrop,
  };
  return (
    <img
      id={id}
      src={src}
      draggable={false}
      alt={alt}
      onClick={onClick}
      loading={loading || "eager"}
      className={className}
      width={width}
      height={height}
      onLoad={onLoad}
      color={color}
    />
  );
};

export default Image;
