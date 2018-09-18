
# react-native-simple-icons
[![package version](https://img.shields.io/npm/v/react-native-simple-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-simple-icons)
[![package downloads](https://img.shields.io/npm/dm/react-native-simple-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-simple-icons)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-native-simple-icons.svg?style=flat-square)](https://npmjs.org/package/react-native-simple-icons)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/react-native-vector-icons.svg)](https://greenkeeper.io/)

> Simple Icon component shamelessly taken from [react-native-elements](https://github.com/react-native-training/react-native-elements)

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). First install [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

```sh
# yarn
yarn add react-native-vector-icons
# or with npm
npm i --save react-native-vector-icons

# link
react-native link react-native-vector-icons
```

Then:

```sh
$ npm install react-native-simple-icons
$ # OR
$ yarn add react-native-simple-icons
```

## Usage

```js
import { Icon } from 'react-native-simple-icons'

<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    