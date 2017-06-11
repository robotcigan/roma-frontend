'use strict';

import apiService from '../../common/services/api.service';

export default {
  getProjectList() {
    return apiService.get('/project');
  }
}
