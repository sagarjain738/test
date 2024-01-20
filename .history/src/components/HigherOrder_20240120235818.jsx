export default function HigherOrder(component, heading) {
  return function () {
    return (
      <>
        <h2>{heading}</h2>
        {component}
      </>
    );
  };
}
