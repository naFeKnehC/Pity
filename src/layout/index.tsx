import React from 'react';
import {Outlet} from 'react-router-dom';

import styles from './index.less';

//主布局页面
function Index() {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>导航栏</div>
      <div className={styles.headerGap}/>
      <div className={styles.main}>
        <Outlet/>
      </div>
    </div>
  );
}

export default Index;
