import React, { Component } from 'react';
import { connect } from 'dva';

@connect(state => ({
  test1: state.test1,
}))
export default class Test1 extends Component {
  state = {
    aa: 1,
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'test1/aaa',
      aaa: 123,
      def: this,
    });
  }

  render() {
    console.log(this.state);
    return (<div>123</div>);
  }
}

