const config = ({ 
  info = '✅', 
  error = '⛔️', 
  warn = '⚡', 
  debug = '🔍', 
  formatter = v => `[${v}]> ` 
}) => {
  const addPrefix = (consoleLog, emoji) => {
    const log = consoleLog
    return (msg) => log(`${formatter(emoji)}${msg}`)
  }
  console.info = addPrefix(console.info, info)
  console.error = addPrefix(console.error, error)
  console.warn = addPrefix(console.warn, warn)
  console.debug = addPrefix(console.debug, debug)
}

module.exports = {
  config,
}
