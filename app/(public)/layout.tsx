import MainFooter from '@/components/layout/main-footer';
import MainHeader from '@/components/layout/main-header';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Header */}
      <MainHeader />
      <main className="flex-1">{children}</main>
      {/* Main Footer */}
      <MainFooter />
    </div>
  );
};

export default MainLayout;
