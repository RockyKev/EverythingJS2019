import Model from "./model";

test('new works', () => {
    expect(new Model).toBeInstanceOf(Model);
})

//Turned on yarn jest --watch model
