const {deFleadCats, giftCatToys, updateOwner} = require('../cats.js');

describe('deFleaCats', () => {
    xtest('returns a new array', () => {
        const inputArray = []
        const actual = deFleadCats(inputArray)
        expect(actual).not.toBe(inputArray)
    })
    xtest('identifies when an element meets the requirement in a single-object array', () => {
        const catsArray = [{cat: 'Mojo Jojo', fleaTreated: true}]
        const actual = deFleadCats(catsArray)
        const expected = [{cat: 'Mojo Jojo', fleaTreated: true}]
        expect(actual).toEqual(expected)
    })
    xtest('identifies when an element does not meet the requirement in a single-object array', () => {
        const catsArray = [{cat: 'Mojo Jojo', fleaTreated: false}]
        const actual = deFleadCats(catsArray)
        const expected = []
        expect(actual).toEqual(expected)
    })
    xtest('identifies when some elements do and do not meet the requirement in a multi-object array', () => {
        const catsArray = [{cat: 'Mojo Jojo', fleaTreated: true}, {cat: 'Hiro', fleaTreated: true}, {cat: 'Azula', fleaTreated: false}]
        const actual = deFleadCats(catsArray)
        const expected = [{cat: 'Mojo Jojo', fleaTreated: true}, {cat: 'Hiro', fleaTreated: true}]
        expect(actual).toEqual(expected)
    })
    xtest('does not mutate the original array', () => {
        const catsArray = [{cat: 'Mojo Jojo', fleaTreated: true}, {cat: 'Hiro', fleaTreated: true}, {cat: 'Azula', fleaTreated: false}]
        const catsArrayCopy = [{cat: 'Mojo Jojo', fleaTreated: true}, {cat: 'Hiro', fleaTreated: true}, {cat: 'Azula', fleaTreated: false}]
        deFleadCats(catsArray)
        expect(catsArray).toEqual(catsArrayCopy)
    })
})

describe('giftCatToys', () => {
    test.todo('returns a new array')
    test.todo('populates a single-cat object with a toy from the secondary array')
    test.todo('populates a multi-cat object array with items from the secondary array')
    test.todo('does not mutate the cat array')
    test.todo('does not mutate the toys array')
    test.todo('does not mutate the inner cat objects')
})

describe('updateOwner', () => {
    test.todo('returns an array')
    test.todo('can add an owner property to a single-object array')
    test.todo('can add an owner property to a multi-object array')
    test.todo('does not mutate original array')
})