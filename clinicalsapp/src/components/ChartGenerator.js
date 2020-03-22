import React from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ButtonBackToHome from './ButtonBackToHome';

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
                <Header />
                <br />
                <div className="ui container" style={{ paddingLeft: "26%" }}>
                    <div className="ui center aligned compact segment">
                        <table class="ui center aligned very basic collapsing celled table">
                            <thead>
                                <tr>
                                    <th>componentName</th>
                                    <th>componentValue</th>
                                    <th>Id</th>
                                </tr>
                            </thead>
                            {this.state.clinicalsData.map(data => <TableCreator key={data.id} item={data} />)}
                        </table>
                    </div>
                </div>
                <br/>
                <ButtonBackToHome/>
                <Footer />
            </div >
        )
    }
}


class TableCreator extends React.Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>
                        <h4 class="ui image header">
                            {/* <img src="/images/avatar2/small/lena.png" class="ui mini rounded image" /> */}
                            <div class="content">
                                {this.props.item.componentName}
                                <div class="sub header">
                                    {/* Human Resources */}
                                </div>
                            </div>
                        </h4>
                    </td>
                    <td>
                        {this.props.item.componentValue}
                    </td>
                    <td>
                        {this.props.item.id}
                    </td>
                </tr>
            </tbody>
        )
    }
}

export default ChartGenerator;
