import React from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import * as styles from './Modal.css'

export const Modal = ({
  contentLabel,
  modalId,
  // possibly from connect
  closeModals,
  isOpen,
  children,
  ...restProps
}) => (
  <ReactModal
    isOpen={isOpen}
    ariaHideApp={false}
    className={styles.modal}
    onRequestClose={closeModals}
    overlayClassName={styles.modalOverlay}
    contentLabel='this is a modal'
    shouldCloseOnOverlayClick={!!(closeModals)}
    {...restProps}
  >
    {closeModals &&
      <button className={styles.closeButton} onClick={closeModals}>&times;</button>
    }
    {children}
  </ReactModal>
)

Modal.propTypes = {
  closeModals: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.node
}

Modal.defaultProps = {
  closeModals: undefined,
  isOpen: false,
  children: undefined
}

export default Modal
