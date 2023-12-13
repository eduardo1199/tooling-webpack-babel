export class PasswordMethods {
  password = ''
  isAddedNumbers = false
  isAddedUpperCaseLetter = false
  isAddedLowerCaseLetter = false
  isAddedSymbols = false

  constructor(password) {
    this.password = password ?? ''
  }

  generatePassword(maxQuantityOfCharacters) {
    if (this.password) {
      this.password = ''
    }

    while (true) {
      if (this.isAddedNumbers) {
        this.password += this.getGenerateNumbers()

        if (this.password.length === maxQuantityOfCharacters) {
          break
        }
      }

      if (this.isAddedUpperCaseLetter) {
        this.password += this.getGenerateUpperCaseLetter()

        if (this.password.length === maxQuantityOfCharacters) {
          break
        }
      }

      if (this.isAddedLowerCaseLetter) {
        this.password += this.getGenerateLowerCaseLetter()

        if (this.password.length === maxQuantityOfCharacters) {
          break
        }
      }

      if (this.isAddedSymbols) {
        this.password += this.getGenerateSymbols()

        if (this.password.length === maxQuantityOfCharacters) {
          break
        }
      }
    }

    return this.password
  }

  getGenerateNumbers() {
    const number = Math.floor(Math.random() * (10 - 0) + 0)

    return String(number)
  }

  getGenerateUpperCaseLetter() {
    const number = Math.floor(Math.random() * (90 - 65) + 65)

    const letterUpperCase = String.fromCharCode(number)

    return letterUpperCase
  }

  getGenerateLowerCaseLetter() {
    const number = Math.floor(Math.random() * (122 - 97) + 97)

    const letterLowerCase = String.fromCharCode(number)

    return letterLowerCase
  }

  getGenerateSymbols() {
    const number = Math.floor(Math.random() * (47 - 33) + 33)

    const symbols = String.fromCharCode(number)

    return symbols
  }

  setAddedNumbers(isAddedNumbers) {
    this.isAddedNumbers = isAddedNumbers
  }

  setAddedUpperCaseLetter(isAddedUpperCaseLetter) {
    this.isAddedUpperCaseLetter = isAddedUpperCaseLetter
  }

  setAddedLowerCaseLetter(isAddedLowerCaseLetter) {
    this.isAddedLowerCaseLetter = isAddedLowerCaseLetter
  }

  setAddedSymbols(isAddedSymbols) {
    this.isAddedSymbols = isAddedSymbols
  }

  getCheckedAnythingGenerated() {
    return (
      !this.isAddedNumbers &&
      !this.isAddedUpperCaseLetter &&
      !this.isAddedLowerCaseLetter &&
      !this.isAddedSymbols
    )
  }
}
