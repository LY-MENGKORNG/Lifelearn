/**
 * Capitalize text
 * @param string
 * @return string
 */
export function capitalizeText(text: string): string {
  const removedUnderscore = text.replace('_', ' ')
  return removedUnderscore.charAt(0).toUpperCase() + text.slice(1)
}
