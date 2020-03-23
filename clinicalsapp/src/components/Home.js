import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import backImg from './images/backImg.jpg'

class Home extends React.Component {
    state = {
        patientData: []
    }
    componentDidMount() {
        axios.get('http://localhost:8080/clinicalservices/api/patients').then(res => {
            const patientData = res.data;
            this.setState({ patientData })
        })
    }
    render() {
        return (
            <div style={{backgroundImage:`url(${backImg})`}}>
                <Header />
                <br />
                <div className="ui container">
                    <h1 className="ui huge center aligned icon header">
                        <i className="circular users icon"></i>
                    Patients
                </h1>
                    <div className="ui segment">
                        <table className="ui selectable celled table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.patientData.map(patient => <RowCreator key={patient.id} item={patient} />)}
                            </tbody>
                        </table>
                    </div>
                    <div className="ui center aligned container">
                        <Link to={'/addPatient'} className="ui huge red button"><i className="icon user" /> Register Patient</Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

class RowCreator extends React.Component {
    render() {
        var patient = this.props.item;

        const style = {
            width: "120px"
        }
        return (
            <tr>
                <td data-label="id">{patient.id}</td>
                <td data-label="FirstName">{patient.firstName}</td>
                <td data-label="LastName">{patient.lastName}</td>
                <td data-label>{patient.age}</td>
                <td style={style}><Link to={'/patientDetails/' + patient.id} className="mini ui teal button" >Add Data</Link></td>
                <td style={style}><Link to={'/analyze/' + patient.id} className="mini ui teal button" >Analyze</Link></td>
            </tr>
        )
    }
}

export default Home;