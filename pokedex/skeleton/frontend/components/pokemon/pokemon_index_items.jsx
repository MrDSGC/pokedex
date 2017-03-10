import React from 'react';
import {Link} from 'react-router';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {poke} = this.props;
    return (
      <li>
        <Link to={`/pokemon/${poke.id}`}>
          <span>
            {poke.id}
          </span>
          <img className="list-image" src={poke.image_url} />
          <span>
            {poke.name}
          </span>

        </Link>
      </li>
    );
  }
}

export default PokemonIndexItem;
