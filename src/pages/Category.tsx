import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getCategory, getPostsByCategory, categories } from '@/data/posts';
import PostCard from '@/components/PostCard';
import NotFound from './NotFound';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategory(slug) : undefined;

  if (!category) return <NotFound />;

  const categoryPosts = getPostsByCategory(slug!);

  return (
    <div className="pt-16 sm:pt-20">
      <section className="relative overflow-hidden">
        <div className="relative h-[36vh] min-h-[280px] w-full">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-900/80 to-sky-900/30" />
        </div>
        <div className="container-px -mt-24 relative z-10 sm:-mt-28">
          <div className="mx-auto max-w-2xl rounded-3xl bg-sky-50/95 p-8 text-center shadow-xl backdrop-blur-md sm:p-12">
            <p className="text-sm font-medium uppercase tracking-wider text-sky-500">
              Category
            </p>
            <h1 className="mt-2 font-serif text-3xl font-semibold text-sky-900 sm:text-4xl">
              {category.name}
            </h1>
            <p className="mx-auto mt-4 max-w-md leading-relaxed text-sky-700/80">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-px">
          {categoryPosts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-sky-600">
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-sky-200/50 py-12">
        <div className="container-px">
          <h2 className="font-serif text-xl font-semibold text-sky-900">
            Other categories
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/category/${c.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-2.5 text-sm font-medium text-sky-800 ring-1 ring-sky-200 transition-all hover:bg-sky-100"
                >
                  {c.name}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
