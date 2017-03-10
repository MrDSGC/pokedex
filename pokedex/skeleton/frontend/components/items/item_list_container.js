import { connect } from 'react-redux';
import ItemList from './item_list';

const mapStateToProps = (state, ownProps) => ({
  items: state.poke.items,
  pokeId: state.poke.id
});

export default connect(mapStateToProps, null)(ItemList);
