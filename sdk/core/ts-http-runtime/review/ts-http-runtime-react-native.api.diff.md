# API Report Diff for react-native runtime

This file contains only the differences from the Node.js API.
For the complete API surface, see the corresponding -node.api.md file.

```diff
===================================================================
--- NodeJS
+++ react-native
@@ -253,12 +253,12 @@
     kind: "noAuth";
 }
 
 // @public
-export type NodeBuffer = Buffer;
+export type NodeBuffer = never;
 
 // @public
-export type NodeReadableStream = NodeJS.ReadableStream;
+export type NodeReadableStream = never;
 
 // @public
 export interface OAuth2AuthScheme<TFlows extends OAuth2Flow[]> {
     flows: TFlows;
@@ -482,13 +482,18 @@
     put: (options?: RequestParameters) => TResponse;
     trace: (options?: RequestParameters) => TResponse;
 }
 
-// Warning: (ae-forgotten-export) The symbol "RestError_2" needs to be exported by the entry point index.d.ts
-//
 // @public
-export class RestError extends RestError_2 {
+export class RestError extends Error {
     constructor(message: string, options?: RestErrorOptions);
+    code?: string;
+    details?: unknown;
+    static readonly PARSE_ERROR: string;
+    request?: PipelineRequest;
+    static readonly REQUEST_SEND_ERROR: string;
+    response?: PipelineResponse;
+    statusCode?: number;
 }
 
 // @public
 export interface RestErrorOptions {

```