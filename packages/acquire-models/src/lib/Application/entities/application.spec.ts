import { Application } from './application.entity';

describe('Application', () => {
  it('should instantiate', () => {
    expect(new Application({ rowStatus: 1 })).toBeDefined();
  });
});
