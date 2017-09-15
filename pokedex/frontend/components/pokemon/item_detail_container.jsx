import { connect } from "react-redux";
import { requestOnePokemon, selectPokemonItem } from  "../../actions/pokemon_actions";
import ItemDetail from "item_detail";
import Util from "../../util/api_util";

const mapStateToProps = (state, ownProps) => ({
  selectPokemonItem: selectPokemonItem(state, ownProps.match.params.item)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(

)(ItemDetail);
