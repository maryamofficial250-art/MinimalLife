import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import { getPost, getCategory, getRelatedPosts } from '@/data/posts';
import NotFound from './NotFound';
import PostCard from '@/components/PostCard';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) return <NotFound />;

  const category = getCategory(post.category);
  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="pt-16 sm:pt-20">
      <article>
        {/* Hero */}
        <header className="relative">
          <div className="relative h-[50vh] min-h-[360px] w-full overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-sky-900/20 to-sky-900/30" />
          </div>
          <div className="container-px -mt-32 relative z-10 sm:-mt-40">
            <div className="mx-auto max-w-3xl rounded-3xl bg-sky-50/95 p-8 shadow-xl backdrop-blur-md sm:p-12">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition-colors hover:text-sky-900"
              >
                <ArrowLeft size={16} />
                Back to articles
              </Link>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider text-sky-500">
                <Link
                  to={`/category/${post.category}`}
                  className="link-underline hover:text-sky-700"
                >
                  {category?.name}
                </Link>
                <span className="h-1 w-1 rounded-full bg-sky-300" />
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-sky-300" />
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readingTime}
                </span>
              </div>
              <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-sky-900 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-3 text-sm text-sky-600">
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  {post.author}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container-px py-12 sm:py-16">
          <div className="mx-auto max-w-prose">
            <div className="article-prose">
              {post.content.map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i}>{block.replace(/^##\s+/, '')}</h2>;
                }
                if (block.startsWith('### ')) {
                  return <h3 key={i}>{block.replace(/^###\s+/, '')}</h3>;
                }
                if (block.startsWith('> ')) {
                  return <blockquote key={i}>{block.replace(/^>\s+/, '')}</blockquote>;
                }
                if (block.startsWith('- ')) {
                  const items = block.split('\n').map((l) => l.replace(/^-\s+/, ''));
                  return (
                    <ul key={i}>
                      {items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{block}</p>;
              })}
            </div>

            {/* Share / tags */}
            <div className="mt-12 flex flex-col gap-4 border-t border-sky-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to={`/category/${post.category}`}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-100 px-5 py-2.5 text-sm font-medium text-sky-800 transition-colors hover:bg-sky-200"
              >
                More in {category?.name}
                <ArrowRight size={14} />
              </Link>
              <p className="text-sm text-sky-500">
                Written by {post.author} · {post.date}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-sky-100/30 py-16 sm:py-20">
          <div className="container-px">
            <h2 className="font-serif text-2xl font-semibold text-sky-900 sm:text-3xl">
              Keep reading
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
