import { emptyService } from './Service';
import dummyService, {
  loadDataResult,
  loadBackgroundImageResults,
} from './dummyService';

describe('Service emptyService', () => {
  it('loadData must reject', () => {
    expect.assertions(1);
    return emptyService
      .loadData()
      .then(e => expect(e).toBe(e))
      .catch(e =>
        expect(e.message).toEqual('Service Provider not configured.')
      );
  });

  it('loadBackgroundImage must reject', () => {
    expect.assertions(1);
    return emptyService
      .loadBackgroundImage()
      .then(e => expect(e).toBe(e))
      .catch((e: Error) =>
        expect(e.message).toEqual('Service Provider not configured.')
      );
  });
});

describe('Service dummyService', () => {
  it('loadData must return data', () => {
    expect.assertions(2);
    return dummyService.loadData().then(data => {
      expect(data.length).toEqual(7);
      expect(data[0]).toEqual(loadDataResult[0]);
    });
  });

  it('loadBackgroundImage must return one image', () => {
    expect.assertions(2);
    return dummyService.loadBackgroundImage().then(data => {
      expect(data.authorName).toEqual(loadBackgroundImageResults[0].authorName);
      expect(loadBackgroundImageResults.includes(data)).toBeTruthy();
    });
  });
});
