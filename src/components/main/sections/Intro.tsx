import React from 'react';

import styles from '@/styles/main/intro.module.scss';

export default function Intro() {
  return (
    <>
      <div className={styles.container}>
        <h2>Acquire insight by sharing and readimg, Pay for what you desire</h2>
        <p>
          {
            "With plenty of information shared on insight.d you'll be able to raise your knowledge on almost any field, and with power of TON Payments you'll be able to pay and unlock just whatever you need. No more subscriptions"
          }
        </p>
      </div>
    </>
  );
}
