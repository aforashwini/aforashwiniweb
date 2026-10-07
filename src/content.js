// All site copy and links live here. Edit this file to change words, prices or URLs.

export const site = {
  name: 'Ashwini Deshpande',
  domain: 'aforashwini.com',
};

export const social = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/aforashwini/' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@aforashwini' },
];

// "Book this session" opens the visitor's email app with a pre-filled draft.
export const bookingEmail = 'biz@aforashwini.com';

const mailto = (session) =>
  `mailto:${bookingEmail}?subject=${encodeURIComponent(`Booking request: ${session}`)}&body=${encodeURIComponent(
    `Hi Ashwini,\n\nI'm interested in booking your ${session}. Please let me know your availability and next steps.\n\nThank you!`
  )}`;

export const booking = {
  aboutMe: mailto('“About Me” Session'),
  consultingCase: mailto('Consulting Case and Feedback Session'),
};

export const tabs = [
  { id: 'about', label: 'About Me', href: '/' },
  { id: 'resources', label: 'Resources', href: '/resources/' },
  { id: 'events', label: 'Events', href: '/events/' },
  { id: 'one-to-one', label: '1:1 With Me', href: '/one-to-one/' },
  { id: 'partnerships', label: 'Partnerships', href: '/partnerships/' },
];

export const about = {
  meta: {
    title: 'Ashwini Deshpande | About Me',
    description:
      'Ashwini Deshpande: fashion designer turned Meta designer turned Kellogg MBA and management consultant in New York City. Tips on public speaking, MBA, consulting and career pivots.',
  },
  title: 'About Me',
  photoAlt: 'Portrait of Ashwini Deshpande',
  quote: '“I want a BIG life.”',
  quoteCredit: 'The Marvelous Mrs. Maisel, my favorite show ever!',
  lead:
    'Those four words sum me up. I have big dreams, and I make the difficult decisions and build the habits those dreams require. When I want something, I go and get it. The only thing I love as much as chasing my own dreams audaciously is watching other people, especially women, do the same.',
  body: [
    "Hi, I'm Ashwini Deshpande, and wanting a big life has shaped every pivot I've made. I started out as a fashion designer in London, went on to design clothes for avatars in the metaverse at Meta, and recently graduated from Kellogg with an MBA. Today I'm a management consultant in New York City, still chasing the next dream while staying true to who I am and staying happy and healthy.",
    "Along the way, I've learned a lot, and I share it the honest way: the long hours, the leaps, the lessons, and the practical steps behind each change. If there's one thing I'm incredible at, it's public speaking, and I love breaking down exactly how I do it so you can too.",
    "So whether you're after a peek into life in the Big Apple as I juggle a demanding corporate job and make room to live and grow outside of it, my tips and tricks for speaking and interviewing with confidence, or actionable advice on breaking into MBA programs, consulting and career pivots, you're in the right place.",
  ],
  // The closing line is split so "break every rule" can be highlighted.
  closing: {
    before: "Let's go on this journey together and ",
    highlight: 'break every rule',
    after: ' there is.',
  },
};

export const resources = {
  meta: {
    title: 'Resources | Ashwini Deshpande',
    description:
      'Coming soon: consulting interview prep videos, public speaking tips and more from Ashwini Deshpande.',
  },
  title: 'Resources',
  badge: 'Coming soon',
  text: 'Consulting interview prep videos, public speaking tips and more.',
  icons: ['play', 'book'],
};

export const events = {
  meta: {
    title: 'Events | Ashwini Deshpande',
    description:
      'Coming soon: upcoming talks, workshops and meetups with Ashwini Deshpande.',
  },
  title: 'Events',
  badge: 'Coming soon',
  text: 'Upcoming talks, workshops and meetups will be listed here.',
  icons: ['calendar', 'pin'],
};

export const oneToOne = {
  meta: {
    title: 'Work With Me 1:1 | Ashwini Deshpande',
    description:
      'Book a 1:1 session with Ashwini Deshpande: refine your "about me" or practise a consulting case with detailed feedback.',
  },
  title: 'Work With Me 1:1',
  buttonLabel: 'Book this session',
  // Shown under the sessions for visitors whose device has no email app set up.
  emailNote: 'Or email me directly at',
  sessions: [
    {
      duration: '1 hour',
      title: 'Your “About Me” Session',
      description:
        'I help you refine your "about me" for interviews and all other purposes, so you can show up as your best self.',
      price: '$100',
      href: booking.aboutMe,
      theme: 'light',
    },
    {
      duration: '1.5 hours',
      title: 'Consulting Case and Feedback Session',
      description:
        'I give you a consulting case, followed by detailed feedback and next steps on how you can achieve perfection.',
      price: '$150',
      href: booking.consultingCase,
      theme: 'dark',
    },
  ],
};

export const notFound = {
  meta: {
    title: 'Page not found | Ashwini Deshpande',
    description: 'This page does not exist.',
  },
  title: 'Page not found',
  text: "This page doesn't exist. Head back to",
  linkLabel: 'About Me',
};

export const partnerships = {
  meta: {
    title: 'Partnerships | Ashwini Deshpande',
    description: 'For all paid partnerships with Ashwini Deshpande, contact biz@aforashwini.com.',
  },
  title: 'Partnerships',
  text: 'For all paid partnerships, please contact',
  emailSubject: 'Paid partnership enquiry',
  icons: ['envelope', 'sparkle'],
};
