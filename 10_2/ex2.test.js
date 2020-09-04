/* 2. Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o
caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado. */

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        }
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  }
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  }

describe('Testing function findUserById', () => {
  it('find correct user', () => {
    return getUserName(4).then(userName => {
      expect(userName).toEqual('Mark');
    })
  })

  it('returns error message', () => {
    return getUserName(7).catch(message => {
      expect(message.error).toEqual('User with 7 not found.');
    })
  })

})
