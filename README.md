# Bundlers and compilers

## For apps

### SWC

All works as expected. React app using `webpack` and `swc` as compiler, builds Storybook as expected.

### Babel

All works as expected. React app using `webpack` and `babel` as compiler, builds Storybook as expected.

## For libraries

### Rollup + Babel + `@storybook/react-webpack5`

Library building with `rollup` and `babel` as compiler gets error when serving and building with `@storybook/react-webpack5`.

To reproduce:

```bash
npx nx build-storybook react-babel
```

```bash
 >  NX   Module not found: Error: Can't resolve 'core-js/modules/es.object.assign.js' in '/Users/katerina/Projects/nrwl/test_nx_workspaces/path-imports/libs/react-babel/src/lib'
```

Works when I use `@storybook/react-vite` instead of `@storybook/react-webpack5`.

### Rollup + SWC + `@storybook/react-webpack5`

Library building with `rollup` and `swc` as compiler gets error when serving and building with `@storybook/react-webpack5`.

To reproduce:

```bash
npx nx build-storybook react-swc
```

```bash
>  NX   Module not found: Error: Can't resolve 'core-js/modules/es.object.assign.js'in '/Users/katerina/Projects/nrwl/test_nx_workspaces/path-imports/libs/react-swc/srclib'
```

Works when I use `@storybook/react-vite` instead of `@storybook/react-webpack5`.
