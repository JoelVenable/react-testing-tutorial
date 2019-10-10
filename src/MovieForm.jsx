import React, { Component } from 'react';


export default class MovieForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  handleChange = (e) => {
    console.log(e);
  }

  render() {
    const { title } = this.state;

    return (
      <form>
        <input type="text" value={title} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
