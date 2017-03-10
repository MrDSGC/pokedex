import React from 'react';

class ItemDetail extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let {item} = this.props;
    console.log(this.props);
    return (
      <div>
        <h3>{item.name}</h3>
        <ul>
          <li>
            Happiness
            {item.happiness}
          </li>
          <li>
            Price:
            {item.price}¥
          </li>
        </ul>
      </div>
    );
  }
}

export default ItemDetail;
