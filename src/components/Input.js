import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import list from './posNegList';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            html: "What is your negative self talk?"
        };

        this.contentEditable = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        document.getElementById("start-typing").focus();
    }

    handleChange = evt => {
        this.setState({html: evt.target.value});
    };


    render() {

        let text = this.state.html.split(' ');

        console.log("text", text)

        for (let i = 0; i < text.length - 1; i++) {
            for (let j = 0; j < list.length; j++) {
                if (text[i] === list[j].negative) {
                    text[i] = list[j].positive;
                    console.log("ding")
                }
            }
        }

        let p = text.join(' ');

        return <ContentEditable
                id="start-typing"
                innerRef={this.contentEditable}
                html={p} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onChange={this.handleChange} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
                />
    }
}

export default Input;
