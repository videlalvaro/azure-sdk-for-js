# API Report Diff for react-native runtime

This file contains only the differences from the Node.js API.
For the complete API surface, see the corresponding -node.api.md file.

```diff
===================================================================
--- NodeJS
+++ react-native
@@ -4,17 +4,17 @@
 
 ```ts
 
 // @public
-export function agentPolicy(agent?: Agent): PipelinePolicy;
+export function agentPolicy(): PipelinePolicy;
 
 // @public
 export const agentPolicyName = "agentPolicy";
 
 // @public
 export function decompressResponsePolicy(): PipelinePolicy;
 
-// @public
+// @public (undocumented)
 export const decompressResponsePolicyName = "decompressResponsePolicy";
 
 // @public
 export function defaultRetryPolicy(options?: DefaultRetryPolicyOptions): PipelinePolicy;
@@ -44,10 +44,10 @@
 
 // @public
 export const formDataPolicyName = "formDataPolicy";
 
-// @public @deprecated
-export function getDefaultProxySettings(proxyUrl?: string): ProxySettings | undefined;
+// @public (undocumented)
+export function getDefaultProxySettings(_proxyUrl?: string): ProxySettings_2 | undefined;
 
 // @public
 export function logPolicy(options?: LogPolicyOptions): PipelinePolicy;
 
@@ -67,13 +67,13 @@
 // @public
 export const multipartPolicyName = "multipartPolicy";
 
 // @public
-export function proxyPolicy(proxySettings?: ProxySettings, options?: {
+export function proxyPolicy(_proxySettings?: ProxySettings_2, _options?: {
     customNoProxyList?: string[];
 }): PipelinePolicy;
 
-// @public
+// @public (undocumented)
 export const proxyPolicyName = "proxyPolicy";
 
 // @public
 export function redirectPolicy(options?: RedirectPolicyOptions): PipelinePolicy;
@@ -130,9 +130,9 @@
 // @public
 export const throttlingRetryPolicyName = "throttlingRetryPolicy";
 
 // @public
-export function tlsPolicy(tlsSettings?: TlsSettings): PipelinePolicy;
+export function tlsPolicy(): PipelinePolicy;
 
 // @public
 export const tlsPolicyName = "tlsPolicy";
 

```