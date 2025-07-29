
## Installation

To install the project and its dependencies, follow these steps:

1.  Ensure you have `pnpm` installed on your system. If not, you can install it by running:

    ```sh-session
    npm install -g pnpm
    ```

2.  Run the following command to install the project dependencies:
    ```sh-session
    pnpm install
    ```

## Build

To build the project, execute the following command:

```sh-session
pnpm build
```

## Run

To run the project locally, use the following command:

```sh-session
pnpm run dev
# or
pnpm run dev -- --open
```

## Project Structure

This project has the following structure:

- `src/`: This is where the main application code is stored. This includes:
  - `app.d.ts`, `app.html`, `app.pcss`: Main application files.
  - `lib/`: Contains assets, components, config, content, etc.
  - `routes/`: Contains routing layout, pages and server-side code.
  - `styles/`: Contains style files.
- `static/`: Contains static files like `browserconfig.xml`, `site.webmanifest`, and fonts.
- `.github/`: Contains GitHub related files like `dependabot.yml`, `renovate.json`, and workflows.
- Configuration files: `.eslintignore`, `.eslintrc.cjs`, `.gitignore`, `.npmrc`, `.prettierignore`, `.prettierrc`, `postcss.config.cjs`, `svelte.config.js`, `tailwind.config.js`, `tsconfig.json`, `vite.config.ts`.
## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
