import React from 'react';
import PokemonIndexItem from './pokemon_index_items';
class PokemonIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  objectDidMount() {
    this.props.fetchAllPokemon();
  }

  render() {
    let {pokemon} = this.props;
    console.log(this.props);
    return (
      <div>
        <div className={"poke-list"}>
          <ul>
            {pokemon.map((poke, idx) => (
              <PokemonIndexItem
                key={idx}
                poke={poke} />
            ))}
          </ul>
        </div>
        <div className={"main-view"}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PokemonIndex;
