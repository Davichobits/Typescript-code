# Typescript

## 1. Introduction

Typescript is a superset of JavaScript that adds static types to the language.

## 2. Instalation

### Prerequisites:

- Node.js
- npm

### Instalation code:

```bash
npm i typescript -g
```

### Transpilation code:

```bash
tsc main.ts -w
```

## 3. Configuration

### Configuration code:

```bash
tsc --init
```

### Lines to change in tsconfig.json:

```json
"rootDir": "./src",
"outDir": "./build/js", 
// It doesn't generate the js from files from the rootDir
"include": [
    "./src"
  ],
// It doesn't generate the js from files with errors
"noEmitOnError": true,  
```

### Transpilation code with configuration:

```bash
tsc -w
```