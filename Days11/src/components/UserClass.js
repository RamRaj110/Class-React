import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name);
    // this.state = {
    //   count: 1,
    //   count2: 2,
    // };

    this.state={
      userInfo:{
name:"random",
      pic:"randompic"
      }
      
    }
  }

  async componentDidMount() {
    // console.log("I am class component did mount");

    const data = await fetch("https://api.github.com/users/RamRaj1100");
    const res = await data.json();
    console.log(res);
    this.setState({
      userInfo:res
    })
  }

  componentDidUpdate(){
    console.log("i am component updata.");
    
  }
  componentWillUnmount(){
    console.log("i am component unmount.");
    
  }

  render() {
    // const { count, count2 } = this.state;
    // const { name } = this.props;
    const {name,avatar_url,bio,location}= this.state.userInfo;
    
    return (
      <div className="classcomp">
        {/* <p>This is class component</p> */}
        {/* <h2>Count: {this.state.count}</h2> */}
        {/* <h2>Name: {this.props.name}</h2> */}
        {/* <h3>Count: {count}</h3> */}
        {/* <h3>Count: {count2}</h3> */}
        {/* <button onClick={()=>{
            this.setState({
                count: this.state.count + 1,
                count2: this.state.count2 + 2
            })
        }}>Increment</button>
        <h3>Name:{name}</h3> */}
        <h3>Name: {name}</h3>
        <img className="git_pic" src={avatar_url} alt="pic" />
        <p>Location:{location}</p>
        <p>About:{bio}</p>
      </div>
    );
  }
}

export default UserClass;
