export function truncate(input: string, maxLength = 50) {
  if (input.length > maxLength) {
    return input.substring(0, maxLength) + '...'
  }
  return input
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
