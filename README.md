# TypeScript + Biome Template

A modern TypeScript project template with Biome for lightning-fast linting and formatting, plus Husky and lint-staged for automated code quality checks.

## Features

- ✅ **TypeScript** - Strict type checking with modern ESNext features
- ✅ **Biome** - Fast, all-in-one toolchain for linting and formatting
- ✅ **Husky** - Git hooks for automated quality checks
- ✅ **lint-staged** - Run linters on staged files before commit
- ✅ **GitHub Actions** - Automated code quality workflow on push/PR
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

- `npm run build` - Compile TypeScript to JavaScript
- `npm run type-check` - Type check without emitting files
- `npm run pre-commit` - Run lint-staged on staged files
- `npm run check` - Run Biome checks with error-on-warnings
- `npm run trigger-ci` - Trigger CI workflows with an empty commit

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

### Git Hooks

Pre-commit hooks are configured to:

- Run Biome checks on staged files
- Fail on warnings (`--error-on-warnings`)
- Auto-format code before committing
- Ensure code quality standards

### CI/CD

GitHub Actions workflow (`.github/workflows/core-code-quality.yml`) runs on:

- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

The workflow performs:

- Biome linting and formatting checks
- Automated code quality validation
- Results summary in GitHub Actions

## Development

Create your TypeScript files in the `src/` directory:

```typescript
// src/index.ts
console.log('Hello, TypeScript!')
```

The pre-commit hook will automatically run Biome checks when you commit changes, ensuring code quality and consistency.

## License

MIT
