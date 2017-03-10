import React from 'react';
import ItemListContainer from '../items/item_list_container';
class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.fetchPoke(this.props.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    let newId = parseInt(newProps.params.pokemonId);
    if (this.props.poke.id !== newId) {
      this.props.fetchPoke(this.props.params.pokemonId);
    }
  }

  render() {
    let {poke} = this.props;
    return (
      <section className="detail-content">
        <div className="detail-title-bar">
          <span className="detail-title">{poke.name}</span>
          <span className="hp">HP: {poke.defense}</span>
        </div>
        <figure className="content-image">
          <img src={poke.image_url}/>
          <figcaption>Type: {poke.poke_type}</figcaption>
        </figure>
        <ul className="moves">
          <li>Moves:</li>
          {
            poke.moves.map((move, idx) => (
            <li key={idx}>
              <span className="left">{move}:</span>
              <span className="right">{poke.attack}</span>
            </li>
            ))
          }
        </ul>
        <ItemListContainer />
        {this.props.children}
      </section>
    );
  }
}

export default PokemonDetail;
