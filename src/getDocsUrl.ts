/**
 * Contains the getDocsUrl function and associated types.
 * 
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
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
 * Takes a version string and returns a URL representing the documentation
 * location for the version of the module.
 * 
 * @param version The version string for the module.
 * @returns A URL representing the documentation location for the version
 * of the module.
 */
export const getDocsUrl = (version?: string): string => version ? `${P11_DOC_BASE}/${version}` : P11_DOC_BASE;
//  #endregion

//  #region internal
//  #endregion
