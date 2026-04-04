import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import useDocumentTitle from '../hooks/useDocumentTitle';

const NotFoundPage = () => {
  useDocumentTitle('Page Not Found');

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* Decorative 404 */}
        <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
          <span className="relative font-heading text-8xl font-bold text-primary/20">
            404
          </span>
        </div>

        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">
          Page not found
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-dark sm:text-5xl">
          Looks like this page took a detour.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-muted">
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-primary-dark"
          >
            <FiArrowLeft />
            Back to home
          </Link>
          <Link
            to="/browse"
            className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-dark transition-colors hover:border-primary hover:text-primary"
          >
            <FiSearch />
            Browse catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
