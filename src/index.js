import { GenerateCPF } from './modules/generate-cpf'

import './assets/global.css'
;(() => {
  const generate = new GenerateCPF()

  const elementGenerate = document.querySelector('.result-cpf')

  elementGenerate.innerHTML = generate.generate()
})()
