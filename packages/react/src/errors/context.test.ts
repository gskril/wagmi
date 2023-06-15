import { expect, test } from 'vitest'

import { WagmiConfigNotFoundError } from './context.js'

test('WagmiConfigNotFoundError', () => {
  expect(new WagmiConfigNotFoundError()).toMatchInlineSnapshot(`
    [WagmiConfigNotFoundError: \`useConfig\` must be used within \`WagmiConfig\`.

    Version: @wagmi/core@1.0.2]
  `)
})