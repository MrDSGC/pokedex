import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';
import {fetchPoke} from '../../actions/pokemon_actions';

export const mapStateToProps = (state) => {
  return {
    poke: state.poke
  };
};

export const mapDispatchToProps = (dispatch) => ({
  fetchPoke: (pokeId) => dispatch(fetchPoke(pokeId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
