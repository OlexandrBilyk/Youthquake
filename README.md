# EcoConstructor Landing — Прототип для мікротестування

Односторінковий лендинг шкільного еко-конструктора (STEM + перероблений пластик).

## Стек

- React 18 + TypeScript
- Vite
- Redux Toolkit (стан голосів)
- localStorage (персистентність)
- Sass Modules (стилі)
- Recharts (графіки: bar, pie, line)

## Як запустити

```bash
cd eco-constructor-landing
npm install
npm run dev
```

Відкрийте http://localhost:5173

## Що є на сторінці

1. **Hero** — головний меседж «Зі сміття — в енергію»
2. **Features** — 4 ключові переваги
3. **How it works** — 4 кроки використання
4. **Sustainability** — акцент на екологічний і етичний вимір
5. **Voting** — форма мікротестування (інтерес + роль + вплив екології + коментар)
6. **Results** — аналітика:
   - загальна статистика
   - bar chart розподілу інтересу
   - pie chart ролей
   - **line chart** (крива середнього впливу екологічного фактору)

## Дані

Усі голоси зберігаються в `localStorage` під ключем `eco_votes`.  
Після перезавантаження сторінки історія залишається.  
Кнопка «Очистити всі відгуки» скидає дані.

## Структура

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Sustainability.tsx
│   ├── VotingSection.tsx
│   ├── ResultsChart.tsx
│   └── Footer.tsx
├── store/
│   ├── index.ts
│   └── votesSlice.ts
├── styles/
│   ├── global.scss
│   ├── App.module.scss
│   ├── Hero.module.scss
│   ├── ... (module styles)
├── App.tsx
└── main.tsx
```
