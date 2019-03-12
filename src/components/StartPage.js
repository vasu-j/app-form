import React from 'react';
import Button from 'react-bootstrap/Button';
import Amplify, { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';

class StartPage extends React.Component {

    handleOnClick = () => {
        return this.props.history.push('/login')
    }

    post = async () => {
        console.log('calling api');
        const response = await API.post('myapi', '/items', {
          body: {
            id: '1',
            name: 'hello amplify!'
          }
        });
        alert(JSON.stringify(response, null, 2));
    }
    get = async () => {
        console.log('calling api');
        const response = await API.get('myapi', '/items/object/1');
        alert(JSON.stringify(response, null, 2));
    }
    list = async () => {
        console.log('calling api');
        const response = await API.get('myapi', '/items/1');
        alert(JSON.stringify(response, null, 2));
    }

    render() {
        return (
            <div className="container">
                <p>Introduction</p>
                <p>Enter consent here</p>
                <p>By "clicking next" you agree with term and condition</p>
                <p>Test API</p>
                <button onClick={this.post}>POST</button>
                <button onClick={this.get}>GET</button>
                <button onClick={this.list}>LIST</button>
                <Button 
                    variant="primary"
                    size="lg" 
                    onClick ={this.handleOnClick}
                >Next</Button>
                
            </div>

        );
    }
    

}

export default StartPage;