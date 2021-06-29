/* We can pass props in the stateless functional component 
  to get the function from the parent component */
const CloseButton = (props) => {
  return (
    <div
      className="close-button"
      onClick={() => props.onClick({ name: "Cross" })}
    >
      <span></span>
      <span></span>
    </div>
  );
};

export default CloseButton;