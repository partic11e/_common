/**
 * Test the features of the {@link getDocsUrl}.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { assertEquals, Testing } from "../dev_deps.ts";
//  #endregion

//  #region feature-import-local
import { getDocsUrl } from "../mod.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
const { TestSuite, TestCase, Test } = Testing.decorators;
//  #endregion

//  #region test-fixture-import
import { P11_DOC_BASE } from "../src/_internals/_constants.ts";
//  #endregion

//  #region tests
@TestSuite("getDocsUrl")
class getDocsUrlTest {
  @Test("(module: string)")
  @TestCase(
    ["common"],
    ["exceptions"],
  )
  public testWithModule([moduleName]: [string]) {
    const url = getDocsUrl(moduleName);
    assertEquals(url, `${P11_DOC_BASE}${moduleName}/@latest/`);
  }

  @Test("(version)")
  @TestCase(
    ["common", "0.1.0"],
    ["common", "1.0.0-alpha.1"],
    ["exceptions", "0.1.0"],
    ["exceptions", "1.0.0-alpha.1"],
  )
  public testWithVersion([moduleName, version]: [string, string]) {
    const url = getDocsUrl(moduleName, version);
    assertEquals(url, `${P11_DOC_BASE}${moduleName}/${version}/`);
  }
}
//  #endregion

Testing(getDocsUrlTest);
