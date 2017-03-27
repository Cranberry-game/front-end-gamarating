import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import '../../css/components/_GameListDetail.scss'
import StoryBar from './StoryBar'
import GameListShow from './GameListShow'
import Comments from './Comments'
import CommentSend from './CommentSend'
import GameListList from './GameListList'

const GameDetail = ({gameName="Halo", gameDescription="lalal", releaseDate="2017-03-01", gameRate=10}) => {
    return (
        <div className="game-detail">
            <StoryBar/>
            <div className='game-info'>
                <div className='game-name-container'>
                    <h3 className='game-name'>{gameName}</h3>
                </div>
                <div className='game-desc'>
                    <h2 className='game-desc'>{gameDescription}</h2>
                </div>
                <div className='relase-time-container'>
                    <p className='release-time'>{releaseDate}</p>
                </div>
                <div className='game-rate-container'>
                    <p className='game-rate'>{`${gameRate} / 10`}</p>
                </div>
            </div>
            <div className='game-show'>
                <GameListShow/>
            </div>
            <div className='comment-send-container'>
                <CommentSend/>
            </div>
            <div className='comment-list-container'>
                <Comments/>
            </div>
        </div>
    )
}

export default GameDetail