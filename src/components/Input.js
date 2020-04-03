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
        let textArr = evt.target.innerHTML.toString().split(/[.](?=[ ])|[,! ]/);

        for (let i = 0; i < textArr.length - 2; i++) {
            for (let j = 0; j < list.length; j++) {
                if (textArr[i] === list[j].negative) {
                    if (textArr[i + 1] && list[j].secondNegative && textArr[i + 1] === list[j].secondNegative) {
                        textArr.splice(i, 2, list[j].positive)
                    } else {
                        textArr[i] = list[j].positive;
                    }
                }
            }

            // changing from "a" to "an" after wordswap
            if (textArr[i - 1] === "a" &&
                (textArr[i].charAt(0) === "a" || textArr[i].charAt(0) === "e" || textArr[i].charAt(0) === "i" || textArr[i].charAt(0) === "o" || textArr[i].charAt(0) === "u")) {
                    textArr[i - 1] = "an"

            // changing from "an" to "a" after wordswap
            } else if (textArr[i - 1] === "an" &&
                !(textArr[i].charAt(0) === "a" || textArr[i].charAt(0) === "e" || textArr[i].charAt(0) === "i" || textArr[i].charAt(0) === "o" || textArr[i].charAt(0) === "u")) {
                    textArr[i - 1] = "a"
            }
        }

        let p = textArr.join(' ');
        this.setState({html: p});
    };


    render() {

        return <ContentEditable
                id="start-typing"
                innerRef={this.contentEditable}
                html={this.state.html} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onKeyDown={this.rewrite}
                tagName='article' // Use a custom HTML tag (uses a div by default)
                />
    }
}

export default Input;
