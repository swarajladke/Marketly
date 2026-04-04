import React from 'react';

/**
 * Full-page loading spinner shown while lazy-loaded routes are fetched.
 */
const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
      </div>
      <p className="text-sm font-medium text-muted">Loading...</p>
    </div>
  </div>
);

export default PageLoader;
