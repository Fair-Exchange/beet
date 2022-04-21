# @metaplex-foundation/beet-safecoin

Safecoin specific extension for beet, the borsh compatible de/serializer

## API

Please find the [API docs here](https://j0nnyboi.github.io/beet/docs/beet-safecoin).

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
import * as beet from '@j0nnyboi/beet'
import * as beetSafecoin from '@j0nnyboi/beet-safecoin'

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
