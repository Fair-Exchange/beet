import { SupportedTypeDefinition } from '@j0nnyboi/beet'
import { KeysExports, keysTypeMap, KeysTypeMapKey } from './keys'

export * from './keys'

/**
 * @category TypeDefinition
 */
export type BeetSafecoinTypeMapKey = KeysTypeMapKey
/**
 * @category TypeDefinition
 */
export type BeetSafecoinExports = KeysExports

/**
 * Maps safecoin beet exports to metadata which describes in which package it
 * is defined as well as which TypeScript type is used to represent the
 * deserialized value in JavaScript.
 *
 * @category TypeDefinition
 */
export const supportedTypeMap: Record<
  BeetSafecoinTypeMapKey,
  SupportedTypeDefinition & {
    beet: BeetSafecoinExports
  }
> = keysTypeMap
