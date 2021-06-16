# emoji-logs

Emoji-logs is a zero-dependency module that marks certain console logs with emoji.

## Install

```bash
npm install emoji-logs
yarn add emoji-logs
```

## Usage

As early as possible in your application, require and configure emoji-logs.

```js
require('emoji-logs').config({})
```

## Config

### Change emoji

```js
require('emoji-logs').config({
  info: '🧶', 
  debug: '🔧', 
  warn: '🔥', 
  error: '💥',
})
```

## Example

### Default configuration

![example](./assets/default.gif)

### Changed emojis

![example](./assets/configured.gif)
