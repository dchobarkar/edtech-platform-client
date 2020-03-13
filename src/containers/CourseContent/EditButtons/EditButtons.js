import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class EditButtons extends Component {
    state = {
        show: false
    }

    showDescriptionHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }
    LessonButton = () => (
        <Button
            className="float-right"
            variant="light">
            <i className="far fa-edit"></i>
        </Button>
    )
    ExamButton = () => (
        <Link to={"/questionpaper"}>
            <this.LessonButton />
        </Link>
    )

    render() {
        return (
            <div>
                <Button
                    onClick={() => this.props.delete(this.props.contentid, this.props.chpid)}
                    className="float-right"
                    variant="light">
                    <i className="fas fa-trash-alt"></i>
                </Button>
                {this.props.isexam ? <this.ExamButton /> : <this.LessonButton />}
                <Button
                    onClick={this.showDescriptionHandler}
                    className="float-right"
                    variant="light">
                    <i className="fas fa-book"></i>
                </Button>
                {this.state.show ? <div>{this.props.description}</div> : null}
            </div >
        )
    }
}

export default EditButtons;