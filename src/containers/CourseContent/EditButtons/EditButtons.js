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

    updateContentHandler = (e, sectionid, contentid, title, description, lecturevideo) => {
        this.props.updatecontenthandler(e, sectionid, contentid, title, description, lecturevideo);
        this.showEditModalHandler();
    }

    LessonButton = () => (
        <Button
            className="float-right"
            variant="light"
            onClick={this.showEditModalHandler}>
            <i className="far fa-edit"></i>
        </Button>
    )
    ExamButton = () => (
        <Link to={"/questionpaper/" + this.props.contentid}>
            <Button
                className="float-right"
                variant="light">
                <i className="far fa-edit"></i>
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
                    sectionid={this.props.sectionid}
                    contentid={this.props.contentid}
                    title={this.props.title}
                    description={this.props.description}
                    lecturevideo={this.props.lecturevideo}
                    showeditmodal={this.showEditModalHandler}
                    updatecontenthandler={this.updateContentHandler} />

                <DeleteModal
                    show={this.state.showdeletemodal}
                    sectionid={this.props.sectionid}
                    contentid={this.props.contentid}
                    showdeletemodal={this.showDeleteModalHandler}
                    deletecontenthandler={this.props.deletecontenthandler} />
            </div >
        )
    }
}

export default EditButtons;