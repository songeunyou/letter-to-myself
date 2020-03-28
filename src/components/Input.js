import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            html: "<p>What is your negative cheers self talk?</p>"
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

        for (let i = 0; i < text.length - 1; i += 2) {
            if (text[i] === "cheers") {
                text[i] = '<div class="help">cheers</div>';
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
