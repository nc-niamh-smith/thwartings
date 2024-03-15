# Array Methods

Please select the most appropriate array method for each problem.

### deFleaCats
I want a function that when passed an array populated with cat objects, returns a new array with only those that have been treated for fleas.

``` deFleaCats([{cat: 'Mojo Jojo', fleaTreated: true}, {cat: 'Squeaks', fleaTreated: false}])```

``` returns [{cat: 'Mojo Jojo', fleaTreated: true}]```

### giftCatToys
I want a function that when passed an array populated with cat objects and an array with items, it returns a new array of the same length that updates each cat object with a new 'item'. You can assume that both arrays passed are of the same length.

``` giftCatsToys([{cat: 'Mojo Jojo', fleaTreated: true}, {cat: 'Azula', fleaTreated: true}, {cat: 'Hiro', fleaTreated: true}], ["mouse", "ball", "stick"]) ```

``` returns [{cat: 'Mojo Jojo', fleaTreated: true, toy: 'mouse'}, {cat: 'Azula', fleaTreated: true, toy: 'ball'}, {cat: 'Hiro', fleaTreated: true, toy: 'stick'}] ```

### updateOwner
I want a function that when passed an array populated with cat objects and an owner string, it returns the same array, updated with an added property. You can assume that both the array and string will always be passed.

``` updateOwner([{cat: 'Mojo Jojo'}, {cat: 'Azula'}, {cat: 'Hiro'}], "Niamh") ```

``` returns [{cat: 'Mojo Jojo', owner: 'Niamh'}, {cat: 'Azula', owner: 'Niamh'}, {cat: 'Hiro', owner: 'Niamh'}]```