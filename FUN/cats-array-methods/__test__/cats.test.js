const {deFleadCats, giftCatToys, updateOwner} = require('../cats.js');

describe('deFleaCats', () => {
    xtest('returns a new array', () => {
        const inputArray = []
        const actual = deFleadCats(inputArray)
        expect(actual).not.toBe(inputArray)
        expect(actual).not.toBe(undefined)
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
    xtest('returns a new array', () => {
        const catsArray = [];
        const toysArray = [];
        const actual = giftCatToys(catsArray, toysArray)
        expect(actual).not.toBe(undefined)
        expect(actual).not.toBe(catsArray)
        expect(actual).not.toBe(toysArray)
    })
    xtest('populates a single-cat object with a toy from the secondary array', () => {
        const catsArray = [{cat: 'Hiro'}];
        const toysArray = ["mouse"];
        const expected = [{cat: 'Hiro', toy: 'mouse'}]
        const actual = giftCatToys(catsArray, toysArray)
        expect(actual).toEqual(expected)
    })
    xtest('populates a multi-cat object array with items from the secondary array', () => {
        const catsArray = [{cat: 'Hiro'}, {cat: 'Mojo Jojo'}];
        const toysArray = ["mouse", "stick"];
        const expected = [{cat: 'Hiro', toy: 'mouse'}, {cat: 'Mojo Jojo', toy: 'stick'}]
        const actual = giftCatToys(catsArray, toysArray)
        expect(actual).toEqual(expected)
    })
    xtest('does not mutate either array', () => {
        const catsArray = [{cat: 'Hiro'}, {cat: 'Mojo Jojo'}];
        const toysArray = ["mouse", "stick"];
        const catsArrayCopy = [{cat: 'Hiro'}, {cat: 'Mojo Jojo'}];
        const toysArrayCopy = ["mouse", "stick"];
        giftCatToys(catsArray, toysArray);
        expect(catsArray).toEqual(catsArrayCopy);
        expect(toysArray).toEqual(toysArrayCopy)
    })
})

describe('updateOwner', () => {
    xtest('returns an array', () => {
        const catsArray = [];
        const ownerString = "";
        const actual = updateOwner(catsArray, ownerString);
        expect(Array.isArray(actual)).toBe(true);
    })
    xtest('can add an owner property to a single-object array', () => {
        const catsArray = [{cat: 'Mojo Jojo'}]
        const ownerstring = "Niamh"
        const actual = updateOwner(catsArray, ownerstring)
        const expected = [{cat: 'Mojo Jojo', owner: 'Niamh'}]
        expect(actual).toEqual(expected)
    })
    xtest('can add an owner property to a multi-object array', () => {
        const catsArray = [{cat: 'Mojo Jojo'}, {cat: 'Hiro'}]
        const ownerString = "Niamh";
        const actual = updateOwner(catsArray, ownerString);
        const expected = [{cat: 'Mojo Jojo', owner: 'Niamh'}, {cat: 'Hiro', owner: 'Niamh'}];
        expect(actual).toEqual(expected)
    })
})