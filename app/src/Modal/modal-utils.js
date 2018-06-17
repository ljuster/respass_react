import React from 'react'
import { compose } from 'recompose'
import { Modal } from './Modal'
import ModalContent from './ModalContent.js'
import ModalHeader from './ModalHeader.js'
import ModalFooter from './ModalFooter.js'
import ModalBody from './ModalBody.js'
import { withToggle } from 'src/utils'

export const stateModal = Component => ({
  modalId,
  title,
  // the buttons for the footer, actually a render function
  children,
  // state from recompose
  toggledOn,
  // handlers from recompose
  toggle, show, hide,
  // props for the component (content component)
  ...componentProps
}) => (
  <Modal
    modalId={modalId}
    closeModals={hide}
    isOpen={toggledOn}
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
            typeof children === 'function' && children({ closeModals: hide })
          }
        </ModalFooter>
      }
    </ModalContent>
  </Modal>
)

export const makeStateModal = compose(
  withToggle,
  stateModal
)
