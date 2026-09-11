# Naina Portfolio Frontend

A modern React + Redux portfolio frontend using dummy data.

## Stack

- React 19
- Vite
- Redux Toolkit
- React Redux
- React Router
- Lucide React

## Run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

## Folder structure

```text
naina-portfolio-frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   └── layout/
│   ├── data/
│   │   └── dummyData.js
│   ├── pages/
│   ├── store/
│   │   ├── index.js
│   │   ├── portfolioSlice.js
│   │   └── uiSlice.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Connecting the Express backend later

The Redux `loadPortfolio` thunk in:

```text
src/store/portfolioSlice.js
```

currently loads `src/data/dummyData.js`.

Later replace that thunk with an API request such as:

```js
const response = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/portfolio`
);

return await response.json();
```

Your backend exposes the portfolio endpoints, so the frontend can be switched from dummy data to MongoDB-backed data without changing the component structure.


## Styling

The portfolio UI has been migrated from custom/semantic CSS selectors to Tailwind utility classes. Tailwind is loaded through the official Play CDN in `index.html`, so the existing Vite setup does not require a CSS build pipeline change.
