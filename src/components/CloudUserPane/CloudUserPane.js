import { h } from 'preact';

import { Button } from 'topcoat-preact';

import styles from './index.less';

// @TODO This will probably be refactored to accept children
const CloudUserPane = (props, state) => (
  <div className={ styles.cloudUserPane }>
    <p>You have no saved projects on PhoneGap Build, yet.</p>
    <p>Try it out right now by creating our sample app Star Track</p>
    <Button
      cta
      full
      aria-label="Create Sample App"
      clickHandler={ e => props.handleButtonClick('button', e) }
    >
      Create Sample App
    </Button>
    <p>Visit build.phonegap.com to create your own apps.</p>
    { props.children }
  </div>
);

export default CloudUserPane;

