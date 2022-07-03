import React from 'react';

import styles from '@/styles/main/footer.module.scss';

import Socials from '../socials/Socials';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Socials />
      <h4>© 2022 Nott Platform, All Rights Reserved.</h4>
    </footer>
  );
}
