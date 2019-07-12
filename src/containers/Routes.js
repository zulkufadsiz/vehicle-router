import React, { Component } from 'react';
import RoutesTable from '../components/RoutesTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMap, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { DatePicker, Button } from 'antd';
class Routes extends Component {
  render() {
    return (
      <div>
        <div>
          <FontAwesomeIcon className="menuIcon" icon={faMap} />
          <DatePicker />
          <Button>
            <FontAwesomeIcon className="menuIcon" icon={faArrowRight} />
          </Button>
          <Button type="primary" shape="circle" icon="plus" size="large" />
        </div>
        <h3>Routes</h3>
        <p>Create Report</p>
        <RoutesTable />
      </div>
    );
  }
}

export default Routes;
