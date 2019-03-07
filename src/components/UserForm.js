import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css' 


export default class UserForm extends React.Component {
    state = {
        uuid:'',
        name:'',
        surname:'',
        nationalID:'',
        mobileNo:'',
        email:'',
        income:'',
        incomeSource:'',
        numberOfLoans:'',
        error:''
    };

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }
    
    onSurnameChange = (e) => {
        const surname = e.target.value;
        this.setState(() => ({ surname }));
    }
    
    onNationalIDChange = (e) => {
        const nationalID = e.target.value;
        this.setState(() => ({ nationalID }));
    }
    
    onMobileNoChange = (e) => {
        const mobileNo = e.target.value;
        this.setState(() => ({ mobileNo }));
    }
    
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    
    }

    onIncomeChange = (e) => {
        const income = e.target.value;
        this.setState(() => ({ income }));
    
    }

    onIncomeSourceChange = (e) => {
        const incomeSource = e.target.value;
        this.setState(() => ({ incomeSource }));
    
    }

    onNumberOfLoansChange = (e) => {
        const numberOfLoans = e.target.value;
        this.setState(() => ({ numberOfLoans }));
    
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.email || !this.state.mobileNo || !this.state.name ||
            !this.state.surname || !this.state.nationalID ||
            !this.state.income || !this.state.incomeSource || ! this.state.numberOfLoans
        ){
            this.setState(() => ({error:'Please fill in the form completely' }));
        } else {
            this.setState(() => ({error:'' }));
            this.props.onSubmit({
                name: this.state.name,
                surname: this.state.surname,
                nationalID: this.state.nationalID,
                mobileNo: this.state.mobileNo,
                email: this.state.email,
                income: this.state.income,
                incomeSource: this.state.incomeSource,
                numberOfLoans: this.state.numberOfLoans,

                
            });
            
        }

    }

    render(){
        return (
            <div>
                <Form onSubmit={this.onSubmit} >

                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your name" onChange={this.onNameChange}/>
                    </Form.Group>

                    <Form.Group controlId="Surname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your surname"  onChange={this.onSurnameChange}/>
                    </Form.Group>

                    <Form.Group controlId="NationalID">
                        <Form.Label>National ID</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your ID"  onChange={this.onNationalIDChange}/>
                    </Form.Group>
                    
                    <Form.Group controlId="MobileNo">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Please enter your mobile no."  onChange={this.onMobileNoChange}/>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Please enter your email"  onChange={this.onEmailChange}/>
                    </Form.Group>

                    <Form.Group controlId="Income">
                        <Form.Label>Monthly Income</Form.Label>
                        <Form.Control type="number" placeholder="Please enter your monthly income"  onChange={this.onIncomeChange}/>
                    </Form.Group>

                    <Form.Group controlId="IncomeSource">
                        <Form.Label>Income Source</Form.Label>
                        <Form.Control as="select" onChange={this.onIncomeSourceChange}>
                            <option defaultValue="" disabled defaultValue selected="selected">Select your option</option>
                            <option defaultValue="Payroll">Payroll</option>
                            <option defaultValue="Transfer/Cash">Transfer/Cash</option>
                        </Form.Control>
                     </Form.Group>

                    <Form.Group controlId="NumberOfLoans">
                        <Form.Label>No. of Exisiting Loans with Other Banks</Form.Label>
                        <Form.Control as="select" onChange={this.onNumberOfLoansChange}>
                            <option defaultValue="" disabled defaultValue selected="selected">Select your option</option>
                            <option defaultValue="1">1</option>
                            <option defaultValue="2">2</option>
                            <option defaultValue="3">3</option>
                            <option defaultValue="Above 3">Above 3</option>
                        </Form.Control>
                    </Form.Group>

                    {this.state.error&&<p>{this.state.error}</p>}

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    };



}

