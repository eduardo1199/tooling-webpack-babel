import { ValidateCPF } from './validate_cpf'

export class GenerateCPF {
  rand(min = 100000000, max = 999999999) {
    const cpf = Math.floor(Math.random() * (max - min) + min)

    const parsedCpfString = String(cpf)

    return parsedCpfString
  }

  generate() {
    const cpfWithoutDigit = this.rand()
    const firstDigit = ValidateCPF.geraDigito(cpfWithoutDigit)
    const secondDigit = ValidateCPF.geraDigito(cpfWithoutDigit + firstDigit)
    const newCpf = cpfWithoutDigit + firstDigit + secondDigit

    return this.format(newCpf)
  }

  format(cpf) {
    const formatCpf =
      cpf.slice(0, 3) +
      '.' +
      cpf.slice(3, 6) +
      '.' +
      cpf.slice(6, 9) +
      '-' +
      cpf.slice(9, 11)

    return formatCpf
  }
}
