import { Link } from 'react-router-dom';
import { Leaf, Home as HomeIcon, UtensilsCrossed, Plane } from 'lucide-react';
import { categories } from '@/data/posts';

const values = [
  {
    icon: Leaf,
    title: 'Slow over fast',
    text: 'We are interested in the thing done once, well, with attention — not the thing done three times in a hurry.',
  },
  {
    icon: HomeIcon,
    title: 'Less, but better',
    text: 'A small number of good things, arranged with care, beats a large number of forgettable ones.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Seasonal by default',
    text: 'We cook what is good now, eat when we are hungry, and let the calendar do the planning.',
  },
  {
    icon: Plane,
    title: 'Unhurried travel',
    text: 'We go fewer places, stay longer, and let the place set the pace instead of us.',
  },
];

export default function About() {
  return (
    <div className="pt-16 sm:pt-20">
      <section className="container-px py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-sky-500">
            About
          </p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-sky-900 sm:text-5xl">
            A quiet corner for people who want more by doing less.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-sky-700/80">
            MinimalLife is a journal about slow living — the practice of paying
            attention to the small, ordinary things that turn out to be the
            whole point. It is written for people who are tired of busy and
            curious about enough.
          </p>
        </div>
      </section>

      {/* Image band */}
      <section className="container-px">
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.pexels.com/photos/36838562/pexels-photo-36838562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="A quiet beach walk"
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
      </section>

      {/* Story */}
      <section className="container-px py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-sky-900 sm:text-3xl">
              How it started
            </h2>
          </div>
          <div className="article-prose lg:col-span-3">
            <p>
              MinimalLife began as a notebook — a few pages kept on a kitchen
              table, written in the quiet hour before the day started demanding
              things.
            </p>
            <p>
              The notebook was never meant to be a blog. It was a way to
              remember that the day I had just had was, in fact, a good one —
              not because it was full, but because it had space in it. A morning
              walk. A simple meal. A room that was clean enough to think in.
            </p>
            <p>
              Over time the notebook became a habit, the habit became a set of
              ideas, and the ideas became this journal. It is still written the
              same way: slowly, in the quiet hour, about the ordinary things
              that turn out to be the whole point.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sky-100/40 py-16 sm:py-20">
        <div className="container-px">
          <h2 className="text-center font-serif text-3xl font-semibold text-sky-900 sm:text-4xl">
            What we believe
          </h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-sky-50/80 p-8 ring-1 ring-sky-200/50 transition-shadow hover:shadow-[0_8px_30px_rgba(49,68,92,0.06)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-900 text-sky-50">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-sky-900">
                  {v.title}
                </h3>
                <p className="mt-2 leading-relaxed text-sky-700/80">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 sm:py-20">
        <div className="container-px">
          <h2 className="text-center font-serif text-3xl font-semibold text-sky-900 sm:text-4xl">
            What we write about
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group rounded-2xl bg-white/70 p-6 ring-1 ring-sky-200/40 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-serif text-lg font-semibold text-sky-900">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-700/80">
                  {cat.description}
                </p>
                <span className="link-underline mt-4 inline-block text-sm font-medium text-sky-700">
                  Read articles
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
