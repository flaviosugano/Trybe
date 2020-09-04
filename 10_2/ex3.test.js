/* 3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await. */

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
  it('find correct user', async () => {
    expect.assertions(1);
    const userName = await getUserName(4);
    expect(userName).toEqual('Mark');
  })

  it('returns error message', async () => {
    expect.assertions(1);
    try {
      await getUserName(7);
    }
    catch (message) {
      expect(message.error).toEqual('User with 7 not found.');
    }
  })
})
