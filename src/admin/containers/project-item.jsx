'use strict';

import React from 'react';

const ProjectItem = ({project}) => {
  return (
    <tr>
      <td>{project.handle}</td>
      <td>{project.title}</td>
      <td>{project.description}</td>
    </tr>
  )
};

export default ProjectItem;