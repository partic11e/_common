/**
 * Test the features of the {@link getExceptionsHelpUrl}.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
import { assertEquals, Testing } from "../dev_deps.ts";
//  #endregion

//  #region feature-import-local
import { getExceptionsHelpUrl } from "../mod.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
const { TestSuite, TestCase, Test } = Testing.decorators;
//  #endregion

//  #region test-fixture-import
import { P11_EXCDOC_BASE } from "../src/_internals/_constants.ts";
//  #endregion

//  #region tests
@TestSuite("getExceptionsHelpUrl")
class getExceptionsHelpUrlTest {
  @Test("(exceptionName: string)")
  @TestCase(
    ["Exception"],
    ["KeyValueException"],
  )
  public testWithNoArgs([exceptionName]: [string]) {
    const url = getExceptionsHelpUrl(exceptionName);
    assertEquals(url, `${P11_EXCDOC_BASE}${exceptionName}/@latest`);
  }

  @Test("(version)")
  @TestCase(
    ["Exception", "0.1.0"],
    ["Exception", "1.0.0-alpha.1"],
    ["KeyValueException", "0.1.0"],
    ["KeyValueException", "1.0.0-alpha.1"],
  )
  public testWithVersion([exceptionName, version]: [string, string]) {
    const url = getExceptionsHelpUrl(exceptionName, version);
    assertEquals(url, `${P11_EXCDOC_BASE}${exceptionName}/${version}`);
  }
}
//  #endregion

Testing(getExceptionsHelpUrlTest);
