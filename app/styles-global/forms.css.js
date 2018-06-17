/* istanbul ignore file */
import { injectGlobal } from 'emotion'

injectGlobal`
  input[type="email"], input[type="number"], input[type="search"], input[type="text"], input[type="tel"], input[type="url"], input[type="password"],
  textarea, select {
    padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
  }

  /* Removes awkward default styles on some inputs for iOS */
  input[type="email"], input[type="number"], input[type="search"], input[type="text"], input[type="tel"], input[type="url"], input[type="password"],
  textarea {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
  }

  textarea {
    min-height: 65px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  input[type="email"]:focus, input[type="number"]:focus, input[type="search"]:focus, input[type="text"]:focus, input[type="tel"]:focus, input[type="url"]:focus, input[type="password"]:focus,
  textarea:focus, select:focus {
    border: 1px solid #33C3F0;
    outline: 0;
  }

  label, legend {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
  }

  fieldset {
    padding: 0;
    border-width: 0;
  }

  input[type="checkbox"], input[type="radio"] {
    display: inline;
  }

  label > .label-body {
    display: inline-block;
    margin-left: .5rem;
    font-weight: normal;
  }
`
