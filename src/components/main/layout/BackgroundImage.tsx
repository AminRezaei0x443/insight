import React from 'react';

import Image from 'next/image';

import background from '@/public/assets/images/background.png';
import styles from '@/styles/main/layout.module.scss';

export default function BackgroundImage() {
  return (
    <div className={styles.background}>
      <Image src={background} alt="background image" objectFit="cover" />
    </div>
  );
}
