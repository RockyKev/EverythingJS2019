//bring in the user class
import User from './user';



//this is called expectations
describe ('User', () => {
    test('name returns full name', () => {
        const newUser = new User({ firstname: 'Jane', lastname: 'Doe'})

        expect(newUser.name).toBe('Jane Doe');
    })

})

//jest looks for files ending in .spec.js or .test.js

