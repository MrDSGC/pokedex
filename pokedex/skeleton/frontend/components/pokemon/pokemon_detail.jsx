import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    // console.log(newProps);
    this.props.fetchPoke(newProps.params.pokemonId);
  }

  render() {
    let {poke} = this.props;
    // console.log(this.props);
    return (
      <h1>{poke.name}</h1>
    );
  }
}

export default PokemonDetail;
