import { FC, ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Sidebar } from '../components/Sidebar/Sidebar';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="lg:flex max-w-screen-lg mx-auto justify-center lg:space-x-10">
        {children}
        <Sidebar />
      </main>
    </div>
  );
};

export default Layout;
