import React from 'react';
import axios from 'axios';

class ChartGenerator extends React.Component {
    state = {
        clinicalsData: []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/clinicalservices/api/clinicals/" + this.props.match.params.patientId + "/" + this.props.match.params.componentName)
            .then(res => {
                const clinicalsData = res.data
                this.setState({ clinicalsData })
            })
    }
    render() {
        return (
            <div>
                {this.state.clinicalsData.map(data => <TableCreator key={data.id} item={data} />)}
            </div>
        )
    }
}

class TableCreator extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.props.item.id}</td>
                            <td>{this.props.item.componentName}</td>
                            <td>{this.props.item.componentValue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ChartGenerator;