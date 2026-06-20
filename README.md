# 🏷️ CalcGetNinjas

![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite)
![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?style=for-the-badge&logo=vitest)
![Docker](https://img.shields.io/badge/Docker-20-2496ED?style=for-the-badge&logo=docker)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-2088FF?style=for-the-badge&logo=github-pages)

> Calculadora de custos para freelancers da plataforma GetNinjas. Permite calcular o custo por moeda e o custo de atividades em reais (BRL) com atualização em tempo real.

## 🎯 Sobre o Projeto

Este projeto surgiu da necessidade de freelancers da plataforma GetNinjas entenderem o custo real das moedas adquiridas e o impacto financeiro das atividades propostas. A calculadora converte o valor pago em reais em custo por moeda e, a partir do valor do serviço em moedas, calcula o custo da atividade em reais — tudo em tempo real, sem necessidade de backend.

---

## 🚀 Instalação

### Instale as dependências

```bash
docker compose run --rm app npm install
```

### Execute a aplicação

```bash
docker compose up -d app
```

Acesse em: `http://localhost:5173`

### Comandos úteis

```bash
# Desenvolvimento
docker compose run --rm app npm run dev

# Testes
docker compose run --rm app npm run test

# Build de produção
docker compose run --rm app npm run build
```

---

## 📁 Estrutura do Projeto

```shell
CalcGetNinjas/
├── src/
│   ├── components/
│   │   ├── CostCalculator.vue   # Componente principal
│   │   ├── InputField.vue       # Input reutilizável
│   │   └── ResultDisplay.vue    # Resultado read-only
│   ├── composables/
│   │   ├── useCalculations.ts   # Lógica de cálculo
│   │   └── useFormat.ts         # Formatação BRL
│   ├── types/
│   │   └── calculator.ts        # Interfaces TypeScript
│   ├── constants/
│   │   └── theme.css            # Cores do tema
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── tests/
│   ├── components/              # Testes de componente
│   └── composables/             # Testes de cálculo
├── specs/                       # Especificações (Spec-Driven Dev)
├── .specify/                    # Configuração Spec Kit
├── .github/workflows/deploy.yml # Pipeline GitHub Pages
├── public/
│   ├── logo.png
│   └── favicon.svg
├── docker-compose.yml
└── README.md
```

---

## 🧪 Testes

O projeto segue TDD (Test-Driven Development). Todos os testes usam Vitest.

```bash
# Executar todos os testes
docker compose run --rm app npm run test

# Modo watch (desenvolvimento)
docker compose run --rm app npx vitest
```

---

## 🌐 Deploy

O deploy é automático via GitHub Actions. Ao fazer merge na branch `main`:

1. O pipeline executa `npm run build`
2. O conteúdo de `dist/` é publicado no GitHub Pages

URL: `https://wagner-sousa.github.io/CalcGetNinjas/`
