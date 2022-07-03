import React, { MouseEvent, useState } from 'react';

import Link from 'next/link';
import { CSSTransition } from 'react-transition-group';

import Button from '@/components/button/Button';
import Cross from '@/components/icons/Cross';
import Menu from '@/components/icons/Menu';
import styles from '@/styles/main/header.module.scss';

function Open() {
  return (
    <Link href="https://felan.vercel.com" passHref>
      <a>
        <Button>Open App</Button>
      </a>
    </Link>
  );
}
export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleContainerClick = (e: MouseEvent<HTMLUListElement>) =>
    e.stopPropagation();

  return (
    <div className={styles.hamburgerMenu}>
      {!open ? <Menu onClick={handleOpen} /> : <Cross onClick={handleClose} />}
      <CSSTransition
        in={open}
        timeout={200}
        classNames={{
          enter: styles.menuEnter,
          enterActive: styles.menuEnterActive,
          exit: styles.menuExit,
          exitActive: styles.menuExitActive,
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className={styles.container} onClick={handleClose}>
          <ul onClick={handleContainerClick}>
            <li className={styles.connectButton}>
              <Open />
            </li>
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
}
