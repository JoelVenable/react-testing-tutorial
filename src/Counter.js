import React from 'react';


class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={this.handleClick}
          data-testid="counter-button"
        >
          {count}
        </button>
      </div>
    );
  }
}

export default Counter;
