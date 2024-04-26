import { Component } from './component.entity';

describe('Component', () => {
  it('should instantiate', () => {
    expect(new Component({ rowStatus: 1 })).toBeDefined();
  });
});
