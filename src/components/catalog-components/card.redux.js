import { connect } from "react-redux";
import { getData } from "../../actions/catalog.actions";
import Card from './card';


const mapStateToProps = state => {
    return {
      data: state.catalog.data,
      isFething: state.catalog.isFetching,
      total: state.catalog.total
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(getData())
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Card);