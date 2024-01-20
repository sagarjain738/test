export default function HigherOrder(Component, heading) {
  return function internal(props) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h2>{heading}</h2>
        <Component {...props} />
      </div>
    );
  };
}
