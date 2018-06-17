import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import { Modal } from './Modal'
import ModalContent from './ModalContent.js'
import ModalHeader from './ModalHeader.js'
import ModalFooter from './ModalFooter.js'
import ModalBody from './ModalBody.js'
import { closeModals, openModal } from './Modal.actions'
import { isModalOpenSelector } from './Modal.selectors'

// NOTE: To unit test import this component on it's own. Use it to create a modal container component and write your tests against that. Do not use the `connectModal` HOC below in tests.
export const asModalContainer = Component => {
  const ModalContainer = ({
    modalId,
    title,
    // the buttons for the footer, actually a render function
    children,
    // from connect
    isOpen,
    closeModals,
    // props for the component (content component)
    ...componentProps
  }) => (
    <Modal
      modalId={modalId}
      closeModals={closeModals}
      isOpen={isOpen}
      children={children}
    >
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalBody>
          {Component && <Component {...componentProps} />}
        </ModalBody>
        {children &&
          <ModalFooter>
            {
              typeof children === 'function' && children({ closeModals })
            }
          </ModalFooter>
        }
      </ModalContent>
    </Modal>
  )

  ModalContainer.propTypes = {
    modalId: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.func,
    isOpen: PropTypes.bool,
    closeModals: PropTypes.func
  }

  ModalContainer.defaultProps = {
    modalId: undefined,
    title: undefined,
    children: undefined,
    isOpen: false,
    closeModals: undefined
  }

  return ModalContainer
}

// --------------------------------------------------------
//  Connect Modal HOC
// --------------------------------------------------------
const mapStateToPropsModal = (state, ownProps) => ({
  isOpen: isModalOpenSelector(state, ownProps)
})

const mapDispatchToPropsModal = {
  closeModals
}

export const connectModal = compose(
  connect(mapStateToPropsModal, mapDispatchToPropsModal),
  asModalContainer
)

// --------------------------------------------------------
//  Connect Open Modal Button HOC
// --------------------------------------------------------
export const withOpenModal = compose(
  connect(undefined, { openModal }),
  withHandlers({
    onClick: props => event => {
      props.openModal(props.modalId)
    }
  })
)
