# create-uikit-app

Based on [`create-vite`](https://github.com/vitejs/vite/tree/main/packages/create-vite)

## Scaffolding for a UI Kit Apps

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=14.18.0. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```sh
npm create uikit-app
```

With Yarn:

```sh
yarn create vite
```

With PNPM:

```sh
pnpm create vite
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

```sh
# npm 6.x
npm create uikit-app my-uikit-app --template minimal

# npm 7+, extra double-dash is needed:
npm create uikit-app my-uikit-app -- --template minimal

# yarn
yarn create uikit-app my-uikit-app --template minimal

# pnpm
pnpm create uikit-app my-uikit-app --template minimal
```

Currently supported template presets include:

- `minimal`
- `full`

You can use `.` for the project name to scaffold in the current directory.
