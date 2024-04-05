const fs = require('fs/promises');

const utils = {
    stockCheck: async (items) => {
        
        const filteredItems = []
        
        for(let i = 0; i < items.length; i++) {
            let stock = await fs.readFile(`${__dirname}/data/stock.json`)
            const parsedStock = JSON.parse(stock)
            const {item} = items[i]
            if(parsedStock.hasOwnProperty(item) && parsedStock[item] > 0) {
                parsedStock[item]--
                await fs.writeFile(`${__dirname}/data/stock.json`, JSON.stringify(parsedStock))
                filteredItems.push('item')
            }
        }
        return  filteredItems.length === items.length ? true : false;
    },
    addressCheck: () => {},
    paymentCheck: () => {}
}

module.exports = utils