import React, { Component } from 'react';
import EmergencyListItem from './EmergencyListItem';
import style from './style.js'

class EmergencyList extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      // let emergencyListItems = this.props.emergencies.reverse().map((emergency, idx, emergencies) => {
      let markers = this.props.markers.reverse();
      let emergencyListItems = this.props.emergencies.reverse().map((emergency, idx, emergencies) => {
        return(
          <EmergencyListItem
            marker={ markers[idx] }
            description={ emergency.description }
            address={ emergency.address }
            time={ emergency.time }>
          </EmergencyListItem>
        )
      })
      
      return(
        <div style={ style.EmergencyListContainer}>
          <div style={ style.EmergencyListHeader }>Latest { this.props.emergencies.length } Emergencies</div>
          <div className="EmergencyList" style={ style.EmergencyList }>
            { emergencyListItems }
          </div>
        </div>
      )
    }
}

export default EmergencyList;