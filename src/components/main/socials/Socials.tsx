import React from 'react';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Telegram from '@/public/assets/images/telegram-icon.svg';
import Twitter from '@/public/assets/images/twitter-icon.svg';
import styles from '@/styles/main/socials.module.scss';

export default function Socials(props: { className?: any }) {
  return (
    <div className={cn(styles.socials, props.className)}>
      <Link href="https://t.me/nottrunes" passHref>
        <a target="_blank">
          <Image src={Telegram} alt="Telegram" />
        </a>
      </Link>
      <Link href="https://twitter.com/nottrunes" passHref>
        <a target="_blank">
          <Image src={Twitter} alt="Twitter" />
        </a>
      </Link>
      {/* <Link href="https://discord.com/" passHref>
        <a target="_blank">
          <Image src={Discord} alt="Discord" />
        </a>
      </Link>
      <Link href="https://instagram.com/nottrunes" passHref>
        <a target="_blank">
          <Image src={Instagram} alt="Instagram" />
        </a>
      </Link> */}
    </div>
  );
}
