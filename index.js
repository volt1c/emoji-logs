const config = () => {
  const addPrefix = (consoleLog, emoji) => {
    const log = consoleLog
    return (msg) => log(`[${emoji}]> ${msg}`)
  }
  console.info = addPrefix(console.info, `✅`)
  console.error = addPrefix(console.error, `⛔️`)
  console.warn = addPrefix(console.warn, `⚡`)
  console.debug = addPrefix(console.debug, `🔍`)
}

module.exports = {
  config,
}
