import { connect } from 'react-redux'

import Home from '../pages/home.jsx'

const mapStateToProps = (state, props) => {
	return {
		topics: state.topics
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		hydrateState: (data) => {
			dispatch({
				type: 'HYDRATE_STATE',
				data: data
			})
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home)