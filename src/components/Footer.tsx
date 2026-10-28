import { Link } from 'react-router-dom';
import { categories } from '@/data/posts';
import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-sky-200/60 bg-sky-100/40">
      <div className="container-px grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-900 font-serif text-lg font-semibold text-sky-50">
              M
            </span>
            <span className="font-serif text-xl font-semibold text-sky-900">
              MinimalLife
            </span>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-sky-700/80">
            A quiet corner of the internet for slow living, simple spaces, and
            the everyday art of doing less — on purpose.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-sky-600">
            <Leaf size={16} />
            <span>Written slowly, read at your own pace.</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-900">
            Categories
          </h4>
          <ul className="mt-4 space-y-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/category/${c.slug}`}
                  className="link-underline text-sm text-sky-700/80 hover:text-sky-900"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-900">
            Pages
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <Link to="/" className="link-underline text-sm text-sky-700/80 hover:text-sky-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" className="link-underline text-sm text-sky-700/80 hover:text-sky-900">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-underline text-sm text-sky-700/80 hover:text-sky-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline text-sm text-sky-700/80 hover:text-sky-900">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sky-200/60">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-sm text-sky-600">
            © {new Date().getFullYear()} MinimalLife. All rights reserved.
          </p>
          <p className="text-sm text-sky-600">Made with care, not haste.</p>
        </div>
      </div>
    </footer>
  );
}
