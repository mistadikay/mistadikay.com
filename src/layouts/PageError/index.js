import React, { PropTypes } from 'react';
import styles from './index.css';

const ERROR_CODE_NOT_FOUND = 404;
const PageError = ({ error, errorText }) => (
  <div className={styles.container}>
    <div className={styles.oops}>😱 Oooops!</div>
    <div className={styles.text}>
      <p className={styles.title}>
        <strong>{ error }</strong>
        { ' ' }
        { errorText }
      </p>
      {
        error === ERROR_CODE_NOT_FOUND &&
        <div>
          It seems you found a broken link. Sorry about that.
          <br/>
          Do not hesitate to report this page 😁.
        </div>
      }
    </div>
  </div>
);

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
};

PageError.defaultProps = {
  error: 404,
  errorText: 'Page Not Found',
};

export default PageError;
