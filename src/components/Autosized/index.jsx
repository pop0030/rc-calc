import React, { Component } from 'react';

class Autosized extends Component {
  state = {
    parentWidth: 0,
    parentHeight: 0,
    parentTop: 0,
    parentLeft: 0
  };
  sizeRect = null;

  componentDidMount() {
    this.handles.getRectObject();
    window.addEventListener('resize', this.handles.getRectObject);
  }

  handles = {
    getRectObject: (evt) => {
      const rectObj = this.sizeRect.getBoundingClientRect();
      this.setState({
        parentWidth: rectObj.width,
        parentHeight: rectObj.height,
        parentTop: rectObj.top,
        parentLeft: rectObj.left
      });
    }
  };
  render () {
    const restProps = this.props;
    const { children } = restProps;
    const state = this.state;
    return (
      <div
        ref={el => this.sizeRect = el}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative'
        }}
        {...restProps}
      >
        {
          React.Children.map(
            children,
            child => React.cloneElement(child, { ...state })
          )
        }
      </div>
    )
  }
}

export default Autosized;
