import { get } from 'lodash'

export const themeTypes = styles => (cssProp, { toggleOn, switchOn }) => props => {
  const themePropOrValue = switchOn
    ? styles[props[switchOn] ? props[switchOn] : 'default'][cssProp] || styles['default'][cssProp]
    : styles[props[toggleOn] ? toggleOn : 'default'][cssProp] || styles['default'][cssProp]
  return props.theme[themePropOrValue] || themePropOrValue
}

export const makeToggle = (toggleOn, styles) => cssProp => props => {
  const themePropOrValue = styles[props[toggleOn] ? toggleOn : 'default'][cssProp] || styles['default'][cssProp]
  return props.theme[themePropOrValue] || themePropOrValue
}

export const makeSwitch = (switchOn, styles) => cssProp => props => {
  // if default is a string
  const fallbackKey = typeof styles.default === 'string'
    ? styles.default
    : 'default'
  const styleProps = styles[props[switchOn]] || styles[fallbackKey]
  try {
    const themePropOrValue = styleProps[cssProp]
    return props.theme[themePropOrValue] || themePropOrValue
  } catch (error) {
    throw new Error(`Your default key "${styles.default}" should point to another key on your styles object.\n\nThe problem is here somewhere:\nmakeSwitch('${switchOn}', ${JSON.stringify(styles, null, '  ')})\n`)
  }
}

export const emptyString = () => ''

export const getStyle = (target, ...keys) => get(target, keys) || target.default || emptyString

export const responsiveCalc = ({ units = 'px', min, max, minVw = 400, maxVw = 1200 }) => (
  `calc( ${min}${units} + ${max - min} * ( (100vw - ${minVw}${units}) / ${maxVw - minVw} ))`
)

export const responsiveText = ({ units = 'px', min, max, minVw = 400, maxVw = 1200 }) => `
  font-size: calc( ${min}${units} + ${max - min} * ( (100vw - ${minVw}${units}) / ${maxVw - minVw} ));
  @media screen and (min-width: ${maxVw}px) {
    font-size: ${max}${units};
  };
  @media screen and (max-width: ${minVw}px) {
    font-size: ${min}${units};
  };`
