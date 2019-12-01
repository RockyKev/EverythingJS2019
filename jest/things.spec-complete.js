

test('expectation', () => {
    
    //Note - arrays will never equal the same. Instead of 'toBe', use 'toEqual'. 
        expect('Some String').toBe('Some String');
        expect(13).toBe(13);
        expect([13]).toEqual([13]);

        // console.log(13 === 13);
        // console.log([13] === [13]); 

    //what about random values? Use 
        const result = {
            value: Date.now()
        }

        expect(result).toEqual({
            value: expect.any(Number)
        });
})

