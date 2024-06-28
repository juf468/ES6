function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log('name, age, country :>> ', name, age, country);
    //1er clo = oscar 32 mx y 2do clo = david 15 co
}
 newUser()
 newUser('David', 15, 'CO');

// CON ES6 =>
    function newAdmin(name = 'Oscar', age = 32, country = 'CL'){
        console.log('name, age, country :>> ', name, age, country);
         //1er clo = oscar 32 cl y 2do clo = Ana 28 PE
        }
    newAdmin();
    newAdmin('Ana', 28, 'PE');
    