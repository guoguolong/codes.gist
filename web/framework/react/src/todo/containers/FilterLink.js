import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import Link from '../Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)
FilterLink.displayName = 'FilterLink';
export default FilterLink