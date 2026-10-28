export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  accent: string;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  featured?: boolean;
  content: string[];
};

export const categories: Category[] = [
  {
    slug: 'slow-living',
    name: 'Slow Living',
    description: 'Rituals and rhythms for a calmer, more intentional everyday.',
    image: 'https://images.pexels.com/photos/30520758/pexels-photo-30520758.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'sky',
  },
  {
    slug: 'home-spaces',
    name: 'Home & Spaces',
    description: 'Minimal interiors, natural light, and rooms that breathe.',
    image: 'https://images.pexels.com/photos/6910692/pexels-photo-6910692.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'sand',
  },
  {
    slug: 'mindful-eating',
    name: 'Mindful Eating',
    description: 'Simple, nourishing food made with intention and seasonality.',
    image: 'https://images.pexels.com/photos/7656031/pexels-photo-7656031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'foam',
  },
  {
    slug: 'calm-travel',
    name: 'Calm Travel',
    description: 'Quiet escapes, coastal towns, and the art of unhurried wandering.',
    image: 'https://images.pexels.com/photos/14379473/pexels-photo-14379473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'sky',
  },
];

export const posts: Post[] = [
  {
    slug: 'the-art-of-doing-less',
    title: 'The Art of Doing Less',
    excerpt:
      'Why the most productive day might be the one with three things on it — and how to make space for what actually matters.',
    category: 'slow-living',
    author: 'Elena Marsh',
    date: 'October 21, 2026',
    readingTime: '5 min read',
    image: 'https://images.pexels.com/photos/2833563/pexels-photo-2833563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    featured: true,
    content: [
      'There is a quiet confidence in a short list. When you write down only three things, the day stops feeling like a race and starts feeling like a choice.',
      'For years I measured a good day by its density — how many tabs were open, how many messages were sent, how many tasks were crossed off. The days I remember most fondly, though, were never the full ones. They were the ones with enough space in them to notice things.',
      '## A shorter list is a kinder list',
      'The three-task list is not about doing less for its own sake. It is about honesty. When everything is a priority, nothing is. When you choose three things, you are forced to decide what actually moves your life forward today — and what was only there to make you feel busy.',
      'Try it for one week. Each morning, write three items on a single sticky note. Nothing else goes on the list. If something small and urgent appears, handle it — but it does not get written down, because it was not what the day was for.',
      '> You will be surprised how often the tasks you thought were urgent were really just loud.',
      '## What you gain from the gaps',
      'Space is not empty. Space is where ideas arrive, where rest happens, where you remember why you are doing any of this at all. A day with margins is a day you can actually inhabit instead of merely survive.',
      'The art of doing less is really the art of being present for more. Start tomorrow with a sticky note and see what a small, honest list makes room for.',
    ],
  },
  {
    slug: 'rooms-that-breathe',
    title: 'Rooms That Breathe',
    excerpt:
      'A small apartment, a few good materials, and a lot of natural light. Notes on building a space that calms you down when you walk in.',
    category: 'home-spaces',
    author: 'Jonas Reed',
    date: 'October 18, 2026',
    readingTime: '6 min read',
    image: 'https://images.pexels.com/photos/5793642/pexels-photo-5793642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'A room is not defined by what you put in it. A room is defined by what you leave out.',
      'When I moved into my first small apartment, I did what most people do: I filled it. A rug here, a shelf there, a chair that looked good in the shop but had nowhere to live. Within a month the space felt smaller than the empty version I had walked into.',
      '## Start with the light',
      'Before furniture, before color, before anything — study the light. Notice where it falls in the morning and where it goes in the late afternoon. Arrange the room around the light, not the other way around. A desk by a window is worth two desks anywhere else.',
      '## Choose materials that age well',
      'Wood, linen, stone, clay. These materials do not try to hide the fact that they are used. They get softer, richer, more themselves with time. Plastic and glass stay the same — which sounds nice until you realize they never become yours.',
      '## The rule of one surface',
      'In any room, keep at least one surface almost completely empty. A clear tabletop does work that no decoration can. It gives the eye a place to rest, and it gives you a place to set something down when you walk in the door.',
      '> The most luxurious thing a small room can offer is a place for your eyes to land that is not busy.',
      'A breathing room is not a finished room. It is a room that is still listening.',
    ],
  },
  {
    slug: 'a-bowl-of-quiet',
    title: 'A Bowl of Quiet',
    excerpt:
      'A simple morning porridge, eaten slowly, with nothing on but the window. A case for the most underrated meal of the day.',
    category: 'mindful-eating',
    author: 'Mara Lin',
    date: 'October 14, 2026',
    readingTime: '4 min read',
    image: 'https://images.pexels.com/photos/5591666/pexels-photo-5591666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'The best breakfast I have ever had took six minutes to make and twenty minutes to eat, and it was a bowl of oats with sliced banana and a spoonful of honey.',
      'I am not against elaborate food. I am for the quiet meal — the one you eat without a screen, without a plan, without rushing to the next thing. Most days, the quiet meal is breakfast.',
      '## The recipe is not the point',
      'You probably already know how to make porridge. The point is how you eat it. Sit down. Look out the window. Let it be warm enough that you have to blow on the first few spoonfuls. Notice that this is the only thing you are doing right now.',
      '## What slow eating actually changes',
      'When you eat without distraction, two things happen. First, you taste your food — which sounds obvious until you realize how rarely you actually do it. Second, you notice when you are full. These two pieces of information are the entire foundation of eating well, and neither of them arrives while you are reading your phone.',
      '> A meal eaten slowly is not wasted time. It is the day re-learning how to pay attention.',
      'Tomorrow morning, make something simple. Then give it the one thing it deserves: your full attention for fifteen minutes.',
    ],
  },
  {
    slug: 'the-coast-in-november',
    title: 'The Coast in November',
    excerpt:
      'A weekend in a seaside town with almost no plan — and the surprising relief of letting a place set the pace for you.',
    category: 'calm-travel',
    author: 'Elena Marsh',
    date: 'October 10, 2026',
    readingTime: '7 min read',
    image: 'https://images.pexels.com/photos/11399317/pexels-photo-11399317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'The coast is different in November. The crowds are gone, the light has gone soft and low, and the sea, no longer performing for summer, shows you what it is actually like.',
      'I went with no itinerary. I had a notebook, a book I had been meaning to finish, and a return ticket on Sunday afternoon. That was the whole plan, and it turned out to be more than enough.',
      '## Letting the place lead',
      'The first morning I woke up and walked to the water before deciding anything. The tide was out. I sat on the rocks for an hour and watched it come back in. By the time I got up, I knew what kind of day it was going to be: a slow one.',
      'When you arrive somewhere and immediately fill the hours, you are really just bringing your old pace with you and renaming it. The coast in November taught me to wait — to let the place suggest the rhythm instead of imposing my own.',
      '## Three small rules for an unhurried trip',
      '- Walk to the first thing. Do not drive.',
      '- Eat one meal a day somewhere with a window facing the water.',
      '- Leave one full afternoon blank. No plans, no reservations, no goal.',
      '> The best travel souvenir is a new sense of pace. Everything else you can buy.',
      'I came back tired in the way you are tired after a good rest — lighter, not heavier. The coast had given me nothing I could photograph, and everything I could use.',
    ],
  },
  {
    slug: 'the-empty-inbox-myth',
    title: 'The Empty Inbox Myth',
    excerpt:
      'Inbox zero is not a destination. It is a way of standing in the kitchen. A reframing for everyone who feels behind.',
    category: 'slow-living',
    author: 'Jonas Reed',
    date: 'October 6, 2026',
    readingTime: '5 min read',
    image: 'https://images.pexels.com/photos/16514409/pexels-photo-16514409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'We treat the inbox like a room that is supposed to be empty, and then we feel like failures when it is not. But a kitchen is never empty, and no one walks into a kitchen at dinnertime and feels personally attacked.',
      'The inbox is a kitchen. Things arrive, you deal with some of them, you put others away, and a few stay on the counter overnight. This is not a problem. This is just what a working kitchen looks like.',
      '## Replace “zero” with “clear”',
      'An inbox you have looked at and made decisions about is a clear inbox, even if it is not an empty one. Reply, archive, or defer — those are your only three tools, and they are enough for almost everything.',
      '## Two questions that end the spiral',
      'When you open the inbox, ask two things: Does this need a reply today? And if not, when? That is the whole system. The rest is execution, and execution is much easier once the decisions are made.',
      '> You do not need an empty inbox. You need a relationship with your inbox that does not make you dread opening it.',
      'A clear inbox is a practice, not a finish line. Some days it is empty, most days it is not, and both are fine.',
    ],
  },
  {
    slug: 'a-shelf-and-a-window',
    title: 'A Shelf and a Window',
    excerpt:
      'The two things every small bedroom actually needs, and how to arrange them so the room feels twice its size.',
    category: 'home-spaces',
    author: 'Mara Lin',
    date: 'October 2, 2026',
    readingTime: '4 min read',
    image: 'https://images.pexels.com/photos/6805422/pexels-photo-6805422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'A bedroom does not need much. It needs a place to sleep, a place to set down the things you are not using, and a way to let the outside in.',
      'After years of rearranging small rooms, I have arrived at a formula that almost always works: one shelf, one window, and nothing that blocks either.',
      '## The shelf: low, wide, and honest',
      'A low, wide shelf along one wall holds more than a tall narrow one and takes up less of your visual space. Keep the top almost empty — a book, a small plant, a stone from a beach — and the room immediately feels less cluttered.',
      '## The window: the cheapest upgrade',
      'Nothing makes a small room feel large like an unobstructed window. Pull the furniture back, hang the curtain wide, and let the glass be the main feature of the wall it sits on. You have just added square footage without moving anything.',
      '> In a small room, the window is doing more work than the furniture. Treat it like the most important piece you own.',
      'Two things, arranged with care, and the room you thought was too small turns out to be exactly the right size.',
    ],
  },
  {
    slug: 'seasonal-and-simple',
    title: 'Seasonal and Simple',
    excerpt:
      'Eating with the calendar is easier than it sounds — and the simplest way I know to make ordinary dinners taste better.',
    category: 'mindful-eating',
    author: 'Elena Marsh',
    date: 'September 28, 2026',
    readingTime: '6 min read',
    image: 'https://images.pexels.com/photos/7111468/pexels-photo-7111468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'There is a tomato in January and there is a tomato in August, and they are not the same food. The first is a shape. The second is a season you can eat.',
      'Eating seasonally sounds like a project, but it is really the opposite — it is what you do when you stop trying to have everything all the time.',
      '## Let the market decide',
      'The easiest version of seasonal eating is to go to the market, see what is there in piles, and cook that. Whatever is abundant is what is good right now. You do not need a chart.',
      '## What changes when you do',
      'Two things. First, food gets better, because you are eating things at the moment they are at their best. Second, your cooking gets simpler, because ingredients that are in season do not need to be rescued — a perfect tomato just wants to be sliced.',
      '> Seasonal eating is not about restriction. It is about meeting each ingredient at the moment it is actually ready for you.',
      'Start with one thing. This week, find whatever is in season where you live and let it be the center of one dinner. You will not need a recipe.',
    ],
  },
  {
    slug: 'the-train-instead-of-the-plane',
    title: 'The Train Instead of the Plane',
    excerpt:
      'Why the slow route to a nearby place sometimes gives you more of a trip than a fast flight to a far one.',
    category: 'calm-travel',
    author: 'Jonas Reed',
    date: 'September 24, 2026',
    readingTime: '5 min read',
    image: 'https://images.pexels.com/photos/764373/pexels-photo-764373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    content: [
      'A plane gets you there. A train makes the getting there part of the there.',
      'On my last trip I took a four-hour train instead of a one-hour flight, and I arrived more rested than I had left. The airport would have cost me the same time once you counted security, boarding, and the drive from the destination airport — and it would have left me tighter.',
      '## The journey as the first morning',
      'On a train, the trip begins the moment you sit down. You watch the city thin out, you read, you eat something from a paper bag, you doze. By the time you arrive, you have already downshifted. A plane gives you none of this — you spend the flight braced, and the first hour at the other end is recovery.',
      '## Three trips where the train wins',
      '- Anywhere within four hours by rail: the train is almost always the calmer choice.',
      '- Coastal routes where the window is half the point.',
      '- Trips where you want to arrive ready, not arrive recovering.',
      '> A good trip does not start when you arrive. It starts when you stop dreading the getting there.',
      'The slow route is not always the right one. But more often than we admit, the flight we book out of habit is the one we would not choose if we thought about what we actually wanted from the day.',
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter((p) => p.category === categorySlug);
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedPost(): Post {
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getRecentPosts(count: number): Post[] {
  return posts.slice(0, count);
}

export function getRelatedPosts(slug: string, count: number): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, count);
}

export function formatDate(iso: string): string {
  return iso;
}
