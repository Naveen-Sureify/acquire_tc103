import { ApplicationRas } from './application-ras.entity';

describe('Application', () => {
  it('should instantiate', () => {
    expect(new ApplicationRas({ rowStatus: 1 })).toBeDefined();
  });
});
