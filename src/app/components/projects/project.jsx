'use strict';

import React, {Componet} from 'react';

import apiService from '../../../common/services/api.service.js';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    }
  }
  
  
  
  componentDidMount() {
    apiService.get('http://localhost:1337/api/v1/project/first-project', {get: {test: 'for', test2: 'bar'}})
      .then(project => {
        this.setState({
          project: project
        });
      });
  }

  render() {
    return(
      <div>
        <main>
          <div className="grid grid--container">
            <header className="project">
              <div className="project__word">Проект</div>
              <h1 className="project__title">{this.state.project.title}</h1>
              <div className="project__done">Выполненная работа</div>
              <div className="project__description">{this.state.project.description}</div>
              <a className="project__link" href="">
                <img src="img/link.png" alt="" />
              </a>
            </header>
          </div>
        </main>
        <section className="portfolio">
          <div className="portfolio__img">
            <img src="https://richard.gs/static/images/meu-cambio/screenshot/1.jpg" alt="" />
          </div>
          <div className="portfolio__img">
            <img src="https://richard.gs/static/images/meu-cambio/screenshot/1.jpg" alt="" />
          </div>
          <div className="portfolio__img">
            <img src="https://richard.gs/static/images/meu-cambio/screenshot/1.jpg" alt="" />
          </div>
        </section>

        <div className="to-top">
          <div className="to-top__icon"><img src="img/to-top.png" alt="" /></div>
          <div className="to-top__word">наверх</div>
        </div>
      </div>
    )
  }
}

export default Project;