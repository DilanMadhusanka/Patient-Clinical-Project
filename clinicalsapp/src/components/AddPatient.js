import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Header from './Header';

toast.configure();

class AddPatient extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            age: this.age
        }
        axios.post("http://localhost:8080/clinicalservices/api/patients", data)
            .then(res => {
                toast("Patient added successfully", { autoClose: 2000, position: toast.POSITION.BOTTOM_CENTER })
            })
    }
    render() {
        return (
            <div>
                <Header />
                <div className="ui container">
                    <h2>Register Patient:</h2>
                    <div className="ui segment">
                    <form className="ui form">
                        <div className="field">
                            <label>First Name</label>
                            <input type="text" name="firstName" placeholder="First Name" onChange={(event => this.firstName = event.target.value)} />
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input type="text" name="lastName" placeholder="Last Name" onChange={(event => this.lastName = event.target.value)} />
                        </div>
                        <div className="field">
                            <label>Age</label>
                            <input type="text" name="age" placeholder="Age" onChange={(event => this.age = event.target.value)} />
                        </div>
                        <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="hidden" />
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div>
                        <button className="ui secondary button" type="submit" onClick={this.handleSubmit.bind(this)}>
                            Submit
                        </button>
                        <Link className="ui button" to="/">
                            Back
                        </Link>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPatient;