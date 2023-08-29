import './pageLayout.css';
import PageBody from '@/components/pageBody/pageBody';
import PageHeader from '@/components/pageHeader/pageHeader';
import DisplayProvider from '@/providers/displayProvider';

export default function PageLayout() {
  return (
    <div className="page-layout">
      <DisplayProvider>
        <PageHeader className="page-header" />
        <PageBody className="page-body" />
      </DisplayProvider>
    </div>
  );
}
