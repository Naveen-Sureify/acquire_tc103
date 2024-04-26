import * as files from './files';

import * as fs from 'fs';

const image = fs.readFileSync(
  './packages/xml/fixtures/examples/files/simple.png'
);

describe('files', () => {
  it.skip('inject', async () => {
    const file = await files.inject(
      './packages/xml/fixtures/examples/files/simple.png',
      'base64'
    );
    expect(file).toBe(image.toString('base64'));
  });

  it.skip('read', () => {
    expect(files.read).toBeDefined();
  });

  it.skip('write to s3', () => {
    expect(files.write).toBeDefined();
  });

  it.skip('injectFile', () => {
    expect(files.injectFile).toBeDefined();
  });

  it.skip('b64encode', () => {
    expect(files.b64encode).toBeDefined();
  });
});
