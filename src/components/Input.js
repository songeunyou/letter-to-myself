import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import list from './posNegList';

class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            placeholder: "What is your negative self talk?",
            html: ""
        };

        this.contentEditable = React.createRef();
        this.checkForSpace = this.rewrite.bind(this);
    }

    componentDidMount() {
        document.getElementById("start-typing").focus();
    }

    rewrite = evt => {
        let textArr = evt.target.innerHTML.toString().split(' ');

        for (let i = 0; i < textArr.length - 1; i++) {
            for (let j = 0; j < list.length; j++) {
                if (textArr[i] === list[j].negative) {
                    textArr[i] = list[j].positive;
                }
            }
        }

        let p = textArr.join(' ');
        this.setState({html: p});
    };


    render() {

        return <ContentEditable
                id="start-typing"
                innerRef={this.contentEditable}
                html={false ? this.state.placeholder + this.state.html : this.state.html} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onKeyDown={this.rewrite}
                tagName='article' // Use a custom HTML tag (uses a div by default)
                />
    }
}

export default Input;
