import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header from './Header';
import Footer from './Footer'
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
                    <div class="ui text container">
                        <div class="ui middle aligned selection list">
                            <div class="item">
                                <i class="chevron right icon"></i>
                                <div class="content">
                                    <div class="header">First Name: {this.state.firstName}</div>
                                </div>
                            </div>
                            <div class="item">
                                <i class="chevron right icon"></i>
                                <div class="content">
                                    <div class="header">Last Name: {this.state.lastName}</div>
                                </div>
                            </div>
                            <div class="item">
                                <i class="chevron right icon"></i>
                                <div class="content">
                                    <div class="header">Age: {this.state.age}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2>Patient Clinical Data:</h2>
                    <div class="ui very padded segment">
                        <p>
                            <form className="ui form">
                                <div class="ui inverted segment">
                                    <div class="ui inverted form">
                                        <div class="two fields">
                                            <div class="field">
                                                <div class="two fields">
                                                    <div class="field">
                                                        <label>State</label>
                                                        <select class="ui fluid dropdown" onChange={(event) => { this.componentName = event.target.value }}>
                                                            <option value="">Select One</option>
                                                            <option value="bp">Blood Pressure(Sys/Dys)</option>
                                                            <option value="hw">Height/Weight</option>
                                                            <option value="heartrate">Heart Rate</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="field">
                                                <label>Value</label>
                                                <input placeholder="Value" type="text" name="componentValue" onChange={(event) => { this.componentValue = event.target.value }} />
                                            </div>
                                        </div>
                                        <div class="inline field">
                                            <div class="ui checkbox">
                                                <input type="checkbox" tabindex="0" class="hidden" />
                                                <label>I agree to the terms and conditions</label>
                                            </div>
                                        </div>
                                        <button className="ui submit button" onClick={this.handleSubmit.bind(this)} >Confirm</button>
                                    </div>
                                </div>
                            </form>
                        </p>
                        <ButtonBackToHome/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CollectClinicals;