import { Link } from 'react-router-dom'
import muiTheme from '../MuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AutoComplete from 'material-ui/AutoComplete'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'
import '../../css/components/Home.scss';

const Home = ({ dataSource=["abc", "def", "ghi"], handleUpdateInput=f=>f, homeSearch=f=>f, history}) => {

    handleUpdateInput = value => {
        // console.log(value)
    }


    const onSearch = (chosenRequest) => {
        console.log(chosenRequest)
        homeSearch(chosenRequest)
        history.replace('/search/1')
    }

    return (
        <div className="home-page-container">
            <div className='home-page-title-container'>
                <h1 className="home-page-title"><strong>GAME RATING</strong></h1>
            </div>
            <div className='search-bar-container'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <AutoComplete hintText="Type the game you want to search" dataSource={dataSource} onUpdateInput={handleUpdateInput} className="home-page-search-bar" onNewRequest={onSearch}/>
                </MuiThemeProvider>
            </div>
        </div>
    )
}

export default Home