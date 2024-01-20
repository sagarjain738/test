export default function HigherOrder(Component, heading) {
  return function internal() {
    return (
      <>
        <h2>{heading}</h2>
        <Component />
      </>
    );
  };
}
