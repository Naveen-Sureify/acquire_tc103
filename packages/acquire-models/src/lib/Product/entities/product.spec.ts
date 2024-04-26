import { Product } from './product.entity';

describe('Product', () => {
  it('should instantiate', () => {
    expect(new Product({ rowStatus: 1 })).toBeDefined();
  });
});
