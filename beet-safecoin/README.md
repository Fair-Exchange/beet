# @metaplex-foundation/beet-safecoin

Solana specific extension for beet, the borsh compatible de/serializer

## API

Please find the [API docs here](https://metaplex-foundation.github.io/beet/docs/beet-safecoin).

## Examples

### Using PublicKey Directly

```ts
import { publicKey } from '@metaplex-foundation/beet-safecoin'

const generatedKey  = Keypair.generate().publicKey
const buf = Buffer.alloc(publicKey.byteSize)
beet.write(buf, 0, generatedKey)
beet.read(buf, 0) // same as generatedKey
```

### PublicKey as part of a Struct Configuration

```ts
import * as web3 from '@safecoin/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSafecoin from '@metaplex-foundation/beet-safecoin'

type InstructionArgs = {
  authority: web3.PublicKey
}

const createStruct = new beet.BeetArgsStruct<InstructionArgs>(
  [ 
    ['authority', beetSafecoin.publicKey]
  ],
  'InstructionArgs'
)
```

## LICENSE

Apache-2.0
