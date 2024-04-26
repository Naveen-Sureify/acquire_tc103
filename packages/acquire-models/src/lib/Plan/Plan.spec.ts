
import { Plan } from './Plan';

describe('Plan', () => {
  it('should instantiate', () => {
    expect(new Plan({ rowStatus: 1 })).toBeDefined();
  });
});
