# React Native Typescript Boilerplate

> My personal boilerplate to be the base of the projects that I am involved using all the previous experiences

React Native brings [**React**'s][r] declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.

- **Declarative.** React makes it painless to create interactive UIs. Declarative views make your code more predictable and easier to debug.
- **Component-Based.** Build encapsulated components that manage their state, then compose them to make complex UIs.
- **Developer Velocity.** See local changes in seconds. Changes to JavaScript code can be live reloaded without rebuilding the native app.
- **Portability.** Reuse code across iOS, Android, and [other platforms][p].

React Native is developed and supported by many companies and individual core contributors. Find out more in our [ecosystem overview][e].

[r]: https://reactjs.org/
[p]: https://reactnative.dev/docs/out-of-tree-platforms
[e]: https://github.com/facebook/react-native/blob/master/ECOSYSTEM.md

## Contents

- [Requirements](#-requirements)
- [How To Use](#-how-to-use)

## 📋 Requirements

React Native apps may target iOS 10.0 and Android 4.1 (API 16) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. Tools like [Expo](https://expo.io) can be used to work around this.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/ferreiradev/react-native-ts-boilerplate

# Go into the repository
$ cd react-native-ts-boilerplate

# Install dependencies
$ yarn
```

Run Android:

```bash
# Run the app
$ react-native run-android
```

Run IOS:

```bash
# Run the app
$ react-native run-ios
```

## Release History

- 0.1.0 - 2020-04-12
  - Create md files, init styled components with theme and create component Typography with examples
- 0.0.1 - 2020-04-10
  - Work in progress

## Features

- [x] Create a readme files - Readme, Changelog and License
- [x] Configure ESLint, Prettier, Editorconfig and VSCode Settings
- [x] Downloading and configuring custom fonts
- [ ] Configure Styled Components using Theme (WIP)
- [x] Create a Typography
- [x] Configure a Storybook
- [ ] Installing babel-module-resolver to create aliases improving file calling in main folders
- [ ] Create a Input Styled
- [ ] Create a Button Styled
- [ ] Configure React Navigation and create predicted screens
- [ ] Create a Form for add task using Formik and Yup
- [ ] Create a List of Tasks
- [ ] Configure Redux, Redux Saga and Redux Persist
- [ ] Working the flow of the whole list with redux

## Possible Features

- [ ] Light and Dark Theme
- [ ] Integration with Design Token

## Meta

Rafael Ferreira – [@RafaFerreiradDev](https://twitter.com/rafaferreiradev) – ferreiradev3011@gmail.com

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/ferreiradev/react-native-ts-boilerplate/LICENSE.MD](https://github.com/ferreiradev/react-native-ts-boilerplate/LICENSE.MD)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
