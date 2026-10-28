import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import type { Post } from '@/data/posts';
import { getCategory } from '@/data/posts';

export default function PostCard({ post }: { post: Post }) {
  const category = getCategory(post.category);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] ring-1 ring-sky-200/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(49,68,92,0.08)]">
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-sky-500">
          <Link
            to={`/category/${post.category}`}
            className="link-underline hover:text-sky-700"
          >
            {category?.name}
          </Link>
          <span className="h-1 w-1 rounded-full bg-sky-300" />
          <span>{post.date}</span>
        </div>
        <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-sky-900">
          <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-sky-700">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-sky-700/80">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-sky-100 pt-4 text-sm text-sky-500">
          <span className="font-medium text-sky-700">{post.author}</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
}
