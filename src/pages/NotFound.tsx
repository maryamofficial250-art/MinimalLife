import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-16 sm:pt-20">
      <div className="container-px text-center">
        <p className="font-serif text-7xl font-semibold text-sky-200 sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-sky-900 sm:text-4xl">
          This page is not here
        </h1>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-sky-600">
          The page you were looking for may have moved, or perhaps it was
          never written. Let us get you back.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-900 px-6 py-3 text-sm font-medium text-sky-50 transition-all duration-300 hover:gap-3 hover:bg-sky-800"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>
      </div>
    </div>
  );
}
