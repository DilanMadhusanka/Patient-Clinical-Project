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
                this.setState({ clinicalsData })
            })
    }
    render() {
        return (
            <div>
                {this.state.clinicalsData.map(data => <TableCreator item={data} />)}
            </div>
        )
    }
}

class TableCreator extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>{this.props.item.id}</td>
                        <td>{this.props.item.componentName}</td>
                        <td>{this.props.item.componentValue}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ChartGenerator;