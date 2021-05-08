import React from 'react';
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


class Root extends React.Component {
  render() {
    return (
    <>
    <Router>
    <GlobalStyles /> 
    <Navbar />
    <Switch>
    <Route exact path={Routes.home} component={Home} />
    <Route path={Routes.zdrowo} component={Zdrowo} />
    <Route path={Routes.lekko} component={Lekko} />
    <Route path={Routes.smacznieViewport} component={DetailsCard} />
    <Route path={Routes.smacznie} component={Smacznie} />
    <Route path={Routes.kolorowo} component={Kolorowo} />
    </Switch>
    </Router>

    <div>Footer</div>
    </>
    )
  }
}

export default Root
