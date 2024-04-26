import { ProductApplication } from './product-application.entity';

describe('ProductApplication', () => {
  it('should instantiate', () => {
    expect(new ProductApplication({ rowStatus: 1 })).toBeDefined();
  });
});
