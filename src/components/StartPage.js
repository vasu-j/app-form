import React from 'react';
import Button from 'react-bootstrap/Button';


class StartPage extends React.Component {

    handleOnClick = () => {
        return this.props.history.push('/login')
    }
    render() {
        return (
            <div className="container">
                <p>Introduction</p>
                <p>Enter consent here</p>
                <p>By "clicking next" you agree with term and condition</p>
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