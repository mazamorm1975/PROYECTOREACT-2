/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */

export function HelloWorld(props) {
  return (
    <>
      <h1>Hola Mundo</h1>
      <div>Que tal !{props.user}</div>
    </>
  );
}
