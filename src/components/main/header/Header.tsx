import React from 'react';

import Image from 'next/image';

import LogoImage from '@/public/logo.png';
import styles from '@/styles/main/header.module.scss';
import { AppConfig } from '@/utils/AppConfig';

import HamburgerMenu from './HamburgerMenu';
import NavLinks from './NavLinks';

function Logo() {
  return (
    <span className="mr-4 flex items-center justify-center">
      <Image src={LogoImage} alt="Insight.d Logo" width={44} height={44} />
    </span>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <HamburgerMenu />
      <h3 className="flex flex-row items-center">
        <Logo />
        {AppConfig.site_name}
      </h3>
      <div className="w-5 md:hidden" />
      <NavLinks />
    </header>
  );
}
