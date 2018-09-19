import React, { Component } from "react";
//import injectSheet from 'react-jss';
//import styles from './SimpleModalLauncherStyles'; // Import styles
import SimpleModal from "./SimpleModal"; // Import SimpleModal component
import styled from "styled-components";

const ModalButton = styled.button`
	padding: 0.7rem 1.8rem;
	background-color: #568db2;
	border: 0;
	border-radius: 0.3rem;
	font-size: 1rem;
	color: #fff;
	cursor: pointer;
	margin-bottom: 0.8rem;

	&:hover {
		background-color: #466d87;
	}
`;

class SimpleModalLauncher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    //const { sheet: { classes } } = this.props;
    const { showModal } = this.state;

    return (
      <div>
        <ModalButton onClick={() => this.handleToggleModal()}>
          Open Modal
        </ModalButton>

        {showModal && (
          <SimpleModal onCloseRequest={() => this.handleToggleModal()}>
            <img src="https://placeimg.com/900/650/nature" alt="nature" />
          </SimpleModal>
        )}
      </div>
    );
  }
}

export default SimpleModalLauncher;
