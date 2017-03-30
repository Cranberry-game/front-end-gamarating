import GameDetail from '../ui/GameDetail'
import { connect } from 'react-redux'
import { queryGameById } from '../../store/actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    title: state.currentGame.title,
    platform: state.currentGame.platform,
    gameType: state.currentGame.gameType,
    studio: state.currentGame.studio,
    price: state.currentGame.price,
    totalRating: state.currentGame.totalRating,
    releaseCompany: state.currentGame.releaseCompany,
    releaseDate: state.currentGame.releaseDate,
    reviews: state.currentGame.reviews
})

const mapDispatchToProps = dispatch => ({
    queryGame(id) {
        dispatch(
            queryGameById(id)
        )
    }
})


const Container = connect(mapStateToProps, mapDispatchToProps)(GameDetail)

export default withRouter(Container)