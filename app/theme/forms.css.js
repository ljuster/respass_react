/* istanbul ignore file */
import { injectGlobal } from 'emotion'

injectGlobal`
  fieldset {
    margin-top: 50px;
  }

  form.form-group > fieldset {
    margin-top: 0;
  }

  .form-group.field-string {
    display: inline-block;
    width: 100%;
    margin: 10px 0 10px;
  }

  .field-description {
    font-size: 14px;
    color: #666;
    margin: 0 0 8px 0;
  }

  .control-label ~ .field-description {
    margin-top: -7px;
  }

  /* Hide any p tags in form groups that are empty */
  .form-group p:empty {
    display: none;
  }

  .text-danger {
    padding: 6px 10px;
    color: #E7372D;
    font-size: 14px;
  }

  .error-detail .text-danger:before {
    content: '× ';
  }

  .panel-danger .panel-heading {
    color: #E7372D;
    font-size: 18px;
  }
`
