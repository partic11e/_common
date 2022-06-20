/**
 * The global shared enums for the partic11e library.
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
//  #endregion

//  #region type-export-file
//  #endregion

//  #region export-features

/**
 * An enum defining the IntegerEleven recognized types of code-bases.
 *
 * These values may evolve over time.
 */
export enum CodeBaseEnum {
  /**
   * A module.
   */
  Module = "module",

  /**
   * A library.
   */
  Library = "library",

  /**
   * A framework.
   */
  Framework = "framework",

  /**
   * An extension.
   */
  Extension = "extension",

  /**
   * A plugin.
   */
  Plugin = "plugin",

  /**
   * An adapter.
   */
  Adapter = "adapter",

  /**
   * A toolkit.
   */
  Toolkit = "toolkit",

  /**
   * A sdk.
   */
  Sdk = "sdk",

  /**
   * An api.
   */
  Api = "api",

  /**
   * A platform.
   */
  Platform = "platform",
}

/**
 * An enum defining the IntegerEleven recognized types of system operations.
 *
 * These values may evolve over time.
 */
export enum OperationEnum {
  /**
   * A build operation.
   */
  Build = "build",

  /**
   * An OS thread.
   */
  Thread = "thread",

  /**
   * A generic operation.
   */
  Operation = "operation",

  /**
   * A workflow.
   */
  Workflow = "workflow",

  /**
   * A process.
   */
  Process = "process",

  /**
   * An action.
   */
  Action = "action",
}

/**
 * An enum defining the types of TypeScript decorators.
 */
export enum DecoratorEnum {
  /**
   * A class decorator.
   */
  Class = "class",

  /**
   * A method decorator.
   */
  Method = "method",

  /**
   * An accessor decorator.
   */
  Accessor = "accessor",

  /**
   * A property decorator.
   */
  Property = "property",

  /**
   * A parameter decorator.
   */
  Parameter = "parameter",
}

/**
 * An enum defining the types of resources.
 *
 * These values may evolve over time.
 */
export enum ResourceEnum {
  /**
   * A file in a file system.
   */
  File = "file",

  /**
   * A directory in a file system.
   */
  Directory = "directory",
}

/**
 * An enum defining the default formatters.
 *
 * These values may evolve over time.
 */
export enum FormatterEnum {
  /**
   * A date formatter.
   */
  Date = "date",

  /**
   * A number formatter.
   */
  Number = "number",
}

/**
 * An enum defining the default parsers.
 *
 * These values may evolve over time.
 */
export enum ParserEnum {
  /**
   * A JSON parser.
   */
  JSON = "JSON",

  /**
   * A string parser.
   */
  String = "string",
}
//  #endregion

//  #region internal
//  #endregion
