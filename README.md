# TypeScript + Biome Template

A modern TypeScript project template with Biome for lightning-fast linting and formatting.

## Features

- ✅ **TypeScript** - Strict type checking with modern ESNext features
- ✅ **Biome** - Fast, all-in-one toolchain for linting and formatting
- ✅ **ts-node** - Execute TypeScript directly
- ✅ **Pre-configured** - Sensible defaults, ready to use

## Getting Started

### Use This Template

1. Click "Use this template" button on GitHub
2. Clone your new repository
3. Install dependencies:

```bash
npm install
```

### Project Structure

```
.
├── src/              # Source files
├── dist/             # Build output
├── biome.json        # Biome configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project dependencies
```

## Available Scripts

- `npm run dev` - Run TypeScript files with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm run format` - Format code with Biome
- `npm run lint` - Lint code with Biome
- `npm run check` - Run Biome checks and apply fixes
- `npm run type-check` - Type check without emitting files

## Configuration

### TypeScript

The `tsconfig.json` is configured with:

- ESNext target and modules
- Bundler module resolution
- Strict type checking
- No emit mode (for development)

### Biome

The `biome.json` is configured with:

- Single quotes and minimal semicolons
- VCS integration enabled
- Auto import organization
- Format with errors enabled

## Development

Create your TypeScript files in the `src/` directory:

```typescript
// src/index.ts
console.log('Hello, TypeScript!')
```

Run with:

```bash
npm run dev
```

## License

MIT
