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

## 4. Basic Types

TS -> Statically typed language (types are checked at COMPILE time)
Js -> Dynamically typed language (types are checked at RUN time)

Typescript Benefits:

- Self-documenting
- Catch errors in development
- Great for teams

### Basic Types:
- string
- number
- boolean
- any

### Basic Types on functions:

```typescript
const sum = (a, b) => {
  return a + b; 
};
```
