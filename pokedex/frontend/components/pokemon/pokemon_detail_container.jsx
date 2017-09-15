import { connect } from "react-redux";
import { requestOnePokemon } from  "../../actions/pokemon_actions";
import { selectOnePokemon, selectItems } from "../../reducers/selectors";
import PokemonDetail from "./pokemon_detail";
import Util from "../../util/api_util";

const mapStateToProps = (state) => ({
  pokemon: selectOnePokemon(state, state.ui.pokeDisplay),
  items: selectItems(state)
});

const mapDispatchToProps = dispatch => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
