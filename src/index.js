import { GenerateCPF } from './modules/generate-cpf'

import 'regenerator-runtime/runtime'

import './assets/global.css'
import { PasswordMethods } from './modules/password-methods'
;(() => {
  const generate = new GenerateCPF()

  const elementGenerate = document.querySelector('.result-cpf')

  if (elementGenerate) {
    elementGenerate.innerHTML = generate.generate()
  }
})()
;(() => {
  const generate = new PasswordMethods()

  const passwordElement = document.querySelector('.password')
  const buttonGeneratePasswordElement =
    document.querySelector('.generate-button')
  const inputAddNumbersElement = document.querySelector('.input-add-numbers')
  const inputAddLetterUpperCase = document.querySelector(
    '.input-add-letter-uppercase',
  )
  const inputAddLetterLowerCase = document.querySelector(
    '.input-add-letter-lowercase',
  )
  const inputAddSymbols = document.querySelector('.input-add-symbols')

  inputAddNumbersElement.addEventListener('change', function (event) {
    const isChecked = event.target.checked

    generate.setAddedNumbers(isChecked)
  })

  inputAddLetterUpperCase.addEventListener('change', function (event) {
    const isChecked = event.target.checked

    generate.setAddedUpperCaseLetter(isChecked)
  })

  inputAddLetterLowerCase.addEventListener('change', function (event) {
    const isChecked = event.target.checked

    generate.setAddedLowerCaseLetter(isChecked)
  })

  inputAddSymbols.addEventListener('change', function (event) {
    const isChecked = event.target.checked

    generate.setAddedSymbols(isChecked)
  })

  if (passwordElement) {
    buttonGeneratePasswordElement.addEventListener('click', () => {
      const inputQuantityCharacterPassword =
        document.querySelector('.input-character')

      const quantityCharacterPassword = Number(
        inputQuantityCharacterPassword.value,
      )

      console.log(quantityCharacterPassword)

      if (
        !generate.getCheckedAnythingGenerated() &&
        quantityCharacterPassword !== 0
      ) {
        passwordElement.innerHTML = generate.generatePassword(
          quantityCharacterPassword,
        )
      } else {
        alert('Please enter on option generate password!')
      }
    })
  }
})()
