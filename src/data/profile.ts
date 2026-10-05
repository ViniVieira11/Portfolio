export interface ContactInfo {
  phone: string
  whatsappLink: string
  email: string
  linkedin: string
  linkedinLabel: string
  location: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  description: string
  current?: boolean
}

export interface CertificationItem {
  name: string
  institution: string
  year: string
}

export interface EducationItem {
  course: string
  institution: string
  period: string
}

export interface ProjectImage {
  src: string
  alt: string
  label: string
}

export interface ProjectItem {
  title: string
  tool: string
  summary: string
  bullets: string[]
  tags: string[]
  images?: ProjectImage[]
  links?: { href: string; label: string }[]
  kind: 'dashboard' | 'workflow'
}

export const profile = {
  name: 'Vinicius Vieira',
  age: 27,
  headline: 'Análise de Dados & Business Intelligence',
  tagline:
    'Transformo dados soltos em indicadores, dashboards e decisões — com Excel Avançado, Power BI, SQL e uma boa dose de curiosidade.',
  about:
    'Comunicativo, curioso e organizado, com facilidade para aprender novas ferramentas e compreender processos. Busco transformar informações em análises claras e úteis para apoiar decisões e identificar oportunidades de melhoria. Atualmente cursando Engenharia de Software, unindo a visão de negócio de BI com a construção de produtos de dados.',
  objective:
    'Atuar nas áreas de Análise de Dados, Business Intelligence (BI) ou Planejamento, aplicando conhecimentos em Excel Avançado, Power BI, SQL/MySQL e análise de dados para transformar informações em indicadores, insights e melhorias de processos.',
}

export const contact: ContactInfo = {
  phone: '(14) 99905-4358',
  whatsappLink: 'https://wa.me/5514999054358',
  email: 'vieiraoficiall1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vinicius-vieira-508aa9189/',
  linkedinLabel: 'linkedin.com/in/vinicius-vieira-508aa9189',
  location: 'São Paulo, SP',
}

export const skills: SkillGroup[] = [
  {
    category: 'Dados & BI',
    items: [
      'Excel Avançado',
      'Power BI',
      'SQL / MySQL',
      'Business Intelligence',
      'Dashboards',
      'Indicadores',
      'Relatórios gerenciais',
      'Modelagem e integração de dados',
      'Big Data & Analytics',
      'Google Cloud',
    ],
  },
  {
    category: 'Front-end & Design',
    items: ['HTML', 'CSS', 'JavaScript', 'UX/UI Design', 'Figma', 'Photoshop', 'Canva'],
  },
  {
    category: 'Comportamental',
    items: ['Organização', 'Comunicação', 'Resolução de problemas'],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Analista de Atendimento ao Cliente',
    company: 'YH Brasil',
    period: 'jan/2025 — atual',
    location: 'São Paulo/SP',
    description:
      'Atendimento ao cliente, resolução de demandas, acompanhamento de processos e suporte, com foco em comunicação, organização e relacionamento interpessoal.',
    current: true,
  },
  {
    role: 'Auxiliar de Produção',
    company: 'Cacau Show',
    period: 'ago/2021 — abr/2022',
    location: 'Itapevi/SP',
    description:
      'Atuação em processos produtivos, seguindo procedimentos, padrões de qualidade e organização, com foco em produtividade e trabalho em equipe.',
  },
  {
    role: 'Auxiliar de Loja',
    company: 'Riachuelo',
    period: 'jun/2018 — dez/2018',
    location: 'Osasco/SP',
    description:
      'Atendimento ao cliente, organização da loja, reposição de produtos e apoio às atividades operacionais.',
  },
]

export const education: EducationItem[] = [
  {
    course: 'Engenharia de Software',
    institution: 'Universidade Cruzeiro do Sul',
    period: '2025 — 2029',
  },
]

export const certifications: CertificationItem[] = [
  { name: 'Business Intelligence (BI)', institution: 'FIAP', year: '2024' },
  { name: 'Big Data & Analytics', institution: 'FIAP', year: '2024' },
  { name: 'Power BI', institution: 'SENAI Jandira', year: '2024' },
  { name: 'Excel Avançado', institution: 'SENAI', year: '2024' },
  { name: 'Google Cloud Engineer', institution: 'SENAI Marília', year: '2023' },
  { name: 'Google Cloud Foundations', institution: 'SENAI Marília', year: '2023' },
  { name: 'Web Designer / Front End', institution: 'SENAI São Paulo', year: '2024' },
  { name: 'Front End & UX/UI Design', institution: 'Origamid', year: '2024' },
  { name: 'HTML e CSS', institution: 'Origamid', year: '2024' },
  { name: 'UI Design para Iniciantes', institution: 'Origamid', year: '2024' },
  { name: 'Gestor de Tráfego Pago e Mídia', institution: 'Udemy', year: '2025' },
]

export const projects: ProjectItem[] = [
  {
    title: 'Relatório de Vendas — Magalu',
    tool: 'Power BI',
    kind: 'dashboard',
    summary:
      'Dashboard completo de vendas com faturamento, lucro, margem, análise hierárquica por país/loja, motivos de devolução e ranking de produtos.',
    bullets: [
      'KPIs de faturamento (R$ 1,31 Bi), lucro (R$ 920,33 Mi) e margem (70,4%) com filtros por ano, país e loja.',
      'Drill-down hierárquico de faturamento por Ano → País → Loja → Gerente.',
      'Análise de devoluções: 88,51% dos casos por produto com defeito, com impacto de R$ 32,35 Mi no resultado.',
      'Ranking de produtos mais vendidos e tabela de prejuízo percentual por item.',
    ],
    tags: ['Power BI', 'DAX', 'Modelagem de dados', 'Storytelling visual'],
    images: [
      { src: 'magalu-relatorio.png', alt: 'Visão geral do relatório de vendas', label: 'Relatório' },
      { src: 'magalu-hierarquica.png', alt: 'Análise hierárquica de faturamento', label: 'Análise Hierárquica' },
      { src: 'magalu-devolucoes.png', alt: 'Painel de motivos de devolução', label: 'Devoluções' },
      { src: 'magalu-produtos.png', alt: 'Ranking de produtos mais vendidos', label: 'Produtos' },
    ],
  },
  {
    title: 'Dashboard de Vendas Web',
    tool: 'HTML + JavaScript',
    kind: 'dashboard',
    summary:
      'Dashboard web interativo que lê uma planilha Excel direto no navegador e mostra os indicadores de vendas com gráficos animados — 8.000 vendas, 10 filiais, 150 produtos e 1.000 clientes.',
    bullets: [
      'KPIs de faturamento líquido (R$ 57,45 Mi), bruto (R$ 60,51 Mi), descontos, ticket médio, itens vendidos e estoque.',
      'Filtros por filial, categoria e fornecedor; clicar numa barra, fatia ou linha da tabela também filtra todos os gráficos.',
      'Curva ABC de produtos, top produtos e clientes, estoque crítico e resumo por filial em tabela ordenável.',
      'Leitura do .xlsx no navegador com SheetJS, gráficos em Chart.js e layout responsivo, sem framework.',
    ],
    tags: ['JavaScript', 'Chart.js', 'SheetJS', 'Excel', 'Curva ABC'],
    images: [
      { src: 'vendas-visao-geral.png', alt: 'Visão geral do dashboard de vendas com KPIs e faturamento por filial', label: 'Visão geral' },
      { src: 'vendas-categorias.png', alt: 'Faturamento por categoria, por fornecedor e top produtos', label: 'Categorias' },
      { src: 'vendas-curva-abc.png', alt: 'Curva ABC de produtos e estoque crítico', label: 'Curva ABC' },
      { src: 'vendas-tabela.png', alt: 'Top clientes e resumo por filial', label: 'Filiais' },
    ],
    links: [
      { href: 'https://vinivieira11.github.io/grafico_com_ia/', label: 'Abrir dashboard ao vivo' },
      { href: 'https://github.com/ViniVieira11/grafico_com_ia', label: 'Ver código no GitHub' },
    ],
  },
  {
    title: 'Central de Indicadores — Suporte TI',
    tool: 'KNIME + Excel',
    kind: 'workflow',
    summary:
      'Pipeline de análise de 600 chamados de suporte técnico: leitura da base em Excel, cálculo de indicadores e workflow visual no KNIME.',
    bullets: [
      'Taxa de encerramento, satisfação média e tempo de resolução calculados por prioridade, categoria e técnico.',
      'Workflow no KNIME lendo a planilha e gerando gráficos de status, categoria, departamento e canal de abertura.',
      'Identificação de oportunidades: categoria com maior volume e menor satisfação, técnico destaque da equipe.',
    ],
    tags: ['KNIME', 'ETL', 'Indicadores de SLA', 'Excel'],
  },
]
