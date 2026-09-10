// SPDX-FileCopyrightText: 2026 Sebastien Rousseau <sebastian.rousseau@gmail.com>
// SPDX-License-Identifier: Apache-2.0 OR MIT

export interface DartConfig {
  [key: string]: unknown;
}

declare const config: DartConfig;
export default config;
