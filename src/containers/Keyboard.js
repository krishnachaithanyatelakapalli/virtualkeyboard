import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

class KeyBoard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // this return should have atmost one element and no more than that
    return (
      <div>
        <div id="first-row">
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.One())
            }}>{this.props.shift ? '!':1}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Two())
            }}>{this.props.shift ? '@':2}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Three())
            }}>{this.props.shift ? '#':3}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Four())
            }}>{this.props.shift ? '$':4}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Five())
            }}>{this.props.shift ? '%':5}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Six())
            }}>{this.props.shift ? '^':6}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Seven())
            }}>{this.props.shift ? '&':7}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Eight())
            }}>{this.props.shift ? '*':8}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Nine())
            }}>{this.props.shift ? '(':9}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Zero())
            }}>{this.props.shift ? ')':0}</button>
          </div>
        </div>
        <div id="second-row">
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Q())
            }}>{this.props.shift ? 'Q':'q'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.W())
            }}>{this.props.shift ? 'W': 'w'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.E())
            }}>{this.props.shift ? 'E': 'e'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.R())
            }}>{this.props.shift ? 'R': 'r'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.T())
            }}>{this.props.shift ? 'T': 't'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Y())
            }}>{this.props.shift ? 'Y': 'y'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.U())
            }}>{this.props.shift ? 'U': 'u'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.I())
            }}>{this.props.shift ? 'I': 'i'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.O())
            }}>{this.props.shift ? 'O': 'o'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.P())
            }}>{this.props.shift ? 'P': 'p'}</button>
          </div>
          <div className="is-grouped">
            <button onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Backspace())
            }}>Backspace</button>
          </div>
        </div>
        <div id="third-row">
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.A())
            }}>{this.props.shift ? 'A': 'a'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.S())
            }}>{this.props.shift ? 'S': 's'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.D())
            }}>{this.props.shift ? 'D': 'd'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.F())
            }}>{this.props.shift ? 'F': 'f'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.G())
            }}>{this.props.shift ? 'G': 'g'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.H())
            }}>{this.props.shift ? 'H': 'h'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.J())
            }}>{this.props.shift ? 'J': 'j'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.K())
            }}>{this.props.shift ? 'K': 'k'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.L())
            }}>{this.props.shift ? 'L': 'l'}</button>
          </div>
          <div className="is-grouped">
            <button onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Enter())
            }}>Enter</button>
          </div>
        </div>
        <div id="fourth-row">
          <div className="is-grouped">
            <button className={this.props.shift ? "selected": ""} id="shift-key" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Shift())
            }}>
              Shift
            </button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Z())
            }}>{this.props.shift ? 'Z': 'z'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.X())
            }}>{this.props.shift ? 'X': 'x'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.C())
            }}>{this.props.shift ? 'C': 'c'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.V())
            }}>{this.props.shift ? 'V': 'v'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.B())
            }}>{this.props.shift ? 'B': 'b'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.N())
            }}>{this.props.shift ? 'N': 'n'}</button>
          </div>
          <div className="is-grouped">
            <button className="keys" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.M())
            }}>{this.props.shift ? 'M': 'm'}</button>
          </div>
        </div>
        <div id="fifth-row">
          <div className="is-grouped">
            <button id="space-key" onClick={(e) => {
              e.preventDefault();
              this.props.dispatch(actions.Space())
            }}>Space</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return {
    actions: bindActionCreators(actions , dispatch)
  }
}

export default connect(mapDispatchToProps)(KeyBoard)
