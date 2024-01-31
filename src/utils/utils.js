export const createIcon = (d, opts) => {
  const { width, height, style, fill, ...props } = opts;
  if (style) {
    return (
      <div className={style} {...props}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
          fill={fill}
        >
          {typeof d === "string" ? <path fill="currentColor" d={d} /> : d}
        </svg>
      </div>
    );
  } else {
    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
        fill={fill}
      >
        {typeof d === "string" ? <path fill="currentColor" d={d} /> : d}
      </svg>
    );
  }
};
