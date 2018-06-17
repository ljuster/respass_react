
export const textSchema = {
  title: 'Text Inputs',
  type: 'object',
  required: ['required'],
  properties: {
    basic: {
      type: 'string',
      title: 'Basic Text Input'
    },
    hardCoded: {
      type: 'string',
      title: 'Basic Text Input (w/default)',
      default: 'Hard-coded default value.'
    },
    info: {
      type: 'string',
      title: 'Basic Text Input (w/info text)'
    },
    required: {
      type: 'string',
      title: 'Required'
    },
    validation: {
      type: 'string',
      title: 'With Validation',
      minLength: 3
    },
    fieldSet: {
      title: 'This Is Field Set',
      type: 'object',
      properties: {
        field1: {
          type: 'string',
          title: 'Field 1'
        },
        field2: {
          type: 'string',
          title: 'Field 2'
        }
      }
    }
  }
}

export const textUiSchema = {
  basic: {
    'ui:placeholder': 'type stuff here'
  },
  required: {
    'ui:placeholder': 'type here, or else'
  },
  hardCoded: {
    'ui:placeholder': 'it also has placeholder text'
  },
  info: {
    'ui:description': 'ⓘ This field has a info text defined as a description field in the uiSchema',
    'ui:placeholder': 'info above to help you out'
  },
  validation: {
    'ui:description': 'ⓘ Type at least 3 characters here...',
    'ui:placeholder': '... or else'
  }
}
