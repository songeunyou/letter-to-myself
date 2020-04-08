import React, { Component } from 'react';
import '../css/Info.css';
import '../css/App.css';

class Info extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className={"info-box " + `${this.props.visible ? "visible" : "invisible"}`}>
                <div className="description">
                    <p>You know you deserve compassion, but it's difficult to tell yourself kind things when you're in a bad place.</p>
                    <p>It's okay. Say the hurtful, ugly things. The negative words with be replaced with positive ones so that in the end you've written an incredible love letter to yourself.</p>
                </div>

                <div className="row">
                    <div className="before">
                        <p className="title">What you type:</p>
                        I felt pretty bad today. I hate how I look and it made me feel really anxious to go outside. I don't want people seeing my ugly face and fat body. I just want to give up.
                    </div>
                    <div className="after">
                        <p className="title">What you mean to say:</p>
                        I felt pretty <div className="inline good">good</div> today. I <div className="inline love">love</div> how I look and it made me feel really <div className="inline secure">secure</div> to go outside. I want people seeing my <div className="inline beautiful">beautiful</div> face and <div className="inline good-looking">good-looking</div> body. I want to <div className="inline persevere">persevere</div>.
                    </div>
                </div>

                <div className="about">
                </div>

                <div className="exit" onClick={this.props.toggleInfoBox}>&#8251; Close</div>
            </div>
        )
    }
}

export default Info;
