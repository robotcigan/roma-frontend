'use strict';

import React, {Componet} from 'react';

const Project = ({ match }) => (
  <div>
    <h1>{match.params.projectId} work</h1>
  </div>
);

export default Project;