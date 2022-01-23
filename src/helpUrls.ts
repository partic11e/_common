/**
 * Functions for getting versioned help URLs.
 * 
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

import { P11_DOC_BASE, P11_EXCDOC_BASE } from "./_constants.ts";

/**
 * Takes a version string and returns a URL representing the documentation
 * location for the version of the module.
 * 
 * @param version The version string for the module.
 * @returns A URL representing the documentation location for the version
 * of the module.
 */
export const getDocsUrl = (version?: string): string => version ? `${P11_DOC_BASE}/${version}` : P11_DOC_BASE;

/**
 * Takes a version string and returns a URL representing the Exception
 * explanation location for the version of the module.
 * 
 * @param version The version string for the module.
 * @returns A URL representing the Exception explanation location for the
 * version of the module.
 */
export const getExceptionsHelpUrl = (version?: string): string => version ? `${P11_EXCDOC_BASE}/${version}` : P11_EXCDOC_BASE;
