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
      'Consulting case interview preparation videos from Ashwini Deshpande: frameworks, case math, exhibits, communication and more.',
  },
  title: 'Resources',
  // Each collection opens and closes when clicked. Videos are numbered "Video link 1, 2, 3..."
  // straight through the whole collection. Add a link to a list to add a video.
  videoLabel: 'Video link',
  collections: [
    {
      title: 'Consulting case interview preparation',
      sections: [
        {
          title: 'How many cases do you need to do to be “ready”?',
          videos: [
            'https://www.instagram.com/reel/DP4OQ4tjne_/?vrfl=MXMxNXJsb2lqenBrNw==',
            'https://www.instagram.com/reel/DQ0XhCHDBEL/?dlrf=MTlybjh1ZzFqZm82aA==',
          ],
        },
        {
          title: 'Reaction & clarifying questions',
          videos: [
            'https://www.instagram.com/reel/DPzDSJtDgEQ/?dlrf=d3gzaGcwamhpdnkw',
          ],
        },
        {
          title: '4 week plan to master casing',
          videos: [
            'https://www.instagram.com/reel/DRa9PdFjJ5S/?psln=ZDJvcHhkMjJyZHE3',
            'https://www.instagram.com/reel/DRdkVW4jI0R/?vrfl=MWF5YTltc3I0ZmNldg==',
          ],
        },
        {
          title: 'Feedback and getting better at casing',
          videos: [
            'https://www.instagram.com/reel/DP9QGIfDJ0Z/?rpxt=MWx0OWVqcHpoZGU0aQ==',
          ],
        },
        {
          title: 'Framework fundamentals',
          videos: [
            'https://www.instagram.com/reel/DQBDDR6DKBF/?rpxt=cWtvbzRoM2h3anZo',
            'https://www.instagram.com/reel/DQVrcfjjBcZ/?rpxt=MWFrcnZ6emM2bWRyaA==',
            'https://www.instagram.com/reel/DRw-oRoEloR/?vrfl=dnBzZDl3ZTd4cGJz',
          ],
        },
        {
          title: 'Framework examples',
          videos: [
            'https://www.instagram.com/reel/DROSvIzDHqV/?srtk=MTh6bWpteXZ0cjk2aw==',
            'https://www.instagram.com/reel/DRiwvWUEhCN/?obrf=MXRicWN2d2dzOXhqNg==',
          ],
        },
        {
          title: 'Chart clearing/ exhibits',
          videos: [
            'https://www.instagram.com/reel/DSC4Io1jItI/?mdxt=d25keHVucnY4YmM3',
          ],
        },
        {
          title: 'Case math',
          videos: [
            'https://www.instagram.com/reel/DR4hO26Eu43/?vrfl=bG1rYmRsN3huOWdy',
            'https://www.instagram.com/reel/DR9ogl2Enpk/?psln=ZTJsdXFndmlhY3R4',
            'https://www.instagram.com/reel/DSBl99yCHiO/?dlrf=bnlwaTJncGhibWRn',
          ],
        },
        {
          title: 'How to be more memorable while networking',
          videos: [
            'https://www.instagram.com/reel/DQE7cMBjh8K/?vrfl=MXJ6cWZ4MWpkb3g4Mg==',
          ],
        },
        {
          title: 'Nailing the recommendation',
          videos: [
            'https://www.instagram.com/reel/DQauJ8xkcwP/?xtok=MWdueXh2NDlhdTFwbA==',
          ],
        },
        {
          title: 'Communication during a case interview',
          videos: [
            'https://www.instagram.com/reel/DQo8mpkjlo4/?psln=MTJla2NnMXFiYTM1eA==',
            'https://www.instagram.com/reel/DQ8Jm2mDJqy/?vrfl=MmgxamE2aXZqZzBh',
            'https://www.instagram.com/reel/DRBaboxDGoI/?exln=MTJnb3pvbmNnZXVmMA==',
          ],
        },
        {
          title: '24h before your interview, do this',
          videos: [
            'https://www.instagram.com/reel/DS2tqelEuGN/?exln=MXh3bDNmODVwMXY2cQ==',
          ],
        },
        {
          title: 'Common mistakes',
          videos: [
            'https://www.instagram.com/reel/DSjRApTkty2/?cplk=MXAzbnkwa2pkaXAzMA==',
            'https://www.instagram.com/reel/DSodKLsEneT/?cplk=dXhncXI5aTEwd2xj',
          ],
        },
        {
          title: 'The perfect consulting resume',
          videos: [
            'https://www.instagram.com/reel/DQKHf_JDv2E/?obrf=ZDJqOGE2cnpla3A1',
          ],
        },
        {
          title: 'Extra tips',
          videos: [
            'https://www.instagram.com/reel/DQs5rIhDFGL/?exln=bG1mZnhqNjdzd3A=',
            'https://www.instagram.com/reel/DRf242UDERy/?exln=MTljdXJnNTBxYmhnMA==',
            'https://www.instagram.com/reel/DSxmxfZkoyE/?cplk=MTFtcTdocThjMW13dA==',
            'https://www.instagram.com/reel/DS0O6gwEtco/?obrf=MXZyMW1jdmFleHBpcA==',
            'https://www.instagram.com/p/DQerARujobv/?xtok=MXQwd3h3eThpa2Zraw==',
          ],
        },
        {
          title: 'Complete guide',
          videos: [
            'https://www.instagram.com/p/DSt5tNpkp9x/?cplk=cG84Mmx6M3B0b2li',
          ],
        },
      ],
    },
  ],
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
  // Early bird offer: shows the original price struck out next to the offer price.
  // To end the offer, delete this block and the offerPrice lines below.
  offer: { label: 'Early bird offer' },
  // Shown under the sessions for visitors whose device has no email app set up.
  emailNote: 'Or email me directly at',
  sessions: [
    {
      duration: '1 hour',
      title: 'Your “About Me” Session',
      description:
        'I help you refine your "about me" for interviews and all other purposes, so you can show up as your best self.',
      price: '$100',
      offerPrice: '$85',
      href: booking.aboutMe,
      theme: 'light',
    },
    {
      duration: '1.5 hours',
      title: 'Consulting Case and Feedback Session',
      description:
        'I give you a consulting case, followed by detailed feedback and next steps on how you can achieve perfection.',
      price: '$150',
      offerPrice: '$125',
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
  thanks: 'Thank you!',
  emailSubject: 'Paid partnership enquiry',
  icons: ['envelope', 'sparkle'],
  // Affiliate links: add more entries to this list to show more links.
  affiliateHeading: 'Affiliate links',
  affiliates: [
    {
      text: 'This platform helped me crack GMAT',
      href: 'https://targettestprep.referralrock.com/l/1ASHWINIDES71',
    },
  ],
};
