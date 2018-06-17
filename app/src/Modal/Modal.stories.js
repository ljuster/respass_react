/* istanbul ignore file */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { compose } from 'recompose'
import { Modal } from './Modal'
import FillWindowContainer from 'storybook-utils/FillWindowContainer'
import styled from 'react-emotion'

import NOTES from './README.md'
import { withNotes } from '@storybook/addon-notes'

import { withToggle } from 'src/utils'
import Link, { PRIMARY_LINK, SECONDARY_LINK } from 'src/Link'
import Button, { PRIMARY_BUTTON } from 'src/Button'
import ErrorModalContent from 'src/ErrorModalContent'
import MessageModalContent from 'src/MessageModalContent'
import SpinnerModalContent from 'src/SpinnerModalContent'

import { stateModal } from './modal-utils'

const errors = [
  { full_message: 'This is a simple error.' },
  { full_message: 'This is a really long error message that may or may not wrap.' },
  // eslint-disable-next-line no-multi-str
  { full_message: 'This is a really long error message that will wrap for sure because it is\
  crazy crazy long. Super long. Long enough for the linter to complain about it.' },
  { full_message: 'This one has multiple lines \nbecause I want to see if \na new line works.' }
]

const message = 'This is used for general purpose messages we want to make sure the user sees.'

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: -webkit-fill-available;
`

export const SpinnerModalPresenter = withToggle(
  ({
    modalId,
    children,
    toggledOn,
    show,
    ...componentProps
  }) => (
    <FillWindowContainer>
      <Item>
        <Button
          option={PRIMARY_BUTTON}
          onClick={show}
        >
          Click To Open Modal
        </Button>
      </Item>
      <Modal
        modalId={modalId}
        isOpen={toggledOn}
        children={children}
      >
        <SpinnerModalContent {...componentProps} />
      </Modal>
    </FillWindowContainer>
  )
)

// Wrapper HOC that includes a button to open the modal. The rest of the props are passed through.
const modalPresenter = Component => ({ show, ...componentProps }) => (
  <FillWindowContainer>
    <Item>
      <Button option={PRIMARY_BUTTON} onClick={show}>
        Click To Open Modal
      </Button>
    </Item>
    <Component {...componentProps} />
  </FillWindowContainer>
)

// Composes in revers order. FIrst will wrap passed component with `stateModal`,
// then modalPresenter, and finally decorate with toggle state and handlers using withToggle.
const makeModalPresenter = compose(
  withToggle,
  modalPresenter,
  stateModal
)

const ErrorModal = makeModalPresenter(ErrorModalContent)
const MessageModal = makeModalPresenter(MessageModalContent)

storiesOf('Modals', module)
  .add(
    'Error Modal',
    withNotes(NOTES)(
      () => (
        <ErrorModal
          title='Contrived Errors'
          modalId='STORYBOOK_ERROR_MODAL'
          errors={errors}
        >
          {
            ({ closeModals }) => (
              <Link onClick={closeModals} option={PRIMARY_LINK}>OK</Link>
            )
          }
        </ErrorModal>
      )
    )
  )

  .add(
    'Message Modal',
    withNotes(NOTES)(
      () => (
        <MessageModal
          title='Contrived Message'
          modalId='STORYBOOK_MESSAGE_MODAL'
          message={message}
        >
          {
            ({ closeModals }) => (
              <span>
                <Link onClick={closeModals} option={SECONDARY_LINK}>CANCEL</Link>
                <Link onClick={closeModals} option={PRIMARY_LINK}>OK</Link>
              </span>
            )
          }
        </MessageModal>
      )
    )
  )

  .add(
    'Loading Spinner Modal',
    withNotes(NOTES)(
      () => (
        <SpinnerModalPresenter
          onAnimationEnd={() => console.log('animation done')}
          modalId='STORYBOOK_SPINNER_MODAL'
          success={false}
        />
      )
    )
  )
