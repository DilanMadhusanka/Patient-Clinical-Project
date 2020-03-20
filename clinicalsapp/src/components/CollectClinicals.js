import React from 'react';

class CollectClinicals extends React.Component {
    componentWillMount() {

    }
    render () {
        return (
            <div>
                <h2>Patient Details:</h2>
                First Name: {this.state.firstName}
                Last Name: {this.state.lastName}
                Age: {this.state.age}
                <h2>ClinicalData:</h2>
                <form>
                    Clinical Entry Type <select>
                        <option value="bp">Blood Pressure(Sys/Dys)</option>
                        <option value="hw">Height/Weight</option>
                        <option value="heartRate">Heart Rate</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default CollectClinicals;