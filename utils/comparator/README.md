# Comparator

Basically, compares given two values and returns a boolean.

To run tests simply run:

```
yarn t comparator
```

## Usage
```js
const comparator = new Comparator();

comparator.equal(2, 3); // returns false
comparator.equal(2, 2); // returns true

comparator.lessThan(2, 2) // returns false
comparator.lessThan(1, 2) // returns true
...

```

## Include

- [x] equal
- [x] lessThan
- [x] lessThanOrEqual
- [x] greaterThan
- [x] greaterThanOrEqual
