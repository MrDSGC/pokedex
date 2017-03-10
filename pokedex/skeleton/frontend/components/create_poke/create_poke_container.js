import { connect } from 'react-redux';
import CreatePoke from './create_poke';
import {createPoke} from '../../actions/pokemon_actions';

const mapDispatchToProps = (dispatch) => ({
  createPoke: (poke) => dispatch(createPoke(poke))
});


export default connect(
  null,
  mapDispatchToProps
)(CreatePoke);
