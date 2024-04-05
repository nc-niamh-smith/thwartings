const utils = require('../utils.js')
const fs = require('fs/promises')

beforeEach(async () => {
    const stock = {"leather jacket":1,"501 German Verbs":18,"cat food":8,"The Sims2: Double Deluxe":1,"highlighter":0,"acrylic paint: red":5}
    await fs.writeFile(`${__dirname}/../data/stock.json`, JSON.stringify(stock))
})


describe('stockCheck', () => {
    test('should take in array of items and return boolean', async () => {
        const basket = []
        const actual = await utils.stockCheck(basket)
        expect(typeof actual).toBe('boolean')
    });
    test('should check if the items are in stock', async () => {
        const basket = [{item: "leather jacket"}]
        const actual = await utils.stockCheck(basket)
        expect(actual).toBe(true)
    })
    test('should check if the items are in stock when passed multiple items in the basket', async () => {
        const basket = [{item: "leather jacket"}, {item: "501 German Verbs"}]
        const actual = await utils.stockCheck(basket)
        expect(actual).toBe(true)
    })
    test('should return false when an item is not in stock', async () => {
        const basket = [{item: "leather jacket"}, {item: "highlighter"}]
        const actual = await utils.stockCheck(basket);
        expect(actual).toBe(false)
    })
    test('should return false when an item is not stocked', async () => {
        const basket = [{item: 'leather jacket'}, {item: 'pencil case'}]
        const actual = await utils.stockCheck(basket)
        expect(actual).toBe(false)
    })
    test('should decrease stock when item stock has been depleted', async () => {
        const basket = [{item: 'leather jacket'}, {item: 'leather jacket'}]
        const actual = await utils.stockCheck(basket)
        expect(actual).toBe(false)
    })
    test('should not mutate the original input', async () => {
        const basket = [{item: "leather jacket"}, {item: "501 German Verbs"}]
        const basketCopy =[{item: "leather jacket"}, {item: "501 German Verbs"}]
        await utils.stockCheck(basket)
        expect(basket).toEqual(basketCopy)
    })
})