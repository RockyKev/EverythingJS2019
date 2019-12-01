const expectExport = require("expect");

const user = {
    name: 'Tony Tinkerton',
    age: 42,
    job: 'inventor'
}

test('user matches', () => {
    const userString = "{\"name\":\"Tony Tinkerton\",\"age\":42,\"job\":\"inventor\"}";

    // The original test of the value
    //expect(JSON.stringify(user)).toBe(userString);

    //creating a snapshot
    //expect(JSON.stringify(user)).toMatchSnapshot();

    //using the snapshot
    expect(user).toMatchSnapshot();
})