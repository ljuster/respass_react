/* istanbul ignore file */
import { injectGlobal } from 'emotion'

injectGlobal`
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #E1E1E1;
  }

  th:first-child, td:first-child {
    padding-left: 0;
  }

  th:last-child, td:last-child {
    padding-right: 0;
  }
`
