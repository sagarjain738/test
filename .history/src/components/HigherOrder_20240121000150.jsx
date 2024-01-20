export default function HigherOrder(Component, heading) {
  return function internal(props) {
    return (
      <>
        <h2>{heading}</h2>
        <Component {...props} />
      </>
    );
  };
}
