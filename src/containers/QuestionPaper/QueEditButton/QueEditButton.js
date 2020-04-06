import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import QueEditModal from './QueEditModal/QueEditModal';
import QueDeleteModal from './QueDeleteModal/QueDeleteModal';

class QueEditButton extends Component {
    state = {
        showdeletemodal: false,
        showeditmodal: false
    }

    showDeleteModalHandler = () => {
        this.setState({
            showdeletemodal: !this.state.showdeletemodal
        })
    }
    showEditModalHandler = () => {
        this.setState({
            showeditmodal: !this.state.showeditmodal
        })
    }

    render() {
        return (
            <div>
                <Button
                    className="float-right"
                    variant="light"
                    onClick={this.showDeleteModalHandler}>
                    <i className="fas fa-trash-alt"></i>
                </Button >
                <Button
                    className="float-right"
                    variant="light"
                    onClick={this.showEditModalHandler}>
                    <i className="far fa-edit"></i>
                </Button>

                <QueDeleteModal
                    queIndex={this.props.queIndex}
                    queid={this.props.queid}
                    show={this.state.showdeletemodal}
                    showdeletemodal={this.showDeleteModalHandler}
                    deletequestionhandler={this.props.deletequestionhandler} />

                <QueEditModal
                    queIndex={this.props.queIndex}
                    queid={this.props.queid}
                    que={this.props.que}
                    opt1={this.props.opt1}
                    opt2={this.props.opt2}
                    opt3={this.props.opt3}
                    opt4={this.props.opt4}
                    answer={this.props.answer}
                    queimage={this.props.queimage}
                    show={this.state.showeditmodal}
                    showeditmodal={this.showEditModalHandler}
                    updatequestionhandler={this.props.updatequestionhandler} />
            </div >
        )
    }
}

export default QueEditButton;