# Frontend scripts

Bootstrap your react project with just couple of steps

1. Add appropriate `.npmrc` configuration (Replace `TOKEN` with your token)
```
//npm.pkg.github.com/:_authToken=TOKEN
@mentle-co:registry=https://npm.pkg.github.com
```

2. Install dependencies:
```bash
npm i -D @mentle-co/scripts typescript @types/react @types/react-dom
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
  "start": "scripts start ./src/index.tsx",
  "build": "scripts build ./src/index.tsx"
},
...
```
