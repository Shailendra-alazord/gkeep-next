'use client';
import './pageLayout.css';
import PageBody from '@/components/pageBody/pageBody';
import PageHeader from '@/components/pageHeader/pageHeader';
import DisplayProvider from '@/providers/displayProvider';
import { useCallback, useState } from 'react';

export default function PageLayout() {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prevState => !prevState);
  }, []);

  return (
    <div className="page-layout">
      <DisplayProvider>
        <PageHeader className="page-header" toggleMenu={toggleMenu} />
        <PageBody className="page-body" menuOpen={menuOpen} />
      </DisplayProvider>
    </div>
  );
}
