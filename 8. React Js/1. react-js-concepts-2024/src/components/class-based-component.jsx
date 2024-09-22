import { Component } from "react";

class ClassBasedComponent extends Component {
  //---------------------------------- state object
  state = {
    showText: false,
    changeColour: false,
    count: 0,
    changeCountStyle: false,
  };
  //----------------------------------

  //---------------------------------- event
  handleClick = () => {
    console.log("Button Clicked");

    //this is not recommened
    // this.state.showText = !this.state.showText;

    const { showText, changeColour } = this.state;

    this.setState({
      showText: !showText,
      changeColour: !changeColour,
    });
  };

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };
  //----------------------------------

  //---------------------------------- componentDidMount

  componentDidMount() {
    console.log("this is called first time on page load");

    const { showText, changeColour } = this.state;
    this.setState({
      showText: !showText,
      changeColour: !changeColour,
    });
  }

  //----------------------------------

  //---------------------------------- componentDidUpdate

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);

    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: !this.state.changeCountStyle,
      });
    }
  }

  //----------------------------------

  //---------------------------------- componentWillUnmount

  componentWillUnmount() {
    console.log("component is getting unmounted");

    
  }

  //----------------------------------

  //---------------------------------- render method
  render() {
    console.log(this.state);

    const { showText, changeColour, count, changeCountStyle } = this.state;

    return (
      <div>
        {showText ? (
          <h2 style={{ color: changeColour ? "red" : "black" }}>
            Class Based Component
          </h2>
        ) : null}

        <button onClick={this.handleClick}>Toggle Text</button>
        <button onClick={this.handleCount}>Increse count</button>
        <h3
          style={{
            color: changeCountStyle ? "blue" : "white",
            fontSize: changeCountStyle ? "30px" : "12px",
          }}
        >
          Count:{count}
        </h3>
      </div>
    );
  }
}
export default ClassBasedComponent;

//----------------------------------
