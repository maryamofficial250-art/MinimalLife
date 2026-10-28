import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import {
  categories,
  getFeaturedPost,
  getRecentPosts,
  getCategory,
} from '@/data/posts';
import PostCard from '@/components/PostCard';

export default function Home() {
  const featured = getFeaturedPost();
  const recent = getRecentPosts(3);
  const featuredCategory = getCategory(featured.category);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-px grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-sky-700">
              A lifestyle journal
            </span>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] text-sky-900 sm:text-5xl lg:text-6xl">
              Slow living,
              <br />
              simply told.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-sky-700/80">
              MinimalLife is a quiet space for thoughtful routines, calm
              spaces, mindful meals, and unhurried travel — written for people
              who want more by doing less.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-sky-900 px-6 py-3 text-sm font-medium text-sky-50 transition-all duration-300 hover:gap-3 hover:bg-sky-800"
              >
                Read the articles
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-sky-300 px-6 py-3 text-sm font-medium text-sky-800 transition-colors hover:bg-sky-100"
              >
                About the journal
              </Link>
            </div>
          </div>

          <div className="animate-fade-in [animation-delay:200ms]">
            <div className="relative">
              <div className="absolute -right-6 -top-6 hidden h-full w-full rounded-3xl border border-sky-200 lg:block" />
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sky-900/80 to-transparent p-6">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-sky-100">
                    <span>{featuredCategory?.name}</span>
                    <span className="h-1 w-1 rounded-full bg-sky-200" />
                    <span>{featured.readingTime}</span>
                  </div>
                  <h2 className="mt-2 font-serif text-xl font-semibold text-white sm:text-2xl">
                    {featured.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section className="py-16 sm:py-20">
        <div className="container-px">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-sky-500">
                Explore
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-sky-900 sm:text-4xl">
                Featured categories
              </h2>
            </div>
            <Link
              to="/blog"
              className="link-underline hidden text-sm font-medium text-sky-700 sm:inline-block"
            >
              View all articles
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group relative flex flex-col justify-end overflow-hidden rounded-2xl p-6 ring-1 ring-sky-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(49,68,92,0.08)]"
              >
                <div className="absolute inset-0">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/85 via-sky-900/30 to-transparent" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="font-serif text-xl font-semibold">{cat.name}</h3>
                  <p className="mt-1.5 text-sm text-sky-100/90">{cat.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/90 transition-all group-hover:gap-2.5">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article banner */}
      <section className="py-8 sm:py-12">
        <div className="container-px">
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl bg-sky-900 text-sky-50 ring-1 ring-sky-800 lg:grid-cols-5"
          >
            <div className="relative overflow-hidden lg:col-span-3">
              <img
                src={featured.image}
                alt={featured.title}
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:aspect-auto lg:h-full"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
              <span className="text-xs font-medium uppercase tracking-wider text-sky-300">
                Editor's pick
              </span>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-sky-200/90">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-sky-300">
                <span>{featured.author}</span>
                <span className="h-1 w-1 rounded-full bg-sky-500" />
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {featured.readingTime}
                </span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-sky-100 transition-all group-hover:gap-3">
                Read the article <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      <section className="py-16 sm:py-20">
        <div className="container-px">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl font-semibold text-sky-900 sm:text-4xl">
              Latest articles
            </h2>
            <Link
              to="/blog"
              className="link-underline text-sm font-medium text-sky-700"
            >
              All articles
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20">
        <div className="container-px">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 to-foam-100 px-6 py-14 text-center sm:px-12 lg:py-20">
            <h2 className="font-serif text-3xl font-semibold text-sky-900 sm:text-4xl">
              Letters, occasionally
            </h2>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-sky-700/80">
              A short note in your inbox every so often — one article, one idea,
              no noise. Unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-sky-200 bg-white/80 px-5 py-3 text-sm text-sky-900 placeholder:text-sky-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <button
                type="submit"
                className="rounded-full bg-sky-900 px-6 py-3 text-sm font-medium text-sky-50 transition-colors hover:bg-sky-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
