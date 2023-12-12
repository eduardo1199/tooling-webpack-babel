export class PasswordMethods {
  password = ''
  isAddedNumbers = false
  isAddedUpperCaseLetter = false
  isAddedLowerCaseLetter = false
  isAddedSymbols = false

  constructor(password) {
    this.password = password
  }

  generatePassword(maxQuantityOfCharacters) {
    for (let i = 0; i < maxQuantityOfCharacters; i++) {
      if (this.isAddedNumbers) {
        this.password += this.generateNumbers()
      }

      if (this.isAddedUpperCaseLetter) {
        this.password += this.generateUpperCaseLetter()
      }

      if (this.isAddedLowerCaseLetter) {
        this.password += this.isAddedLowerCaseLetter()
      }

      if (this.isAddedSymbols) {
        this.password += this.isAddedSymbols()
      }
    }

    return this.password
  }

  generateNumbers() {
    const number = Math.floor(Math.random() * (10 - 0) + 0)

    return String(number)
  }

  generateUpperCaseLetter() {
    const number = Math.floor(Math.random() * (90 - 65) + 65)

    const letterUpperCase = String.fromCharCode(number)

    return letterUpperCase
  }

  generateLowerCaseLetter() {
    const number = Math.floor(Math.random() * (122 - 97) + 97)

    const letterLowerCase = String.fromCharCode(number)

    return letterLowerCase
  }

  generateSymbols() {
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
      !isAddedNumbers &&
      !isAddedUpperCaseLetter &&
      !isAddedLowerCaseLetter &&
      !isAddedSymbols
    )
  }
}
