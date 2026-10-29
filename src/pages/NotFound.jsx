import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Not found');

  return (
    <div className="page-wrap flex min-h-[60vh] flex-col justify-center py-20">
      <SectionHeading
        as="h1"
        kicker="404"
        title="This look has left the rail."
        text="The page is not in the edit. The house is still open."
      />
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary w-full sm:w-auto">Back home</Link>
        <Link to="/style" className="btn-line w-full sm:w-auto">Style me</Link>
      </div>
    </div>
  );
}
