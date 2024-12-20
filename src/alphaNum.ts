export function encode(
  text: string,
  options: {
    separator?: string
    uppercase?: boolean
    ignoreSpecial?: boolean
    trim?: boolean
    caseSensitive?: boolean
  } = {},
): string {
  const separator = options.separator || '-'
  const toUpperCase = options.uppercase || false
  const ignoreSpecial = options.ignoreSpecial || false
  const trim = options.trim || false
  const caseSensitive = options.caseSensitive || false
  if (trim) {
    text = text.trim()
  }
  return text
    .split('')
    .map((char) => {
      if (char === ' ') return ' '
      const charCode = char.charCodeAt(0)
      if (ignoreSpecial && !/[a-zA-Z]/.test(char)) return ''
      if (caseSensitive) {
        if (charCode >= 97 && charCode <= 122) {
          return (charCode - 96).toString()
        } else if (charCode >= 65 && charCode <= 90) {
          return (charCode - 64 + 26).toString()
        }
      } else {
        if (charCode >= 97 && charCode <= 122) {
          return (charCode - 96).toString()
        } else if (toUpperCase && charCode >= 65 && charCode <= 90) {
          return (charCode - 64 + 26).toString()
        }
      }
      return char
    })
    .join(separator)
    .replace(/- -/g, ' ')
}
export function decode(
  code: string,
  options: {
    separator?: string
    uppercase?: boolean
    ignoreSpecial?: boolean
    trim?: boolean
    caseSensitive?: boolean
  } = {},
): string {
  const separator = options.separator || '-'
  const toUpperCase = options.uppercase || false
  const ignoreSpecial = options.ignoreSpecial || false
  const trim = options.trim || false
  const caseSensitive = options.caseSensitive || false
  if (trim) {
    code = code.trim()
  }

  return code
    .split(' ')
    .map((word) =>
      word
        .split(separator)
        .map((part) => {
          const num = parseInt(part, 10)
          let charCode: number

          if (ignoreSpecial && !/[a-zA-Z]/.test(part)) return ''

          if (caseSensitive) {
            if (num >= 1 && num <= 26) {
              charCode = num + 96
            } else if (num >= 27 && num <= 52) {
              charCode = num + 64 - 26
            } else {
              return ''
            }
          } else {
            if (num >= 1 && num <= 26) {
              charCode = num + 96
            } else if (toUpperCase && num >= 27 && num <= 52) {
              charCode = num + 64 - 26
            } else {
              return ''
            }
          }

          return String.fromCharCode(charCode)
        })
        .join(''),
    )
    .join(' ')
}

export default { encode, decode }
