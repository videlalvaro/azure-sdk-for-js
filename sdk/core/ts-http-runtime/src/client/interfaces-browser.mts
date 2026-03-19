// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse, PathUncheckedResponse } from "./common.js";

/**
 * Http Response which body is a browser ReadableStream
 */
export type HttpBrowserStreamResponse = HttpResponse & {
  /**
   * Streamable body
   */
  body?: ReadableStream<Uint8Array>;
};

/**
 * Defines the type for a method that supports getting the response body as
 * a raw stream. In browser environments, only `asBrowserStream` is available.
 */
export type StreamableMethod<TResponse = PathUncheckedResponse> = PromiseLike<TResponse> & {
  /**
   * Returns the response body as a browser (Web) stream.
   */
  asBrowserStream: () => Promise<HttpBrowserStreamResponse>;
};
