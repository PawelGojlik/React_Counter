import React from 'react';
class CounterDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
          };
      }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({count: this.state.count +1})}>
                    increase
        </button>
                <button onClick={() => this.setState({count: this.state.count -1})}>
                    decrease
        </button>
        CURRENT COUNTER VALUE {this.state.count}
            </div>

        );
    }
}

export default CounterDisplay;