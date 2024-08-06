// Fibonacci: o próximo número da sequência é sempre a soma dos 2 últimos.

const { createSandbox } = require('sinon');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox();
const assert = require('assert')
;(async () => {
  
  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(
      fibonacci,
      fibonacci.execute.name
    )
  
    //Números de sequência do algoritmo Fibonacci
    //[0] input = 5, current = 0, next = 1, result 0
    //[1] input = 4, current = 1, next = 1, result 1
    //[2] input = 3, current = 1, next = 2, result 1
    //[3] input = 0, current = 2, next = 3, result 2
  
  
    for(const sequence of fibonacci.execute(3)) { }
    const expectedCallCount = 4
    assert.strictEqual(spy.callCount, expectedCallCount)
  }

  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(
      fibonacci,
      fibonacci.execute.name
    )
  
    //Números de sequência do algoritmo Fibonacci
    //[0] input = 5, current = 0, next = 1, result 0
    //[1] input = 4, current = 1, next = 1, result 1
    //[2] input = 3, current = 1, next = 2, result 1
    //[3] input = 2, current = 2, next = 3, result 2
    //[4] input = 1, current = 3, next = 5, result 3
    //[5] input = 0 --> PARA
  
    const result = [...fibonacci.execute(5)]

    const expectedCallCount = 6
    assert.strictEqual(spy.callCount, expectedCallCount)
    const { args } = spy.getCall(2)
    const expectedParams = [3, 1, 2]
    assert.deepStrictEqual(args, expectedParams, "os arrays não são iguais")

    const expectedResult = [0, 1, 1, 2, 3]
    assert.deepStrictEqual(result, expectedResult, "os arrays não são iguais")
  }
  
})()