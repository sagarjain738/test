export default function HigherOrder(component, heading) {
  return function internal() {
    return (
      <>
        <h2>{heading}</h2>
        {component}
      </>
    );
  };
}
