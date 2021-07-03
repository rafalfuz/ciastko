import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GlobalStyles from './ThemeFolder/GlobalStyles';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import Zdrowo from './Pages/Zdrowo/Zdrowo'
import Lekko from './Pages/Lekko/Lekko'
import Smacznie from './Pages/Smacznie/Smacznie'
import Kolorowo from './Pages/Kolorowo/Kolorowo'
import DetailsCard from './Pages/Smacznie/DetailsCard';
import {Routes} from './routes/index'
import store from './store/index'


class Root extends React.Component {
  render() {
    return (
    <Provider store={store}>
    <Router>
    <GlobalStyles /> 
    <Navbar />
    <Switch>
    <Route path={Routes.home} component={Home} />
    <Route path={Routes.zdrowo} component={Lekko} />
    <Route path={Routes.lekko} component={Zdrowo} />
    <Route path={Routes.smacznieViewport} component={DetailsCard} />
    <Route path={Routes.smacznie} component={Smacznie} />
    <Route path={Routes.kolorowo} component={Kolorowo} />
    </Switch>
    </Router>

    <div>Footer -[W BUDOWIE..]</div>
    </Provider>
    )
  }
}

export default Root
