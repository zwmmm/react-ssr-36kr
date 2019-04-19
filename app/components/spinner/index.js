import React from 'react';
import className from 'classnames';
import styles from './spinner.less'

export default props => (
    <div className={ className(styles['circles-to-rhombuses-spinner'], props.className) }>
        <div className={ styles.circle }></div>
        <div className={ styles.circle }></div>
        <div className={ styles.circle }></div>
    </div>
)