'use strict'

function createCounter() {
    let previousValue
  
    return function (num) {
      if (previousValue === undefined) {
        previousValue = num
      } 
      
      else {
        previousValue += num
      }

      return previousValue
    }
  }
  
  const counter = createCounter()
  
  console.log(counter(5))  
  console.log(counter(-12))  
  console.log(counter(23))  
  console.log(counter(23.5))  