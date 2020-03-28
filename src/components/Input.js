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
        this.checkForSpace = this.checkForSpace.bind(this);
    }

    componentDidMount() {
        document.getElementById("start-typing").focus();
    }

    checkForSpace = evt => {
        if (evt.key === " ") {
            let text = evt.target.textContent.split(' ');

            for (let i = 0; i < text.length; i++) {
                for (let j = 0; j < list.length; j++) {
                    if (text[i] === list[j].negative) {
                        text[i] = list[j].positive;
                    }
                }
            }

            let p = text.join(' ');

            this.setState({html: p});

        } else {
            this.setState({html: evt.target.textContent});
        }
    };


    render() {

        return <ContentEditable
                id="start-typing"
                innerRef={this.contentEditable}
                html={this.state.html} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onKeyDown={this.checkForSpace}
                tagName='article' // Use a custom HTML tag (uses a div by default)
                />
    }
}

export default Input;
