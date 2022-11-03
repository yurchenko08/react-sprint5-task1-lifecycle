import React, { Component } from "react";

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      error: null,
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/list")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ isLoaded: true, list: result });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }
  render() {
    const { error, isLoaded, list } = this.state;
    if (error) return <div>Error: {error.message}</div>;
    else if (!isLoaded) return <div className='col-2'>Loading...</div>;
    else {
      return (
        <div className='row'>
          {list.map((el) => {
            return (
              <p className='col-3 border' key={el.id}>
                id-{el.id}
                <br />
                name-{el.name}
                <br />
                note-{el.note}
              </p>
            );
          })}
        </div>
      );
    }
  }
}
