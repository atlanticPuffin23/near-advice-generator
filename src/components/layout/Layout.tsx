import React from 'react';
import { Header } from './Header';
import { AppContent, MainContent } from './style';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <AppContent className="test">
      <Header />
      <MainContent>{children}</MainContent>
    </AppContent>
  </>
);
