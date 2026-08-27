import { Link } from 'react-router-dom';
import Reveal from './Reveal';

/**
 * Fallback for unmatched routes (Route path="*" in App). Shown when user hits a URL that doesn't match / or /room/:id.
 */
export default function PageNotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-neutral-50 px-4 py-32">
      <Reveal variant="scale-up" duration={1000} className="text-center max-w-md bg-white p-10 shadow-xl border border-neutral-100 rounded-sm">
        <h1 className="text-7xl font-primary text-accent mb-4">404</h1>
        <h2 className="text-2xl font-primary mb-3">Page Not Found</h2>
        <p className="text-gray-600 mb-8 font-secondary text-sm leading-relaxed">
          The requested sanctuary could not be located. Please return to our home page to discover our luxury accommodations.
        </p>
        <Link to="/" className="btn btn-primary btn-lg inline-flex max-w-[220px] mx-auto shadow-md">
          Back To Home
        </Link>
      </Reveal>
    </div>
  );
}

