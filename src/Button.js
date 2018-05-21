import React, { Component } from 'react';

// const StartButton = () => {
//     return (
//         <button className="add shadow">Add</button>
//     )
// }

class Button extends Component {
  render() {
    const {
      onClick,
      className,
      children
    } = this.props;

    return (
      <button 
      className={className}
      onClick={onClick}
      type="button"
      >
      {children}
      </button>
    )

  }
}

export default Button;

// const StartText = () => {
//   return (
//       <div className="text">
//         <h1>Your day’s still empty...</h1>
//         <p>Put in some tasks and make your day!</p>
//       </div>
//   )
// }

// export default StartButton;





// const StartText = () => {
//   return (
//       <div className="start">
//       <div className="text">
//         <h1>Your day’s still empty...</h1>
//         <p>Put in some tasks and make your day!</p>
//       </div>
//       <button className="add shadow">Add</button>
//     </div>
//   )
// }

// export default StartButton;
