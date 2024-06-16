import React from "react";

export class Counter extends React.Component{

constructor(){
    super()
    //this.counter = 0;
    this.state = { 
        counter: 0,
        name: '',
        password: ''
     };
}
    render(){
        return(
           <div style={{marginTop: '20px', marginLeft: '20px'}}>
                <h1>{this.state.counter}</h1>

                <div>
                    <button
                        onClick={() => {
                            // ! this.counter = this.state.counter -1;
                            this.setState({ counter: this.state.counter - 1});
                        }}
                    >
                            Decrease
                    </button>
                    <button 
                        onClick={() => {
                            this.setState({ counter: this.state.counter + 1});
                        }}
                    >
                        Increase
                    </button>
                </div>

            <form style={{ marginTop: '400px' }}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={(event) => {
                        this.setState({ name: event.target.value})
                    }}
                />
                
                <input 
                    type="password" placeholder="Password"
                    value={this.state.password}
                    onChange={(event) => {
                        this.setState({ password: event.target.value})
                    }}
                />
                <button>Send</button>
            </form>

           </div> 
        );
    }
}