import { Product } from './product.entity';

describe('Product', () => {
  it('should instantiate', () => {
    expect(new Product()).toBeDefined();
  });
});
