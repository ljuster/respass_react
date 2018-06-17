import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Form from 'react-jsonschema-form'

import Button, { PRIMARY_BUTTON, SECONDARY_BUTTON } from 'src/Button'

export const FormWrapper = styled.div`
  padding: 20px 25px;
  text-align: left;
  background-color: #f5f5f5;
`

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`

const FormButton = styled(Button)`
  margin-left: 10px;
`

const FormDemo = ({ schema, uiSchema, onChange, onSubmit, onError, children }) => (
  <FormWrapper>
    <Form schema={schema} uiSchema={uiSchema}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError}
    >
      { !children &&
        <Buttons>
          <FormButton type='button'>Cancel</FormButton>
          <FormButton option={SECONDARY_BUTTON} type='submit'>Save & Close</FormButton>
          <FormButton option={PRIMARY_BUTTON} type='submit'>Save & Continue</FormButton>
        </Buttons>
      }
    </Form>
  </FormWrapper>
)

FormDemo.propTypes = {
  schema: PropTypes.object,
  uiSchema: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

FormDemo.defaultProps = {
  schema: undefined,
  uiSchema: undefined,
  onChange: undefined,
  onSubmit: undefined,
  onError: undefined,
  children: undefined
}

export default FormDemo
