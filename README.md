# Nextjs cannot resolve paths

UPDATE: Fixed by [storybookjs/storybook/pull/22160](https://github.com/storybookjs/storybook/pull/22160)!

## Setup

1. Install dependencies

```bash
yarn
```

2. Try to build Next.js Storybook

```bash
npx nx build-storybook next-app
```

Fails:

```
 >  NX   Module not found: Error: Can't resolve '@path-imports/react-rollup-lib' in '/Users/katerina/Projects/nrwl/test_nx_workspaces/path-imports/apps/next-app/components/one'
```

## What this repo contains

- `apps/next-app` - Next.js app
- `apps/ngapp` - Angular app
- `apps/react-vite` - React app using Vite
- `apps/react-webpack` - React app using Webpack

These apps import libraries from `libs` folder, using the import paths specified in [`tsconfig.base.json`](tsconfig.base.json).

All the other apps can build Storybook successfully, except the Next.js app.

### Test the other libs

```bash
npx nx build-storybook ngapp
npx nx build-storybook react-vite
npx nx build-storybook react-webpack
```

## Works in Storybook v6.5

```
git checkout test/sb-65
```

then install

```
yarn
```

then build next-app Storybook

```
npx nx build-storybook next-app
```
