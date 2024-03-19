import { ReactNode } from 'react'

import Nav from '../Nav';
import Footer from '../Footer';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
}

const Layout = ({ children, className='' }: LayoutProps) => {
  return (
    <div className={`grid grid-rows-[auto_1fr_auto] h-screen ${className}`}>
      <Nav />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}

export default Layout;