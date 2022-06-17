/**
 * Contains the getExceptionsHelpUrl function and associated types.
 * 
 * @copyright 2022 IntegerEleven. All rights reserved. MIT license.
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
 * Takes a version string and returns a URL representing the Exception
 * explanation location for the version of the module.
 * 
 * @param version The version string for the module.
 * @returns A URL representing the Exception explanation location for the
 * version of the module.
 */
 export const getExceptionsHelpUrl = (version?: string): string => version ? `${P11_EXCDOC_BASE}/${version}` : P11_EXCDOC_BASE;
//  #endregion

//  #region internal
//  #endregion
