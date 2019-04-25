const testFunction = function(a, b, c, d, f) {};

testFunction(1, 3, 4, 5, 6);

interface Mockable {
  name: string;
}

class MockImpl implements Mockable {
  name: string;

  constructor() {
    this.name = 'lijie';
  }
}

export default {
  test: 'test'
};
