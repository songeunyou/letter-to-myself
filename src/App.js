import React, { Component } from 'react';
import './css/App.css';

import letter from './media/letter.jpg';

import Input from './components/Input';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            textExists: false,
        };

        this.checkForText = this.checkForText.bind(this);
    }

    componentDidMount() {
        var title = document.getElementById("title");
        var photo = document.getElementById("photo");
        var subtitle = document.getElementById("subtitle");


        document.onmousemove = function(event) {
            var x = (event.clientX / window.innerWidth) * 6 - 4;
            var y = (event.clientY / window.innerHeight) * 18 - 4;

            // var x2 = (event.clientX / window.innerWidth) * 1.05 - 5;
            // var y2 = (event.clientY / window.innerHeight) * 1.6 - 5;


            var x3 = (event.clientX / window.innerWidth) * 1.5 - 2;
            var y3 = (event.clientY / window.innerHeight) * 8 - 6;

            title.style.transform = "translate("+x+"%,"+y+"%)";
            // photo.style.transform = "translate("+x2+"%,"+y2+"%)";
            subtitle.style.transform = "translate("+x3+"%,"+y3+"%)";
        }
    }

    checkForText(e) {
        this.setState({
            textExists: e
        });
    }

    render() {

        let date = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        return (
            <div className="App">
                <div className="parallax-box">
                    <div className="date">{monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}</div>
                    <div className="comment">How does this work?</div>

                    <h1 id="title">Letter to Myself</h1>
                    <div id="letter-box">
                        <img id="photo" src={letter}/>
                        <h2 id="subtitle">Sometimes we're too hard on ourselves. Write out your negative self talk—let's try to change it up</h2>
                        <div className="gradient-box"/>
                    </div>
                </div>
                <Input checkForText={this.checkForText}/>
                {this.state.textExists ? "" : <div className="placeholder">Start typing...</div>}
            </div>
        );
    }
}

export default App;
