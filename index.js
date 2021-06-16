const config = ({ info = '✅', error = '⛔️', warn = '⚡', debug = '🔍' }) => {
  const addPrefix = (consoleLog, emoji) => {
    const log = consoleLog
    return (msg) => log(`[${emoji}]> ${msg}`)
  }
  console.info = addPrefix(console.info, info)
  console.error = addPrefix(console.error, error)
  console.warn = addPrefix(console.warn, warn)
  console.debug = addPrefix(console.debug, debug)
}

module.exports = {
  config,
}
