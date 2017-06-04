'use strict';

import React, {Componet} from 'react';

const Work = ({ match }) => (
  <div>
    <h1>{match.params.workId} work</h1>
  </div>
);

export default Work;