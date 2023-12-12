import { GenerateCPF } from './modules/generate-cpf'

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
})()
