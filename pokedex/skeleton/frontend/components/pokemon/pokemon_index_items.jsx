import React from 'react';
import {Link} from 'react-router';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {poke} = this.props;

    return (
      <li><Link to={`/pokemon/${poke.id}`}>{poke.name}</Link></li>
    );
  }
}

export default PokemonIndexItem;
