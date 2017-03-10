import React from 'react';
import {Link} from 'react-router';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    let {items} = this.props;
    let {pokeId} = this.props;
    return (
      <div className="item-window">
        <h3>Items</h3>
        <ul>
          {items.map((item, idx)=> (
            <li key={idx}>
              <img src={item.image_url}/>
              <Link to={`/pokemon/${pokeId}/items/${item.id}`}>
                TEST
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
