export const logos = {
  // Build Tools
  webpack:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  babel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg",

  // Frameworks
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  nuxtjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",

  // Libraries
  vuex: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  vueRouter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  reactRouter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  axios:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",

  // Style
  tailwindcss:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  materialui:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",

  // Runtime
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  bun: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",

  // Backend Frameworks
  symfony:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  nestjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",

  // WebSocket
  socketio:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",

  // ORM/ODM
  mongoose:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
  prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",

  // SQL
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  mysql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

  // Database
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

  // DevOps
  nginx:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  redis:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  pm2: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/pm2-icon-de2tnxlx7mpm39v66kkhc9.png/pm2-icon-j1kc5wcz2f8itsbu1k1ey.png?_a=DAJFJtWIZAAC",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  circleci:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  dockerSwarm:
    "https://www.syloe.com/wp-content/uploads/2019/11/logo-docker-swarm-300x296.png",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  cloudflare:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  fastly:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastly/fastly-original.svg",

  // Database
  supabase:
    "https://storage.googleapis.com/replit/images/1655511566644_75f953761a0bf617896e894f7ea5b3a6.png",
  firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
};

export const getSkillCategories = (t: (key: string) => string) => [
  {
    title: "frontend",
    sections: [
      {
        title: "buildTools",
        technologies: [
          { name: "Webpack", logoUrl: logos.webpack },
          { name: "Vite", logoUrl: logos.vite },
          { name: "Babel", logoUrl: logos.babel },
        ],
      },
      {
        title: "frameworks",
        technologies: [
          { name: "Vue", logoUrl: logos.vue },
          { name: "Next.js", logoUrl: logos.nextjs },
          { name: "Nuxt.js", logoUrl: logos.nuxtjs },
        ],
      },
      {
        title: "libraries",
        technologies: [
          { name: "Redux", logoUrl: logos.redux },
          { name: "React", logoUrl: logos.reactRouter },
          { name: "Axios", logoUrl: logos.axios },
        ],
      },
      {
        title: "style",
        technologies: [
          { name: "Tailwind CSS", logoUrl: logos.tailwindcss },
          { name: "Material UI", logoUrl: logos.materialui },
          { name: "SASS", logoUrl: logos.sass },
        ],
      },
    ],
  },
  {
    title: "backend",
    sections: [
      {
        title: "runtime",
        technologies: [
          { name: "Node.js", logoUrl: logos.nodejs },
          { name: "Bun", logoUrl: logos.bun },
        ],
      },
      {
        title: "frameworks",
        technologies: [
          { name: "Symfony", logoUrl: logos.symfony },
          { name: "Express.js", logoUrl: logos.express },
          { name: "Nest.js", logoUrl: logos.nestjs },
        ],
      },
      {
        title: "websocket",
        technologies: [{ name: "Socket.io", logoUrl: logos.socketio }],
      },
      {
        title: "orm",
        technologies: [
          { name: "Mongoose", logoUrl: logos.mongoose },
          { name: "Prisma", logoUrl: logos.prisma },
        ],
      },
    ],
  },
  {
    title: "database",
    sections: [
      {
        title: "SQL",
        technologies: [
          { name: "PostgreSQL", logoUrl: logos.postgresql },
          { name: "MySQL", logoUrl: logos.mysql },
          { name: "Supabase", logoUrl: logos.supabase },
        ],
      },
      {
        title: "NoSQL",
        technologies: [
          { name: "MongoDB", logoUrl: logos.mongodb },
          { name: "Firebase", logoUrl: logos.firebase },
        ],
      },
    ],
  },
  {
    title: "devops",
    sections: [
      {
        title: "tools",
        technologies: [
          { name: "Nginx", logoUrl: logos.nginx },
          { name: "Redis", logoUrl: logos.redis },
          { name: "PM2", logoUrl: logos.pm2 },
        ],
      },
      {
        title: "ci",
        technologies: [
          { name: "Jenkins", logoUrl: logos.jenkins },
          { name: "CircleCI", logoUrl: logos.circleci },
        ],
      },
      {
        title: "containerization",
        technologies: [{ name: "Docker", logoUrl: logos.docker }],
      },
      {
        title: "orchestration",
        technologies: [
          { name: "Docker Swarm", logoUrl: logos.dockerSwarm },
          { name: "Kubernetes", logoUrl: logos.kubernetes },
        ],
      },
    ],
  },
];
