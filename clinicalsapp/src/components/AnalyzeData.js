import React from 'react';
import axios from 'axios';

class AnalyzeData extends React.Component {
    state ={
        clinicalData: []
    }
    componentWillMount() {
        axios.get("http://localhost:8080/clinicalservices/api/patients/analyze/" + this.props.match.params.patientId)
        .then(res => {
            this.setState(res.data)
        })
    }
    render() {
        return (
            <div>
                <h2>Patient Details:</h2>
                First Name: {this.state.firstName}
                Last Name: {this.state.lastName}
                Age: {this.state.age}
            </div>
        )
    }
}

export default AnalyzeData;