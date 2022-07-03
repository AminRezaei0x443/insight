import React from 'react';

import Link from 'next/link';

import Button from '@/components/button/Button';

function Open() {
  return (
    <Link href="https://felan.vercel.com" passHref>
      <a>
        <Button>Open App</Button>
      </a>
    </Link>
  );
}

export default function NavLinks() {
  return (
    <div className="hidden flex-nowrap items-center md:flex">
      <Open />
    </div>
  );
}
