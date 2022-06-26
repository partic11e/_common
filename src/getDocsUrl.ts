/**
 * Contains the getDocsUrl function and associated types.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  #region feature-import-remote
//  #endregion

//  #region feature-import-local
import { P11_DOC_BASE } from "./_internals/_constants.ts";
//  #endregion

//  #region type-import-remote
//  #endregion

//  #region type-import-local
//  #endregion

//  #region constants-local
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features
/**
 * Takes a module name, and an optional version string, and returns a URL representing the documentation
 * location for the version of the module.
 *
 * @param moduleName The name of the module.
 * @param version The version string for the module. Defaults to `"@latest"`.
 * @returns A URL representing the documentation location for the version
 * of the module.
 */
export const getDocsUrl = (moduleName: string, version = "@latest"): string =>
  `${P11_DOC_BASE}${moduleName}/${version}/`;
//  #endregion

//  #region internal
//  #endregion
