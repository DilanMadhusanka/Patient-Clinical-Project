import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import ButtonBackToHome from './ButtonBackToHome';

class AnalyzeData extends React.Component {
    state = {
        clinicalData: []
    }
    componentDidMount() {
        axios.get("http://localhost:8080/clinicalservices/api/patients/analyze/" + this.props.match.params.patientId)
            .then(res => {
                this.setState(res.data)
            })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="ui container">
                    <h2>Patient Details:</h2>
                    <div className="ui text container">
                        <div className="ui middle aligned selection list">
                            <div className="item">
                                <i className="chevron right icon"></i>
                                <div className="content">
                                    <div className="header">First Name: {this.state.firstName}</div>
                                </div>
                            </div>
                            <div className="item">
                                <i className="chevron right icon"></i>
                                <div className="content">
                                    <div className="header">Last Name: {this.state.lastName}</div>
                                </div>
                            </div>
                            <div className="item">
                                <i className="chevron right icon"></i>
                                <div className="content">
                                    <div className="header">Age: {this.state.age}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>Clinical Report:</h2>
                    {this.state.clinicalData.map(eachEntry => <TableCreator key={eachEntry.id} item={eachEntry} patientId={this.state.id} />)}
                </div>
                <br />
                <ButtonBackToHome/>
                <br/>
            </div>
        )
    }
}

class TableCreator extends React.Component {
    render() {
        var eachEntry = this.props.item;
        var patientId = this.props.patientId;
        return (
            <div className="ui container">
                <div className="ui segments">
                    <div className="ui segment">
                        <p><b>{eachEntry.componentName}</b></p>
                    </div>
                    <div className="ui horizontal segments">
                        <div className="ui segment">
                            <p>{eachEntry.componentName}</p>
                        </div>
                        <div className="ui segment">
                            <p>{eachEntry.componentValue}</p>
                        </div>
                        <div className="ui segment">
                            <p>{eachEntry.measuredDateTime}</p>
                        </div>
                    </div>
                </div>
                <div className="ui container">
                    <p>
                        <b>
                            <Link className="ui right labeled icon button" to={'/chart/' + eachEntry.componentName + '/' + patientId}>
                                    <i className="right arrow icon"></i>
                                    Description
                            </Link>
                        </b>
                    </p>
                </div>
                <br/>
            </div>
        )
    }
}

export default AnalyzeData;