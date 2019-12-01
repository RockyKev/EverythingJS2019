import Model from "./model";


function createModule(data = [], options = {}) {
    return new Model({
        ...options,
        data
    })
}

test('new works', () => {
    expect(createModule()).toBeInstanceOf(Model);
})
//Turned on yarn jest --watch model

test('Model structure', () => {
    expect(createModule()).toEqual(expect.objectContaining({
        $collection: expect.any(Array),
        $options: expect.objectContaining({
            primaryKey: 'id'
        }),
        record: expect.any(Function),
        all: expect.any(Function),
        find: expect.any(Function),
        update: expect.any(Function)      
    }));
})

describe('customization', () => {
    test('we can customize the primaryKey', () => {
        const model = createModule([], {
            primaryKey: 'name'
        })
        expect(model.$options.primaryKey).toBe('name')
    })
});

describe('record', () => {
    const heroes = [{ id: 1, name: 'Batman'}, { name: 'Black Panther'}]

    test('can add data to the collection', () => {
        const model = createModule();
        model.record(heroes);
        expect(model.$collection).toEqual([
            heroes[0], 
            {
            id: expect.any(Number), 
            name: heroes[1].name
            }
        ]);
    });

    test('gets called when data is passed to Model', () => {
        const spy = jest.spyOn(Model.prototype, 'record');
        const model = createModule(heroes);
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    })
})


describe('all', () => {
    test('returns empty model', ()=> {
        const model = createModule();
        expect(model.all()).toEqual([])
    })

    test('returns model data', () => {
        const model = createModule([{ name: 'Batman'}, { name: 'Joker'}]);
        expect(model.all().length).toBe(2);
    })

    test('original data stays intact', () => {
        const model = createModule([ {name: 'Batman' } ])
        const data = model.all();
        data[0].name = 'Joker';

        expect(model.$collection[0].name).toBe('Batman');
    })

})

describe('find', () => {
    const heroes = [{ id: 1, name: 'Batman'}, { name: 'Black Panther'}]

    test('returns null if nothing matches', () => {
        const model = createModule()
        expect(model.find('Batman')).toEqual(null)
    });

    test('find returns a matching entry', () => {
        const model = createModule(heroes)
        expect(model.find(1)).toEqual(heroes[0]);
    })
})

describe('update', () => {
    const heroesAndVillains = [{ id: 1, name: 'Batman'}]
    let model;

    beforeEach( () => {
        const dataset = JSON.parse(JSON.stringify(heroesAndVillains));
        model = createModule(dataset);
    })

    test('an entry by id', () => {
        model.update(1, { name: 'Joker' })
        expect(model.find(1).name).toBe('Joker')
    })

    test('extend an entry by id', () => {
        model.update(1, { cape: true })

        expect(model.find(1)).toEqual(
            expect.objectContaining({
                name: 'Batman',
                cape: true
            }));

    })

    test('return false if no entry matches', () => {
        expect(model.update(2, {})).toBe(false);
    })


})