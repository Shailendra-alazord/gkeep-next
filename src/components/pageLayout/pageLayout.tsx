import PageBody from '@/components/pageBody/pageBody';
import PageHeader from '@/components/pageHeader/pageHeader';

export default function PageLayout() {
  return (
    <div className="page-layout">
      <PageHeader />
      <PageBody />
    </div>
  );
}
