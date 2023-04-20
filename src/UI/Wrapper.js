const Wrapper = (props) => {
  const randomColor = {
    color: '#' + props.textColor,
    backgroundColor: '#' + props.cardColor
  }

  return (
    <div className={props.className} onClick={props.onClick} style={randomColor} id={props.id}>
      {props.children}
    </div>
  );
};

export default Wrapper;
