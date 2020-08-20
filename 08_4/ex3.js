const assert = require('assert')

const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
}

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
}

/* ex3: Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna
todos os gostos daquela pessoa, conforme mostrado abaixo: */

// complete a assinatura da função abaixo
const personLikes = (person) => `${person.name} is ${person.age} years old and likes ${person.likes.join(", ")}.`
assert.equal(personLikes(alex), "Alex is 26 years old and likes fly fishing.")
assert.equal(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.")