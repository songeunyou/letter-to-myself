import React, { Component } from 'react';
import './css/App.css';

import letter from './media/letter.jpg';

import Input from './components/Input';
import Info from './components/Info';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textExists: false,
            infoBox: false,
        };

        this.checkForText = this.checkForText.bind(this);
        this.infoBox = this.infoBox.bind(this);
    }

    componentDidMount() {
        var title = document.getElementById("title");
        var subtitle = document.getElementById("subtitle");

        document.onmousemove = function(event) {
            var x = (event.clientX / window.innerWidth) * 6 - 4;
            var y = (event.clientY / window.innerHeight) * 18 - 4;

            var x2 = (event.clientX / window.innerWidth) * 1.5 - 2;
            var y2 = (event.clientY / window.innerHeight) * 8 - 6;

            title.style.transform = "translate("+x+"%,"+y+"%)";
            subtitle.style.transform = "translate("+x2+"%,"+y2+"%)";
        }
    }

    checkForText(e) {
        this.setState({
            textExists: e
        });
    }

    infoBox() {

        if (this.state.infoBox === true) {
            this.setState({infoBox: false});
        } else {
            this.setState({infoBox: true});
        }
    }

    render() {

        let date = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        return (
            <div className="App">
                <Info
                    visible={this.state.infoBox}
                    toggleInfoBox={this.infoBox}/>

                <div id="header" className={this.state.infoBox ? "hide-header" : ""}>
                    <div className="title-box">
                        <h1 id="title">Letter to Myself</h1>
                    </div>

                    <div id="background-photo">
                        <img id="photo" src={letter}/>
                        <div className="subtitle-box">
                            <h2 id="subtitle">Sometimes we're too hard on ourselves. Write out your negative self talk—let's try to change it up</h2>
                        </div>
                        <div className="gradient-box"/>
                    </div>

                    <div className="date">{monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</div>
                    <div className="info-btn" onClick={this.infoBox}>&#8251; How does this work?</div>
                </div>

                <div id="input-box" className={this.state.infoBox ? "hide-input" : ""}>
                    <Input checkForText={this.checkForText}/>
                    {this.state.textExists ? "" : <div id="placeholder">Start typing...</div>}
                </div>
            </div>
        );
    }
}

export default App;
