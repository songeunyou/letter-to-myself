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
        let textArr = evt.target.innerHTML.toString().split(" ");

        console.log(textArr);

        for (let i = 0; i < textArr.length - 2; i++) {
            for (let j = 0; j < list.length; j++) {
                if (textArr[i].toLowerCase() === list[j].negative) {
                    if (textArr[i + 1] && list[j].secondNegative && (textArr[i + 1] === list[j].secondNegative)) {
                        // first detecting two-word phrases
                        textArr.splice(i, 2, list[j].positive)
                    } else if (!list[j].secondNegative) { // ensures that we're not detecting and swapping partial phrases
                        textArr[i] = list[j].positive;
                    }
                } else if (textArr[i].substring(textArr[i].length - 1, textArr[i].length).match(/^[.,:!?)]/) && textArr[i].substring(0, textArr[i].length - 1).toLowerCase() === list[j].negative && !list[j].secondNegative) {
                    // detecting words followed by punctuation -> swap while keeping the punctuation
                    let punctuation = textArr[i].substring(textArr[i].length - 1, textArr[i].length);
                    textArr[i] = list[j].positive + punctuation;
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
