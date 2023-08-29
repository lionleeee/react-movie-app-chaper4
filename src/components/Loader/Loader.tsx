import React from 'react';
import loadingBar from '../../assets/loading.svg';
import styles from './Loader.module.css'; // CSS 모듈 가져오기

const Loader = () => (
  <div className={styles.Container}> {/* CSS 모듈 클래스 적용 */}
    <div className={styles.LoadingContainer}> {/* CSS 모듈 클래스 적용 */}
      <img src={loadingBar} alt="loadingBar"></img>
      <div className={styles.Title}>Loading...</div> {/* CSS 모듈 클래스 적용 */}
    </div>
  </div>
);

export default Loader;
