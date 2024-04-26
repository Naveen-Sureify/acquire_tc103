import { Quote } from './Quote';

describe('Quote', () => {
  it('should instantiate', () => {
    expect(new Quote({ rowStatus: 1 })).toBeDefined();
  });
});
