//Conditional Rendering
//using the ternary operator and && short-circutting
function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}
class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>You number is... {num}</h1>
        <p>{num === 7 ? "Congrats!" : "Try again."}</p>
        {num === 7 && (
          <img src="https://media0.giphy.com/media/H5C8CevNMbpBqNqFjl/giphy.gif?cid=ecf05e47un749vyqozdvl6tofgkc7lcco6grbn2t42hbnn3x&rid=giphy.gif&ct=g" />
        )}
      </div>
    );
  }
}
