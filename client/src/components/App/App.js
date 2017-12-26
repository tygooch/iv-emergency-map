import React from 'react'; 

import EmergencyMapContainer from '../EmergencyMap/EmergencyMapContainer';
import FilterContainer from '../Filter/FilterContainer';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchEmergencies();
  }
  componentDidMount() {
    setInterval(this.props.fetchEmergencies, 2000);
  }
  render() {
    return(
      <div>
        <header>
          Isla Vista Emergencies
        </header>
        <FilterContainer />
        <EmergencyMapContainer />
      </div>
    )
  }
}

export default App;