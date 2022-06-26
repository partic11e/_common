/**
 * The global shared types for the partic11e library.
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
//  #endregion

//  #region type-export-file
/**
 * A type representing the string-literals of integer11 recognized types of code-bases.
 *
 * These values may evolve over time.
 */
export type CodeBaseType =
  /**
   * A module.
   */
  | "module"
  /**
   * A library.
   */
  | "library"
  /**
   * A framework.
   */
  | "framework"
  /**
   * An extension.
   */
  | "extension"
  /**
   * A plugin.
   */
  | "plugin"
  /**
   * An adapter.
   */
  | "adapter"
  /**
   * A toolkit.
   */
  | "toolkit"
  /**
   * A sdk.
   */
  | "sdk"
  /**
   * An api.
   */
  | "api"
  /**
   * A platform.
   */
  | "platform";

/**
 * A type representing the string-literals of integer11 recognized types of system operations.
 *
 * These values may evolve over time.
 */
export type OperationType =
  /**
   * A build operation.
   */
  | "build"
  /**
   * An OS thread.
   */
  | "thread"
  /**
   * A generic operation.
   */
  | "operation"
  /**
   * A workflow.
   */
  | "workflow"
  /**
   * A process.
   */
  | "process"
  /**
   * An action.
   */
  | "action";

/**
 * A type representing the string-literals of types of TypeScript decorators.
 */
export type DecoratorType =
  /**
   * A class decorator.
   */
  | "class"
  /**
   * A method decorator.
   */
  | "method"
  /**
   * An accessor decorator.
   */
  | "accessor"
  /**
   * A property decorator.
   */
  | "property"
  /**
   * A parameter decorator.
   */
  | "parameter";

/**
 * A type representing the string-literals of types of resources.
 *
 * These values may evolve over time.
 */
export type ResourceType =
  /**
   * A file in a file system.
   */
  | "file"
  /**
   * A directory in a file system.
   */
  | "directory";

/**
 * A type representing the string-literals of default formatters.
 *
 * These values may evolve over time.
 */
export type FormatterType =
  /**
   * A date formatter.
   */
  | "date"
  /**
   * A number formatter.
   */
  | "number";

/**
 * A type representing the string-literals of default parsers.
 *
 * These values may evolve over time.
 */
export type ParserType =
  /**
   * A JSON parser.
   */
  | "JSON"
  /**
   * A string parser.
   */
  | "string";
//  #endregion

//  #region export-features
//  #endregion
