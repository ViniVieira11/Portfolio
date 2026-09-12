# Portfólio — Vinicius Vieira

Portfólio pessoal em React + TypeScript + Vite, focado em Análise de Dados e BI.

## Como rodar

Este computador ainda não tem o Node.js instalado. Passos:

1. Baixe e instale o Node.js LTS em https://nodejs.org (marque a opção de adicionar ao PATH durante a instalação).
2. Feche e reabra o terminal.
3. Nesta pasta, rode:

```
npm install
npm run dev
```

4. Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

Para gerar a versão de produção (arquivos estáticos prontos para publicar, ex: Vercel, Netlify ou GitHub Pages):

```
npm run build
npm run preview
```

## Estrutura

- `src/data/profile.ts` — todo o conteúdo (experiência, skills, certificações, projetos). Edite aqui para atualizar o site.
- `src/components/` — um componente por seção da página.
- `src/assets/projects/` — imagens dos projetos (prints do dashboard Power BI).
