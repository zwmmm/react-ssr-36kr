import React from 'react';
import styles from './Loading.less';
import classnames from 'classnames';

export default () => (
    <div className={ styles['page-loading'] }>
        <div className={ styles['self-building-square-spinner'] }>
            <div className={ styles.square }></div>
            <div className={ styles.square }></div>
            <div className={ styles.square }></div>
            <div className={ classnames([styles.square, styles.clear]) }></div>
            <div className={ styles.square }></div>
            <div className={ styles.square }></div>
            <div className={ classnames([styles.square, styles.clear]) }></div>
            <div className={ styles.square }></div>
            <div className={ styles.square }></div>
        </div>
    </div>
)