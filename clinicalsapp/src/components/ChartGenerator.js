import React from 'react';
import axios from 'axios';

class ChartGenerator extends React.Component {
    state = {
        clinicalsData: []
    }
    componentWillMount() {
        axios.get("http://localhost:8080/clinicalservices/api/clinicals/" + this.props.match.params.patientId + "/" + this.props.match.params.componentName)
            .then(res => {
                const clinicalsData = res.data
                this.setState({clinicalsData})
            })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}



export default ChartGenerator;