import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // api
  }

  componentDidUpdate() {
    // check for change in component
  }

  componentWillUnmount() {
    // clear some data or for some popup
  }

  render() {
    return <>Hello</>;
  }
}

export default List;

// life cycle
// initialization
// rendering
// mounting => single
// updating => multiple time
// unmounting => single
