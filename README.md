# Modclub UI Kit
## Latest Version
<!-- VERSION_BADGE_START -->
![npm package version](https://img.shields.io/badge/version-0.3.21-blue)
<!-- VERSION_BADGE_END -->

## Storybook
Explore our components and their usage in detail by visiting our [Storybook](https://modclub-app.github.io/uikit/). The Storybook is automatically updated with every push to the main branch, ensuring you have access to the latest components and documentation.

## Development Guide
To start developing with the project, follow these steps:

In your project's root directory, execute the following command:
```bash
npm run storybook
```
This command initiates the application in development mode.

Access the application by opening http://localhost:6006 in your web browser. You'll be able to view and interact with your app's components in Storybook's development environment.

## How to use the UIkit lib

Our UIkit library is hosted on GitHub's npm registry. To use it, you'll need a Personal Access Token (PAT) with the correct permissions.

### Setting Up Your Personal Access Token (PAT)
Generate a PAT: Follow the instructions here to create a new PAT on GitHub. Ensure you select the read:packages scope to allow package downloads.

Configure npm with Your PAT:

Open or create the `~/.npmrc` file in your home directory.
Add the following lines, replacing `<<YOUR_PAT>>` with your actual PAT:
```
@modclub-app:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<<YOUR_PAT>>
```

### Installing the UIkit Library
With your PAT configured, you can now add the UIkit library to your project:

```sh
yarn add @modclub-app/uikit
```

## Floating UI
Some components use the Floating UI library
https://floating-ui.com/docs/FloatingOverlay