// import React from "react";

// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props.name);
//     this.state = {
//       count: 1,
//       count2: 2,
//     };
//   }

//   render() {
//     const { count, count2 } = this.state;
//     const { name } = this.props;
//     return (
//       <div className="classcomp">
//         <p>This is class component</p>
//         {/* <h2>Count: {this.state.count}</h2> */}
//         {/* <h2>Name: {this.props.name}</h2> */}
//         <h3>Count: {count}</h3>
//         <h3>Count: {count2}</h3>
//         <button onClick={()=>{
//             this.setState({
//                 count: this.state.count + 1,
//                 count2: this.state.count2 + 2
//             })
//         }}>Increment</button>
//         <h3>Name:{name}</h3>
//       </div>
//     );
//   }
// }

// export default UserClass;


import React from "react";

class UserClass extends React.Component{

  constructor(){
    super()
    console.log("i am child constructor.");
    
  }
  componentDidMount(){
    console.log("I am child component did Mount.");
    
  }
  render(){
    console.log("i am child render.");
    
    return(
      <div>
        <h1>Class component</h1>
      </div>
    )
  }


}

export default UserClass;