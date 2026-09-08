export function Image({ fill, priority, quality, ...props }) {
    const fillStyle = fill
        ? {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
          }
        : undefined;

    return (
        <img
            {...props}
            alt={props.alt || ""}
            style={{ ...fillStyle, ...props.style }}
        />
    );
}

export function Link({ href, children, ...props }) {
    return (
        <a href={href} {...props}>
            {children}
        </a>
    );
}
