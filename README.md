# App en Electron con React y TypeScript

## Crear un nuevo proyecto

```cmd
npm create @quick-start/electron
```

## Recomendados para IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ bun install
```

### Development

```bash
$ bun run dev
```

### Build

```bash
# Para windows
$ bun run build:win

# Para macOS
$ bun run build:mac

# para Linux
$ bun run build:linux
```

### Node 

```bash
$ node -v

v22.5.1
```


### Instalar Tailwind CSS

```bash
### https://tailwindcss.com/docs/guides/vite

$ bun install -D tailwindcss
$ bunx tailwindcss init

### Configurar tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}

### Generar index.css
src\renderer\src\assets\index.css

### Agregar el siguiente contenido
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### package.json
```json
{
  "name": "electron-app",
  "version": "1.0.0",
  "description": "App en Electron con React y TypeScript",
  "main": "./out/main/index.js",
  "author": "julio.corbaz@gmail.com",
  "homepage": "https://github.com/corbaz",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/corbaz/electron-app.git"
  },
  "license": "MIT",
  "scripts": {
    "clean-all": "rm -rf node_modules && rm bun.lockb && bun install",
    "format": "prettier --write .",
    "lint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix",
    "typecheck:node": "tsc --noEmit -p tsconfig.node.json --composite false",
    "typecheck:web": "tsc --noEmit -p tsconfig.web.json --composite false",
    "typecheck": "npm run typecheck:node && npm run typecheck:web",
    "start": "electron-vite preview",
    "dev": "electron-vite dev",
    "build": "npm run typecheck && electron-vite build",
    "postinstall": "electron-builder install-app-deps",
    "build:unpack": "npm run build && electron-builder --dir",
    "build:win": "npm run build && electron-builder --win",
    "build:mac": "electron-vite build && electron-builder --mac",
    "build:linux": "electron-vite build && electron-builder --linux"
  },
  "dependencies": {
    "@electron-toolkit/preload": "^3.0.1",
    "@electron-toolkit/utils": "^3.0.0"
  },
  "devDependencies": {
    "@electron-toolkit/eslint-config-prettier": "^2.0.0",
    "@electron-toolkit/eslint-config-ts": "^2.0.0",
    "@electron-toolkit/tsconfig": "^1.0.1",
    "@types/node": "^22.7.4",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "electron": "^32.1.2",
    "electron-builder": "^25.0.5",
    "electron-vite": "^2.3.0",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.37.0",
    "postcss": "^8.4.47",
    "prettier": "^3.3.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.2",
    "vite": "^5.4.8"
  }
}
```
