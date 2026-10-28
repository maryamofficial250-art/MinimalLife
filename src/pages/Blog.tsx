import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { posts, categories } from '@/data/posts';
import PostCard from '@/components/PostCard';

export default function Blog() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory =
        activeCategory === 'all' || p.category === activeCategory;
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <section className="border-b border-sky-200/50 bg-gradient-to-b from-sky-100/50 to-transparent">
        <div className="container-px py-16 text-center sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-500">
            The journal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-sky-900 sm:text-5xl">
            Articles
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-sky-700/80">
            Essays on slow living, simple spaces, mindful eating, and calm
            travel — written to be read slowly.
          </p>
        </div>
      </section>

      {/* Search + filter */}
      <section className="sticky top-16 z-30 border-b border-sky-200/50 bg-sky-50/85 backdrop-blur-md sm:top-20">
        <div className="container-px flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <FilterChip
              label="All"
              active={activeCategory === 'all'}
              onClick={() => setActiveCategory('all')}
            />
            {categories.map((c) => (
              <FilterChip
                key={c.slug}
                label={c.name}
                active={activeCategory === c.slug}
                onClick={() => setActiveCategory(c.slug)}
              />
            ))}
          </div>
          <div className="relative w-full lg:w-72">
            <Search
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sky-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full rounded-full border border-sky-200 bg-white/80 py-2.5 pl-11 pr-4 text-sm text-sky-900 placeholder:text-sky-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 sm:py-16">
        <div className="container-px">
          {filtered.length > 0 ? (
            <>
              <p className="mb-8 text-sm text-sky-500">
                {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-sky-700">
                Nothing found
              </p>
              <p className="mt-2 text-sky-500">
                Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? 'bg-sky-900 text-sky-50'
          : 'bg-white/70 text-sky-700 ring-1 ring-sky-200 hover:bg-sky-100'
      }`}
    >
      {label}
    </button>
  );
}
