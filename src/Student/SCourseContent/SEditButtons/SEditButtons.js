import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class SEditButtons extends Component {
    state = {
        showdescription: false,
    }

    showDescriptionHandler = () => {
        this.setState({
            showdescription: !this.state.showdescription
        })
    }

    LessonButton = () => (
        <Button
            className="float-right"
            variant="light"
            onClick={this.showDescriptionHandler}>
            <i className="fas fa-book"></i>
        </Button>
    )
    ExamButton = () => (
        <Link to={"/questionpaper/" + this.props.contentid}>
            <Button
                className="float-right"
                variant="light">
                <i className="fas fa-book"></i>
            </Button>
        </Link>
    )

    render() {
        let showplaybutton = true;
        if (this.props.sectionid === null || this.props.isexam === true)
            showplaybutton = false;

        return (
            <div>
                {showplaybutton ?
                    <Button
                        variant="light">
                        <i className="far fa-play-circle"></i>
                    </Button> : null}

                {this.props.isexam ? <this.ExamButton /> : <this.LessonButton />}


                {this.state.showdescription ? <div>{this.props.description}</div> : null}

            </div >
        )
    }
}

export default SEditButtons;