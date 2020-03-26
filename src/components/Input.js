import React, { Component } from 'react';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        };

        this.inputText = React.createRef();
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    componentDidMount() {
        document.getElementById("start-typing").focus();
        this.inputText.current.addEventListener('input', ({target}) => {
            target.style.height = 'auto';
            target.style.height = `${target.scrollHeight}px`;
        });
    }

    handleTextChange(){
        let {value} = this.inputText.current;
        this.setState({
            inputText: value
        });
    }

    render() {

        // var image = document.getElementById('imagefiles'), parent = image.parentNode, input = document.createElement('input');
        // parent.replaceChild(input, image);


        let text = this.state.inputText.split(' ');

        for (let i = 0; i < text.length - 1; i += 2) {
            if (text[i] === "cheers") {
                text[i] = <div className="fancy">{text[i]}</div>;
            }
        }

        console.log(text);
        // for (let i = 0; i < text.length; i += 2) {
        //     if (text[i]) {
        //         text[i] = text[i].trim();
        //     }
        // }

        return (
            <div id="input-container">
                <div
                    contentEditable="true"
                    ref={this.inputText}
                    id="start-typing"
                    className="input"
                    type="text"
                    placeholder="What is your negative self talk?"
                    onChange={this.handleTextChange.bind(this)}
                    value={text}>
                    Write what u wanna
                    </div>
            </div>
        );
    }
}

export default Input;
