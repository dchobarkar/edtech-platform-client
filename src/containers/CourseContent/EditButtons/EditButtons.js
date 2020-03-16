import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import EditModal from './EditModal/EditModal';
import DeleteModal from './DeleteModal/DeleteModal';

class EditButtons extends Component {
    state = {
        showdescription: false,
        showeditmodal: false,
        showdeletemodal: false
    }

    showDescriptionHandler = () => {
        this.setState({
            showdescription: !this.state.showdescription
        })
    }
    showEditModalHandler = () => {
        this.setState({
            showeditmodal: !this.state.showeditmodal
        })
    }
    showDeleteModalHandler = () => {
        this.setState({
            showdeletemodal: !this.state.showdeletemodal
        })
    }

    returnEditHandler = (chpid, contentid, title, description) => {
        this.props.editsubmit(chpid, contentid, title, description);
        this.showEditModalHandler();
    }

    LessonButton = () => (
        <Button
            onClick={this.showEditModalHandler}
            className="float-right"
            variant="light">
            <i className="far fa-edit"></i>
        </Button>
    )
    ExamButton = () => (
        <Link to={"/questionpaper"}>
            <Button
                className="float-right"
                variant="light">
                <i className="far fa-edit"></i>
            </Button>
        </Link>
    )

    render() {
        let showplaybutton = true;
        if (this.props.chpid === null || this.props.isexam === true)
            showplaybutton = false

        return (
            <div>
                {showplaybutton ?
                    <Button
                        variant="light">
                        <i className="far fa-play-circle"></i>
                    </Button> : null}

                <Button
                    className="float-right"
                    variant="light"
                    onClick={this.showDeleteModalHandler}>
                    <i className="fas fa-trash-alt"></i>
                </Button>

                {this.props.isexam ? <this.ExamButton /> : <this.LessonButton />}

                <Button
                    className="float-right"
                    variant="light"
                    onClick={this.showDescriptionHandler}>
                    <i className="fas fa-book"></i>
                </Button>

                {this.state.showdescription ? <div>{this.props.description}</div> : null}

                <EditModal
                    show={this.state.showeditmodal}
                    chpid={this.props.chpid}
                    contentid={this.props.contentid}
                    title={this.props.title}
                    des={this.props.description}
                    showeditmodal={this.showEditModalHandler}
                    editsubmit={this.returnEditHandler} />

                <DeleteModal
                    show={this.state.showdeletemodal}
                    chpid={this.props.chpid}
                    contentid={this.props.contentid}
                    delete={this.props.delete}
                    showdeletemodal={this.showDeleteModalHandler} />
            </div >
        )
    }
}

export default EditButtons;