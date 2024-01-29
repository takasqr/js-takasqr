// URLManager.test.ts

import { expect, test } from 'vitest'
import { URLManager } from '../URLManager';

test('URLManager', () => {
  // パラメータが存在する場合のテスト
  test('getParam should return the value when the parameter exists', () => {
    const url = 'https://example.com/?param1=value1&param2=value2';
    const urlManager = new URLManager(url);

    const paramName = 'param1';
    const expectedValue = 'value1';

    const result = urlManager.getParam(paramName);

    expect(result).toBe(expectedValue);
  });

  // パラメータが存在しない場合のテスト
  test('getParam should return null when the parameter does not exist', () => {
    const url = 'https://example.com/?param1=value1&param2=value2';
    const urlManager = new URLManager(url);

    const paramName = 'nonexistentParam';

    const result = urlManager.getParam(paramName);

    expect(result).toBeNull();
  });

  // クエリ文字列が存在しない場合のテスト
  test('getParam should return null when there is no query string', () => {
    const url = 'https://example.com';
    const urlManager = new URLManager(url);

    const paramName = 'param1';

    const result = urlManager.getParam(paramName);

    expect(result).toBeNull();
  });
});
