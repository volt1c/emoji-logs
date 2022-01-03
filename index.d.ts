export type ConfigOptions = {
  info?: string
  error?: string
  warn?: string
  debug?: string
  formatter?: (v: string) => string
}

/**
 * Method to config `emoji-logs`
 *
 * @param {ConfigOptions} options
 */
export function config(options: ConfigOptions): void
