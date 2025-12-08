### Project preparation
### Add path
vite.config.ts
```
  resolve: {
    alias: {
      '@': '/src',
    },
  },
```
tsconfig.app.json
```
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
```

### Install Tailwind
[Installation guide](https://tailwindcss.com/docs/installation/using-vite)

### Install scss
```
npm install -D sass
```
### Install Zustand
```
npm install zustand
```
### Install react-hook-form
```
npm install react-hook-form
```
### Install react-router-dom
[Installation guide](https://reactrouter.com/tutorials/quickstart)
```
npm install react-router @react-router/node @react-router/serve react-dom

npm install -D @react-router/dev
```

