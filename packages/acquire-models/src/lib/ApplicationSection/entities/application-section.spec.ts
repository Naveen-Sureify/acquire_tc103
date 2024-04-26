import { ApplicationSection } from './application-section.entity';

describe('ApplicationSection', () => {
  it('should instantiate', () => {
    expect(new ApplicationSection({ rowStatus: 1 })).toBeDefined();
  });
});
