import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from './Header';
import ButtonBackToHome from './ButtonBackToHome';

class CollectClinicals extends React.Component {
    state = {}
    componentDidMount() {
        axios.get("http://localhost:8080/clinicalservices/api/patients/" + this.props.match.params.patientId)
            .then(res => {
                this.setState(res.data)
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            patientId: this.props.match.params.patientId,
            componentName: this.componentName,
            componentValue: this.componentValue
        }
        axios.post("http://localhost:8080/clinicalservices/api/clinicals/", data)
            .then(res => {
                toast("Clinical Data Saved Successfully", { autoClose: 3000, position: toast.POSITION.BOTTOM_CENTER })
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
                    <h2>Patient Clinical Data:</h2>
                    <div className="ui very padded segment">
                        <div>
                            <form className="ui form">
                                <div className="ui inverted segment">
                                    <div className="ui inverted form">
                                        <div className="two fields">
                                            <div className="field">
                                                <div className="two fields">
                                                    <div className="field">
                                                        <label>Category</label>
                                                        <select className="ui fluid dropdown" onChange={(event) => { this.componentName = event.target.value }}>
                                                            <option value="">Select One</option>
                                                            <option value="bp">Blood Pressure(Sys/Dys)</option>
                                                            <option value="hw">Height/Weight</option>
                                                            <option value="heartrate">Heart Rate</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label>Value</label>
                                                <input placeholder="Value" type="text" name="componentValue" onChange={(event) => { this.componentValue = event.target.value }} />
                                            </div>
                                        </div>
                                        <div className="inline field">
                                            <div className="ui checkbox">
                                                <input type="checkbox" tabIndex="0" className="hidden" />
                                                <label>I agree to the terms and conditions</label>
                                            </div>
                                        </div>
                                        <button className="ui submit button" onClick={this.handleSubmit.bind(this)} >Confirm</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br/>
                        <ButtonBackToHome/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CollectClinicals;