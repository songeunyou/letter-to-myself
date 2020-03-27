import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            html: "<p>What is your negative self talk?</p>"
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
        return <ContentEditable
                id="start-typing"
                innerRef={this.contentEditable}
                html={this.state.html} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onChange={this.handleChange} // handle innerHTML change
                tagName='article' // Use a custom HTML tag (uses a div by default)
                />
    }
}

export default Input;
