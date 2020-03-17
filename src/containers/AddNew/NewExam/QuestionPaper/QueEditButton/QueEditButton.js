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
                    index={this.props.index}
                    show={this.state.showdeletemodal}
                    showdeletemodal={this.showDeleteModalHandler}
                    deletequestion={this.props.deletequestion} />

                <QueEditModal
                    index={this.props.index}
                    que={this.props.que}
                    opt1={this.props.opt1}
                    opt2={this.props.opt2}
                    opt3={this.props.opt3}
                    opt4={this.props.opt4}
                    show={this.state.showeditmodal}
                    showeditmodal={this.showEditModalHandler}
                    editquestion={this.props.editquestion} />
            </div >
        )
    }

}

export default QueEditButton;