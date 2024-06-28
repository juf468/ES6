function newUser(user, age, country, uId){
    return{
        user,
        age,
        country,
        uId,
    }
}
console.log('newUser', newUser('hi123', 34, 'Mx', 1));// CLO = newUser { user: 'hi123', age: 34, country: 'Mx', id: 1 }
