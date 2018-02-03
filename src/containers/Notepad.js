import React, { Component } from 'react'
import { connect } from 'react-redux'

import KeyBoard from './Keyboard'

class Notepad extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <div id="textbox">
          <textarea rows="10" cols="90" value={this.props.string}></textarea>
        </div>
        <div className="container">
          <form>
            <KeyBoard shift={this.props.isShift} />
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    string: state.alphabetReducer.string,
    isShift: state.alphabetReducer.isShift
  };
}

export default connect(mapStateToProps)(Notepad);
