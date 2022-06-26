/**
 * Contains the getExceptionsHelpUrl function and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
import { P11_EXCDOC_BASE } from "./_internals/_constants.ts";
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features
/**
 * Takes an exception name, and an optional version string, and returns a URL representing the Exception
 * explanation location for the version of the exception.
 *
 * @param exceptionName The name of the exception.
 * @param version The version string for the exception. Defaults to `"@latest"`.
 * @returns A URL representing the Exception explanation location for the
 * version of the exception.
 */
export const getExceptionsHelpUrl = (
  exceptionName: string,
  version = "@latest",
): string => `${P11_EXCDOC_BASE}${exceptionName}/${version}`;
//  #endregion

//  #region internal
//  #endregion
