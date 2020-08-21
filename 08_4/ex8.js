const assert = require('assert')

// ex8: Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const greet = (name, msg = "Hi") => `${msg} ${name}`

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")