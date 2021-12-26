# Frontend scripts

Bootstrap your react project with just a couple of steps

1. Add appropriate `.npmrc` configuration (Replace `TOKEN` with your token)
```
//npm.pkg.github.com/:_authToken=TOKEN
@mentlee:registry=https://npm.pkg.github.com
```

2. Install dependencies:
```bash
npm i -D @mentlee/fes typescript @types/react @types/react-dom
```
```bash
npm i react react-dom
```

3. Create minimal required project file structure
```
.
├── src/
│   └── index.tsx
├── public/
│   └── index.html
├── .npmrc
├── tsconfig.json
└── package.json
```

4. Add scripts to your package.json
```
...
"scripts": {
  "start": "fes start ./src/index.tsx",
  "build": "fes build ./src/index.tsx"
},
...
```
