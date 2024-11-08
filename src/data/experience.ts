import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "2024 — Presente",
    title: "Desenvolvedor Front-End ",
    company: "Freelancer",
    companyUrl: "https://www.mrbexpress.com",
    description:
      "Atuo como freelancer, oferecendo serviços de desenvolvimento de landing pages (LP), suporte técnico, otimização de performance de sites, e consultoria em melhorias de usabilidade e design responsivo. Utilizo JavaScript, React, Next.js, Tailwind CSS e outras tecnologias modernas para entregar soluções ágeis e personalizadas. Especializado em melhorar a performance de sites, desde SEO até carregamento rápido de páginas, garantindo uma experiência fluida e intuitiva para o usuário final.",
    technologies: [
      "Desenvolvimento Front-End",
      "Landing Pages",
      "Otimização de Sites",
      "SEO (Search Engine Optimization)"
    ],

    logo: "/logos/dev.webp",
  },

  {
    dates: "2023",
    title: "Assistente de Rastreamento",
    company: "MRB Express",
    companyUrl: "https://www.mrbexpress.com.br",  // Caso tenha o link do site da empresa
    description:
      "Atuei no monitoramento e rastreamento de cargas aéreas e rodoviárias, realizando solicitações de coleta, envio de atualizações de última milha e manutenção das informações. Contribuí para a precisão do rastreamento de mercadorias e otimização do processo de logística, impactando diretamente na melhoria do atendimento ao cliente e na precisão das entregas.",
    technologies: ["Gestão de Logística", "Rastreamento de Cargas", "Atendimento ao Cliente"],
    logo: "/logos/mrb.jpg",  // Caso tenha o logo da empresa
  },
  {
    dates: "2023",
    title: "Assistente Administrativo",
    company: "CCAA",
    companyUrl: "https://www.ccaa.com.br",
    description:
      "Atuei na gestão administrativa de matrículas e atividades educacionais, com foco em organização e eficiência. Realizei rematrículas, novas matrículas, administração de provas presenciais e online, e usei o sistema Nassoft para controle de notas e registros. Contribuí para o bom andamento das operações e para a organização dos processos internos, proporcionando suporte a alunos e equipe.",
    technologies: ["Gestão Educacional", "Administração de Provas", "Sistema Nassoft"],
    logo: "/logos/ccaa.jpg",
  },
  {
    dates: "2017 — 2022",
    title: "Assistente de Loja",
    company: "Lojas Renner",
    companyUrl: "https://www.lojasrenner.com.br",
    description:
      "Responsável pela análise de vendas e otimização de estoque, implementando estratégias para melhorar o desempenho comercial e aumentar a eficiência das operações da loja. Realizei previsões de vendas, gerenciei inventário e implementei estratégias de merchandising visual. Também treinei equipes e ajudei a melhorar o desempenho geral do departamento.",
    technologies: ["Gestão de Vendas", "Otimização de Inventário", "Treinamento de Equipe"],
    logo: "/logos/renner.webp",
  },
  {
    dates: "2015 — 2016",
    title: "Aprendiz de BT Call Center",
    company: "Brasil Telecom (OI)",
    companyUrl: "https://www.brasiltelecom.com.br",
    description:
      "Desempenhei funções no suporte técnico de clientes OI, ajudando na resolução de problemas e implementando mudanças de planos. Também forneci suporte para questões relacionadas à rede e modens, e realizei alterações de endereço. Meu trabalho contribuiu para melhorar a eficiência no atendimento e a satisfação dos clientes.",
    technologies: ["Suporte Técnico", "Atendimento ao Cliente", "Resolução de Problemas"],
    logo: "/logos/bt.jpg",
  }
];

export const ABOUT = {
  name: "Thomas Eduardo R. Nascimento",
  location: "Av. Lins de Vasconcelos, São Paulo, SP",
  contact: {
    phone: "+55 (19) 9904-2072",
    email: "developer.thomas@outlook.com.br",
    linkedin: "https://www.linkedin.com/in/thomas-ed",
    portfolio: "https://www.thomasnascimento.dev",
    github: "https://github.com/thomasnascimento",
  },
  professionalProfile:
    "Sou um desenvolvedor front-end com foco em criar experiências excepcionais na web. Minha especialização é em JavaScript e suas bibliotecas, como React e Next.js, além de trabalhar com Tailwind CSS e TypeScript. Também tenho experiência no desenvolvimento backend para implementações de APIs.",
  technicalSkills: {
    languages: ["HTML", "CSS (SASS, Flexbox)", "JavaScript (React, TypeScript)"],
    tools: ["Git", "Figma", "Gimp", "Trello", "Tailwind CSS"],
    frameworks: ["Bootstrap", "REST API", "Node.js", "React", "Next.js"],
    others: ["UI Design", "Unit Testing", "SQLite", "Prisma ORM", "Metodologias Ágeis"],
  },
  recentProjects: [
    {
      title: "Aplicativo de Criptomoedas",
      description:
        "Este projeto é uma aplicação de criptomoedas que permite aos usuários visualizar informações sobre diferentes criptomoedas, incluindo preços, capitalização de mercado e gráficos históricos.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      website: "https://cryptocurrency-app.com",
      repository: "https://github.com/thomasnascimento/cryptocurrency-app",
    },
    {
      title: "Gerenciamento de Faturas",
      description:
        "Projeto de gerenciamento de faturas, uma aplicação web projetada para gerar e gerenciar faturas de forma eficiente. Permite visualizar, adicionar e editar produtos, imprimir ou gerar PDFs das faturas.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      website: "https://invoice-management.com",
      repository: "https://github.com/thomasnascimento/invoice-management",
    },
    {
      title: "Insights do Cliente",
      description:
        "Uma ferramenta inovadora projetada para ajudar a rastrear e analisar as interações recentes com os clientes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      website: "https://customer-insights.com",
      repository: "https://github.com/thomasnascimento/customer-insights",
    },
    {
      title: "Fome Burger",
      description:
        "Fome Burger é uma aplicação de menu online projetada para melhorar a experiência em hamburguerias. Usando design responsivo e uma interface amigável, a plataforma permite aos usuários visualizar e selecionar itens do menu.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      website: "https://fomeburger.com",
      repository: "https://github.com/thomasnascimento/fome-burger",
    },
    {
      title: "Bluefit Gym",
      description:
        "Bluefit é uma plataforma voltada para quem deseja melhorar sua saúde e bem-estar. O projeto inclui diversas funcionalidades, como um calculador de IMC, formulários de contato e blogs de fitness.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      website: "https://bluefitgym.com",
      repository: "https://github.com/thomasnascimento/bluefit-gym",
    },
    {
      title: "Creative Recipes",
      description:
        "Creative Recipes é uma plataforma dinâmica e intuitiva, desenvolvida com React e Vite, projetada para quem busca inspiração para suas próximas receitas.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      website: "https://creativerecipes.com",
      repository: "https://github.com/thomasnascimento/creative-recipes",
    },
  ],
  education: [
    {
      title: "DevOps - Desenvolvimento de Operações - EAD",
      institution: "Faculdade Anhanguera",
      period: "2023 - 2026",
    },
    {
      title: "Computação em Nuvem - EAD",
      institution: "AWS ReStart - Curso Técnico",
      period: "2023 - 2024",
    },
  ],
};
