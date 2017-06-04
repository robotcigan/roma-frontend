'use strict';

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import apiService from '../utils/api.service';

const Main = () => (
    <div>
        <h1>Main page</h1>
    </div>
);

const Work = ({ match }) => (
    <div>
        <h1>{match.params.workId} work</h1>
    </div>
);

class Works extends React.Component {
  constructor(...props) {
    super(props);
  }

  componentDidMount() {
    apiService.get('/project', {get: {test: 'for', test2: 'bar'}})
      .then(projects => {
        console.log('project');
        console.log(projects);
      })
  }

  render() {
    const {match} = this.props;
    return (
      <div>
        <h1>Works</h1>
        <ul>
          <li>
            <Link to={`${match.url}/1`}>Первая работа</Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}>Вторая работа</Link>
          </li>
        </ul>

        <Route path={`${match.url}/:workId`} component={Work} />
      </div>
    )
  }
}

// const Works = ({ match }) => (
//     <div>
//         <h1>Works</h1>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/1`}>Первая работа</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/2`}>Вторая работа</Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:workId`} component={Work} />
//     </div>
// );

const App = () => {
    return(
        <Router>
            <div>

                <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">До хаты</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/main">main</Link>
                            </li>
                            <li>
                                <Link to="/works">works</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <hr/>

                <Route path="/main" component={Main} />
                <Route path="/works" component={Works} />

            </div>
        </Router>
    )
}


export default App;
