import { P11_DOC_BASE, P11_EXCDOC_BASE } from "./_constants.ts";

export const getDocsUrl = (version?: string): string => version ? `${P11_DOC_BASE}/${version}` : P11_DOC_BASE;
export const getExceptionsHelpUrl = (version?: string): string => version ? `${P11_EXCDOC_BASE}/${version}` : P11_EXCDOC_BASE;
