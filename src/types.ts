/**
 * The global shared types for the particle11 core library.
 * 
 * @copyright 2021-2022 IntegerEleven. All rights reserved. MIT license.
 */

//  TODO: Document types

 export type CodeBaseType =
 | "module"
 | "library"
 | "framework"
 | "extension"
 | "plugin"
 | "adapter"
 | "toolkit"
 | "sdk"
 | "api"
 | "platform"
 | string;

export type OperationType =
 | "build"
 | "thread"
 | "operation"
 | "workflow"
 | "process"
 | "action"
 | string;

export type DecoratorType =
 | "class"
 | "method"
 | "accessor"
 | "property"
 | "parameter"
 | string;

export type ResourceType =
 | "file"
 | "directory"
 | string;

export type FormatterType = 
 | "date"
 | "number"
 | string;

export type ParserType = 
 | "JSON"
 | "string";
