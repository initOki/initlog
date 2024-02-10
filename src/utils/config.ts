type SideBar = {
  text: string;
  link?: string;
  header?: boolean;
  children?: SideBar[];
};

export const SITE = {
  title: 'Seoltab Front End Docs',
  description: 'Seoltab Front End의 모든 것',
  defaultLanguage: 'ko_KR',
  github: 'jordienr',
};

export const OPEN_GRAPH = {
  image: {
    src: '',
    alt: '',
  },
  twitter: '',
};

export const SIDEBAR: SideBar[] = [
  { text: 'Introduction', link: '/onboarding/introduction' },

  { text: 'Repository', header: true },
  { text: 'seoltab.com', link: '/onboarding/seoltab' },
  { text: 'accounts.seoltab.com', link: '/onboarding/accounts' },
  { text: 'console.seoltab.com', link: '/onboarding/console' },
  { text: 'workspace.seoltab.com', link: '/onboarding/workspace' },
  { text: 'data.seoltab.com', link: '/onboarding/data' },
  { text: 'plot.seoltab.com', link: '/onboarding/plot' },
  { text: 'ticket.seoltab.com', link: '/onboarding/ticket' },
  { text: 'port.seoltab.com', link: '/onboarding/port' },
  { text: 'draw.seoltab.com', link: '/onboarding/draw' },
  { text: 'policies.seoltab.com', link: '/onboarding/policies' },
  { text: 'pay.seoltab.com', link: '/onboarding/pay' },
  { text: 'chat.seoltab.com', link: '/onboarding/chat' },
  { text: 'order.seoltab.com', link: '/onboarding/order' },
  { text: 'books.seoltab.com', link: '/onboarding/books' },

  { text: 'API', header: true },
  { text: 'Gateway', link: '/onboarding/gateway' },
  { text: 'Serverless', link: '/onboarding/serverless' },
  { text: 'onuii', link: '/onboarding/onuii' },

  { text: 'Etc', header: true },
  { text: 'Link', link: '/onboarding/link' },
];

export const DESIGN_SIDEBAR: SideBar[] = [
  { text: 'Introduction', link: '/design/introduction' },

  { text: 'Font', header: true },
  { text: 'Heading', link: '/design/font/heading' },
  { text: 'SubTitle', link: '/design/font/subtitle' },
  { text: 'Body', link: '/design/font/body' },
  { text: 'Button', link: '/design/font/button' },
  { text: 'Caption', link: '/design/font/caption' },
  { text: 'Fields', link: '/design/font/fields' },
  { text: 'Overline', link: '/design/font/overline' },

  { text: 'Color', header: true },
  { text: 'Primary', link: '/design/color/primary' },
  { text: 'Gray', link: '/design/color/gray' },
  { text: 'Semantic', link: '/design/color/semantic' },
  { text: 'Palette', link: '/design/color/palette' },

  { text: 'Grid', header: true },
  { text: 'Layout', link: '/design/grid/layout' },
];

export const BLOG_SIDEBAR: SideBar[] = [
  { text: 'React', header: true },
  // { text: 'Supabase + Astro 사용해보기', link: '/blog/5' },
  // { text: '정말 오랜만에 적어보는 Astro 업데이트', link: '/blog/4' },
  // { text: '최근 들어 Vim에 꽂혔다..', link: '/blog/3' },
  // { text: 'Astro에서 zustand 스토어 사용하기', link: '/blog/2' },
  // { text: 'Astro로 블로그 만든 후기', link: '/blog/1' },

  { text: 'Astro', header: true },
  { text: 'Supabase + Astro 사용해보기', link: '/blog/astro/5' },
  { text: '정말 오랜만에 적어보는 Astro 업데이트', link: '/blog/astro/4' },
  { text: '최근 들어 Vim에 꽂혔다..', link: '/blog/astro/3' },
  { text: 'Astro에서 zustand 스토어 사용하기', link: '/blog/astro/2' },
  { text: 'Astro로 블로그 만든 후기', link: '/blog/astro/1' },
];
