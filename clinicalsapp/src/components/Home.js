import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    state = {
        patientData: []
    }
    componentWillMount() {
        axios.get('localhost:8080/clinicalservices/api/patients').then(res => {
            const patientData = res.data;
            this.setState({ patientData })
        })
    }
    render() {
        return (
            <div>
                <h2>Patient:</h2>
                <table align='center'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.patientData.map(patient => <RowCreator item={patient} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;