import React from 'react';
import Schedule from './Schedule';
import ProduceList from './ProduceList';

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; // new code
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Schedule />
      buttonText = "Return to produce list"; // new code
    } else {
      currentlyVisibleState = <ProduceList />;
      buttonText = "Return to schedule"; // new code
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> { /* new code */}
      </React.Fragment>
    );
  }


}
export default ProduceControl;