import "../../css/Card.css";
function Card(props) {
  //add props.className if there's an additional class on the parent when it call
  const parentClass = `card ${props.className}`;

  //   Add props.children whenever we add elements when this component called
  return <div className={parentClass}>{props.children}</div>;
}

export default Card;
