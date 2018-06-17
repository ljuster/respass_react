/* istanbul ignore file */
import styled, { css } from 'react-emotion'

// Styled Container
const StyledSelectMenu = styled.div(props => css`
    position: relative;
    display: inline-block;
    width: ${props.maxWidth};
    height: 32px;

  .Select {
    font-size: 12px;
    letter-spacing: 0.5px;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    font-family: ${props.theme.semiboldFont};

    &.is-focused {
      .Select-control {
        border-color: ${props.theme.primaryColor};
        box-shadow: none;
      }
    }

    .Select-arrow-zone {
      width: 12px;
      height: 4px;
      top: -1px;
      left: -1px;
      position: relative;
      transition: all 500ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
    }
    &.is-open {
      .Select-arrow-zone {
        top: -2px;
        transform: scaleY(-1);
      }

      .Select-control {
        border-radius: 2px;
      }
    }
  }

  .Select-control {
    height: 30px;
    border-color: ${props.theme.defaultColorLight};
    border-radius: 2px;
    transition: ease-in-out border-color 0.15s;

    &:hover {
      border-color: ${props.theme.primaryColor}
    }
  }

  .Select-menu-outer {
    border-radius: 2px;
    overflow: hidden;
    top: calc(100% + 10px);
    border-color: ${props.theme.defaultColorLight};
    box-shadow: ${props.theme.defaultBoxShadowColor};
    z-index: ${props.theme.zIndex1};
  }

  .Select-menu {
    padding: 8px 0;
  }

  .Select-option {
    position: relative;
    padding: 8px 17px;
    border-top: 1px solid  transparent;
    border-bottom: 1px solid transparent;

    &:hover,
    &.is-focused {
      background-color: ${props.theme.secondaryColorLight};
      color: ${props.theme.primaryColor};
    }

    &.is-selected {
      background-color: ${props.theme.secondaryColorLight};
      border-top-color: ${props.theme.secondaryColorBorder};
      border-bottom-color: ${props.theme.secondaryColorBorder};
      color: ${props.theme.primaryColor};

      &:after {
        content: '';
        position: absolute;
        top: -1px;
        left: 0;
        width: 3px;
        height: calc(100% + 2px);
        background-color: ${props.theme.primaryColor};
      }
    }
  }
`)

export default StyledSelectMenu
