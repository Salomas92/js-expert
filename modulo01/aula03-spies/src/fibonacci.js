class Fibonacci {
  * execute(input, current = 0, next = 1) {

    //essa condição para a execução quando o resultado for 0
    if (input === 0) {
      return
    }

    //retorna o valor
    yield current

    //Delega função mas não retorna valor!
    yield * this.execute(input -1, next, current + next)
    
  }
}

module.exports = Fibonacci