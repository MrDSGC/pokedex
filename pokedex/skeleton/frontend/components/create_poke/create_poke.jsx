import React from 'react';

class CreatePoke extends React.Component {
  construcor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      moves: [],
      image_url: "",
      items: []
    };
  }

  handleSubmit() {
    this.props.createPoke(this.state)
      .then(console.log("Success"). console.log("fail"));
  }

  updateState(key) {
      return e => this.setState({[key]: e.target.value});
  }

  render() {
    return (
      <div>
        <label>Name:
          <input
            onChange={this.updateState('name')}
            type="text"
            value={this.state.title}>
          </input>
        </label>
        <label>Attack:
          <input
            onChange={this.updateState('attack')}
            type="text"
            value={this.state.title}>
          </input>
        </label>
        <label>Defense:
          <input
            onChange={this.updateState('defense')}
            type="text"
            value={this.state.title}>
          </input>
        </label>
        <label>Type:
          <input
            onChange={this.updateState('poke_type')}
            type="text"
            value={this.state.title}>
          </input>
        </label>
        <label>Moves:
          <input
            onChange={this.updateState('moves')}
            type="text"
            value={this.state.title}>
          </input>
        </label>
        <label>IMG URL:
          <input
            onChange={this.updateState('image_url')}
            type="text"
            value={this.state.title}>
          </input>
        </label>

        <button onClick={this.handleSubmit}>Create Todo</button>
      </div>
    );
  }
}
