import React,{ Component, } from 'react';

export default class Count extends Component {
  // getInitialState() {
  //   return {
  //     num: 0,
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.tick = this.tick.bind(this);
  }
  // 挂载前
  componentWillMount() {
    console.log('componentWillMount');
  }
  // 挂载后
  componentDidMount() {
    console.log('componentDidMount');
  }
  // props 更新时
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  // props或state更新时，返回false可阻止组件刷新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  // 组件更新前
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  // 组件更新后
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  // 组件卸载前
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  tick() {
    this.setState((prevState) => ({
      num: prevState.num + 1,
    }));
  }
  render() {
    return (
      <div>
        <span>{this.state.num}</span> 
        <button onClick={this.tick} > +1 </button>
      </div>
    );
  }
};