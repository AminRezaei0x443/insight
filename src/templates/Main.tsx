import { ReactNode } from 'react';

import Footer from '@/components/main/footer/Footer';
import Header from '@/components/main/header/Header';
import BackgroundImage from '@/components/main/layout/BackgroundImage';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full antialiased text-gray-700">
    {props.meta}
    <Header />
    <div className="text-xl content">{props.children}</div>
    <Footer />
    <BackgroundImage />
  </div>
);

export { Main };
