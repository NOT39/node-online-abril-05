
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Projeto
 * 
 */
export type Projeto = $Result.DefaultSelection<Prisma.$ProjetoPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Dislike
 * 
 */
export type Dislike = $Result.DefaultSelection<Prisma.$DislikePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projeto`: Exposes CRUD operations for the **Projeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projetos
    * const projetos = await prisma.projeto.findMany()
    * ```
    */
  get projeto(): Prisma.ProjetoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dislike`: Exposes CRUD operations for the **Dislike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dislikes
    * const dislikes = await prisma.dislike.findMany()
    * ```
    */
  get dislike(): Prisma.DislikeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Projeto: 'Projeto',
    Like: 'Like',
    Dislike: 'Dislike'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "projeto" | "like" | "dislike"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Projeto: {
        payload: Prisma.$ProjetoPayload<ExtArgs>
        fields: Prisma.ProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findFirst: {
            args: Prisma.ProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findMany: {
            args: Prisma.ProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          create: {
            args: Prisma.ProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          createMany: {
            args: Prisma.ProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          delete: {
            args: Prisma.ProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          update: {
            args: Prisma.ProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          deleteMany: {
            args: Prisma.ProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          upsert: {
            args: Prisma.ProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          aggregate: {
            args: Prisma.ProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjeto>
          }
          groupBy: {
            args: Prisma.ProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetoCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Dislike: {
        payload: Prisma.$DislikePayload<ExtArgs>
        fields: Prisma.DislikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DislikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DislikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          findFirst: {
            args: Prisma.DislikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DislikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          findMany: {
            args: Prisma.DislikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>[]
          }
          create: {
            args: Prisma.DislikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          createMany: {
            args: Prisma.DislikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DislikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>[]
          }
          delete: {
            args: Prisma.DislikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          update: {
            args: Prisma.DislikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          deleteMany: {
            args: Prisma.DislikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DislikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DislikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>[]
          }
          upsert: {
            args: Prisma.DislikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DislikePayload>
          }
          aggregate: {
            args: Prisma.DislikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDislike>
          }
          groupBy: {
            args: Prisma.DislikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DislikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DislikeCountArgs<ExtArgs>
            result: $Utils.Optional<DislikeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    projeto?: ProjetoOmit
    like?: LikeOmit
    dislike?: DislikeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    projetos: number
    likes: number
    dislike: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | UsuarioCountOutputTypeCountProjetosArgs
    likes?: boolean | UsuarioCountOutputTypeCountLikesArgs
    dislike?: boolean | UsuarioCountOutputTypeCountDislikeArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountProjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountDislikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DislikeWhereInput
  }


  /**
   * Count Type ProjetoCountOutputType
   */

  export type ProjetoCountOutputType = {
    likes: number
    dislikes: number
  }

  export type ProjetoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | ProjetoCountOutputTypeCountLikesArgs
    dislikes?: boolean | ProjetoCountOutputTypeCountDislikesArgs
  }

  // Custom InputTypes
  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoCountOutputType
     */
    select?: ProjetoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeCountDislikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DislikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    email: string | null
    hash_senha: string | null
    nome: string | null
    ativo: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hash_senha: string | null
    nome: string | null
    ativo: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    hash_senha: number
    nome: number
    ativo: number
    _all: number
  }


  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    hash_senha?: true
    nome?: true
    ativo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    hash_senha?: true
    nome?: true
    ativo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    hash_senha?: true
    nome?: true
    ativo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    email: string
    hash_senha: string
    nome: string | null
    ativo: boolean
    _count: UsuarioCountAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash_senha?: boolean
    nome?: boolean
    ativo?: boolean
    projetos?: boolean | Usuario$projetosArgs<ExtArgs>
    likes?: boolean | Usuario$likesArgs<ExtArgs>
    dislike?: boolean | Usuario$dislikeArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash_senha?: boolean
    nome?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hash_senha?: boolean
    nome?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    hash_senha?: boolean
    nome?: boolean
    ativo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hash_senha" | "nome" | "ativo", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | Usuario$projetosArgs<ExtArgs>
    likes?: boolean | Usuario$likesArgs<ExtArgs>
    dislike?: boolean | Usuario$dislikeArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      projetos: Prisma.$ProjetoPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      dislike: Prisma.$DislikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hash_senha: string
      nome: string | null
      ativo: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projetos<T extends Usuario$projetosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$projetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Usuario$likesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dislike<T extends Usuario$dislikeArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$dislikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly hash_senha: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly ativo: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.projetos
   */
  export type Usuario$projetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    cursor?: ProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Usuario.likes
   */
  export type Usuario$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Usuario.dislike
   */
  export type Usuario$dislikeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    where?: DislikeWhereInput
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    cursor?: DislikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Projeto
   */

  export type AggregateProjeto = {
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  export type ProjetoAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjetoSumAggregateOutputType = {
    id: number | null
  }

  export type ProjetoMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    imagemURL: string | null
    repositorioURL: string | null
    previewURL: string | null
    usuarioId: string | null
  }

  export type ProjetoMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    descricao: string | null
    imagemURL: string | null
    repositorioURL: string | null
    previewURL: string | null
    usuarioId: string | null
  }

  export type ProjetoCountAggregateOutputType = {
    id: number
    titulo: number
    descricao: number
    imagemURL: number
    repositorioURL: number
    previewURL: number
    usuarioId: number
    _all: number
  }


  export type ProjetoAvgAggregateInputType = {
    id?: true
  }

  export type ProjetoSumAggregateInputType = {
    id?: true
  }

  export type ProjetoMinAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagemURL?: true
    repositorioURL?: true
    previewURL?: true
    usuarioId?: true
  }

  export type ProjetoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagemURL?: true
    repositorioURL?: true
    previewURL?: true
    usuarioId?: true
  }

  export type ProjetoCountAggregateInputType = {
    id?: true
    titulo?: true
    descricao?: true
    imagemURL?: true
    repositorioURL?: true
    previewURL?: true
    usuarioId?: true
    _all?: true
  }

  export type ProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projeto to aggregate.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projetos
    **/
    _count?: true | ProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjetoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjetoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetoMaxAggregateInputType
  }

  export type GetProjetoAggregateType<T extends ProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjeto[P]>
      : GetScalarType<T[P], AggregateProjeto[P]>
  }




  export type ProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithAggregationInput | ProjetoOrderByWithAggregationInput[]
    by: ProjetoScalarFieldEnum[] | ProjetoScalarFieldEnum
    having?: ProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetoCountAggregateInputType | true
    _avg?: ProjetoAvgAggregateInputType
    _sum?: ProjetoSumAggregateInputType
    _min?: ProjetoMinAggregateInputType
    _max?: ProjetoMaxAggregateInputType
  }

  export type ProjetoGroupByOutputType = {
    id: number
    titulo: string
    descricao: string | null
    imagemURL: string | null
    repositorioURL: string | null
    previewURL: string | null
    usuarioId: string
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  type GetProjetoGroupByPayload<T extends ProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
        }
      >
    >


  export type ProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemURL?: boolean
    repositorioURL?: boolean
    previewURL?: boolean
    usuarioId?: boolean
    likes?: boolean | Projeto$likesArgs<ExtArgs>
    dislikes?: boolean | Projeto$dislikesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemURL?: boolean
    repositorioURL?: boolean
    previewURL?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemURL?: boolean
    repositorioURL?: boolean
    previewURL?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descricao?: boolean
    imagemURL?: boolean
    repositorioURL?: boolean
    previewURL?: boolean
    usuarioId?: boolean
  }

  export type ProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "descricao" | "imagemURL" | "repositorioURL" | "previewURL" | "usuarioId", ExtArgs["result"]["projeto"]>
  export type ProjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | Projeto$likesArgs<ExtArgs>
    dislikes?: boolean | Projeto$dislikesArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projeto"
    objects: {
      likes: Prisma.$LikePayload<ExtArgs>[]
      dislikes: Prisma.$DislikePayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      descricao: string | null
      imagemURL: string | null
      repositorioURL: string | null
      previewURL: string | null
      usuarioId: string
    }, ExtArgs["result"]["projeto"]>
    composites: {}
  }

  type ProjetoGetPayload<S extends boolean | null | undefined | ProjetoDefaultArgs> = $Result.GetResult<Prisma.$ProjetoPayload, S>

  type ProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetoCountAggregateInputType | true
    }

  export interface ProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projeto'], meta: { name: 'Projeto' } }
    /**
     * Find zero or one Projeto that matches the filter.
     * @param {ProjetoFindUniqueArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetoFindUniqueArgs>(args: SelectSubset<T, ProjetoFindUniqueArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetoFindUniqueOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetoFindFirstArgs>(args?: SelectSubset<T, ProjetoFindFirstArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projetos
     * const projetos = await prisma.projeto.findMany()
     * 
     * // Get first 10 Projetos
     * const projetos = await prisma.projeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetoWithIdOnly = await prisma.projeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetoFindManyArgs>(args?: SelectSubset<T, ProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projeto.
     * @param {ProjetoCreateArgs} args - Arguments to create a Projeto.
     * @example
     * // Create one Projeto
     * const Projeto = await prisma.projeto.create({
     *   data: {
     *     // ... data to create a Projeto
     *   }
     * })
     * 
     */
    create<T extends ProjetoCreateArgs>(args: SelectSubset<T, ProjetoCreateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projetos.
     * @param {ProjetoCreateManyArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetoCreateManyArgs>(args?: SelectSubset<T, ProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projetos and returns the data saved in the database.
     * @param {ProjetoCreateManyAndReturnArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projeto.
     * @param {ProjetoDeleteArgs} args - Arguments to delete one Projeto.
     * @example
     * // Delete one Projeto
     * const Projeto = await prisma.projeto.delete({
     *   where: {
     *     // ... filter to delete one Projeto
     *   }
     * })
     * 
     */
    delete<T extends ProjetoDeleteArgs>(args: SelectSubset<T, ProjetoDeleteArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projeto.
     * @param {ProjetoUpdateArgs} args - Arguments to update one Projeto.
     * @example
     * // Update one Projeto
     * const projeto = await prisma.projeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetoUpdateArgs>(args: SelectSubset<T, ProjetoUpdateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projetos.
     * @param {ProjetoDeleteManyArgs} args - Arguments to filter Projetos to delete.
     * @example
     * // Delete a few Projetos
     * const { count } = await prisma.projeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetoDeleteManyArgs>(args?: SelectSubset<T, ProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetoUpdateManyArgs>(args: SelectSubset<T, ProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos and returns the data updated in the database.
     * @param {ProjetoUpdateManyAndReturnArgs} args - Arguments to update many Projetos.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projeto.
     * @param {ProjetoUpsertArgs} args - Arguments to update or create a Projeto.
     * @example
     * // Update or create a Projeto
     * const projeto = await prisma.projeto.upsert({
     *   create: {
     *     // ... data to create a Projeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projeto we want to update
     *   }
     * })
     */
    upsert<T extends ProjetoUpsertArgs>(args: SelectSubset<T, ProjetoUpsertArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoCountArgs} args - Arguments to filter Projetos to count.
     * @example
     * // Count the number of Projetos
     * const count = await prisma.projeto.count({
     *   where: {
     *     // ... the filter for the Projetos we want to count
     *   }
     * })
    **/
    count<T extends ProjetoCountArgs>(
      args?: Subset<T, ProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjetoAggregateArgs>(args: Subset<T, ProjetoAggregateArgs>): Prisma.PrismaPromise<GetProjetoAggregateType<T>>

    /**
     * Group by Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetoGroupByArgs['orderBy'] }
        : { orderBy?: ProjetoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projeto model
   */
  readonly fields: ProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends Projeto$likesArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dislikes<T extends Projeto$dislikesArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$dislikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projeto model
   */
  interface ProjetoFieldRefs {
    readonly id: FieldRef<"Projeto", 'Int'>
    readonly titulo: FieldRef<"Projeto", 'String'>
    readonly descricao: FieldRef<"Projeto", 'String'>
    readonly imagemURL: FieldRef<"Projeto", 'String'>
    readonly repositorioURL: FieldRef<"Projeto", 'String'>
    readonly previewURL: FieldRef<"Projeto", 'String'>
    readonly usuarioId: FieldRef<"Projeto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Projeto findUnique
   */
  export type ProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findUniqueOrThrow
   */
  export type ProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findFirst
   */
  export type ProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findFirstOrThrow
   */
  export type ProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findMany
   */
  export type ProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projetos to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto create
   */
  export type ProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a Projeto.
     */
    data: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
  }

  /**
   * Projeto createMany
   */
  export type ProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
  }

  /**
   * Projeto createManyAndReturn
   */
  export type ProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto update
   */
  export type ProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a Projeto.
     */
    data: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
    /**
     * Choose, which Projeto to update.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto updateMany
   */
  export type ProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto updateManyAndReturn
   */
  export type ProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projeto upsert
   */
  export type ProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the Projeto to update in case it exists.
     */
    where: ProjetoWhereUniqueInput
    /**
     * In case the Projeto found by the `where` argument doesn't exist, create a new Projeto with this data.
     */
    create: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
    /**
     * In case the Projeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
  }

  /**
   * Projeto delete
   */
  export type ProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter which Projeto to delete.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto deleteMany
   */
  export type ProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projetos to delete
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to delete.
     */
    limit?: number
  }

  /**
   * Projeto.likes
   */
  export type Projeto$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Projeto.dislikes
   */
  export type Projeto$dislikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    where?: DislikeWhereInput
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    cursor?: DislikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Projeto without action
   */
  export type ProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    projetoId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    projetoId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    projetoId: number | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    projetoId: number | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    usuarioId: number
    projetoId: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    projetoId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    projetoId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    usuarioId?: true
    projetoId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    projetoId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    usuarioId?: true
    projetoId?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: number
    usuarioId: string
    projetoId: number
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "projetoId", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      projeto: Prisma.$ProjetoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: string
      projetoId: number
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projeto<T extends ProjetoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjetoDefaultArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'Int'>
    readonly usuarioId: FieldRef<"Like", 'String'>
    readonly projetoId: FieldRef<"Like", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Dislike
   */

  export type AggregateDislike = {
    _count: DislikeCountAggregateOutputType | null
    _avg: DislikeAvgAggregateOutputType | null
    _sum: DislikeSumAggregateOutputType | null
    _min: DislikeMinAggregateOutputType | null
    _max: DislikeMaxAggregateOutputType | null
  }

  export type DislikeAvgAggregateOutputType = {
    id: number | null
    projetoId: number | null
  }

  export type DislikeSumAggregateOutputType = {
    id: number | null
    projetoId: number | null
  }

  export type DislikeMinAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    projetoId: number | null
  }

  export type DislikeMaxAggregateOutputType = {
    id: number | null
    usuarioId: string | null
    projetoId: number | null
  }

  export type DislikeCountAggregateOutputType = {
    id: number
    usuarioId: number
    projetoId: number
    _all: number
  }


  export type DislikeAvgAggregateInputType = {
    id?: true
    projetoId?: true
  }

  export type DislikeSumAggregateInputType = {
    id?: true
    projetoId?: true
  }

  export type DislikeMinAggregateInputType = {
    id?: true
    usuarioId?: true
    projetoId?: true
  }

  export type DislikeMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    projetoId?: true
  }

  export type DislikeCountAggregateInputType = {
    id?: true
    usuarioId?: true
    projetoId?: true
    _all?: true
  }

  export type DislikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dislike to aggregate.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dislikes
    **/
    _count?: true | DislikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DislikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DislikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DislikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DislikeMaxAggregateInputType
  }

  export type GetDislikeAggregateType<T extends DislikeAggregateArgs> = {
        [P in keyof T & keyof AggregateDislike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDislike[P]>
      : GetScalarType<T[P], AggregateDislike[P]>
  }




  export type DislikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DislikeWhereInput
    orderBy?: DislikeOrderByWithAggregationInput | DislikeOrderByWithAggregationInput[]
    by: DislikeScalarFieldEnum[] | DislikeScalarFieldEnum
    having?: DislikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DislikeCountAggregateInputType | true
    _avg?: DislikeAvgAggregateInputType
    _sum?: DislikeSumAggregateInputType
    _min?: DislikeMinAggregateInputType
    _max?: DislikeMaxAggregateInputType
  }

  export type DislikeGroupByOutputType = {
    id: number
    usuarioId: string
    projetoId: number
    _count: DislikeCountAggregateOutputType | null
    _avg: DislikeAvgAggregateOutputType | null
    _sum: DislikeSumAggregateOutputType | null
    _min: DislikeMinAggregateOutputType | null
    _max: DislikeMaxAggregateOutputType | null
  }

  type GetDislikeGroupByPayload<T extends DislikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DislikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DislikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DislikeGroupByOutputType[P]>
            : GetScalarType<T[P], DislikeGroupByOutputType[P]>
        }
      >
    >


  export type DislikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dislike"]>

  export type DislikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dislike"]>

  export type DislikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dislike"]>

  export type DislikeSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    projetoId?: boolean
  }

  export type DislikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "projetoId", ExtArgs["result"]["dislike"]>
  export type DislikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }
  export type DislikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }
  export type DislikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    projeto?: boolean | ProjetoDefaultArgs<ExtArgs>
  }

  export type $DislikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dislike"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      projeto: Prisma.$ProjetoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: string
      projetoId: number
    }, ExtArgs["result"]["dislike"]>
    composites: {}
  }

  type DislikeGetPayload<S extends boolean | null | undefined | DislikeDefaultArgs> = $Result.GetResult<Prisma.$DislikePayload, S>

  type DislikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DislikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DislikeCountAggregateInputType | true
    }

  export interface DislikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dislike'], meta: { name: 'Dislike' } }
    /**
     * Find zero or one Dislike that matches the filter.
     * @param {DislikeFindUniqueArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DislikeFindUniqueArgs>(args: SelectSubset<T, DislikeFindUniqueArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dislike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DislikeFindUniqueOrThrowArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DislikeFindUniqueOrThrowArgs>(args: SelectSubset<T, DislikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dislike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeFindFirstArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DislikeFindFirstArgs>(args?: SelectSubset<T, DislikeFindFirstArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dislike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeFindFirstOrThrowArgs} args - Arguments to find a Dislike
     * @example
     * // Get one Dislike
     * const dislike = await prisma.dislike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DislikeFindFirstOrThrowArgs>(args?: SelectSubset<T, DislikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dislikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dislikes
     * const dislikes = await prisma.dislike.findMany()
     * 
     * // Get first 10 Dislikes
     * const dislikes = await prisma.dislike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dislikeWithIdOnly = await prisma.dislike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DislikeFindManyArgs>(args?: SelectSubset<T, DislikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dislike.
     * @param {DislikeCreateArgs} args - Arguments to create a Dislike.
     * @example
     * // Create one Dislike
     * const Dislike = await prisma.dislike.create({
     *   data: {
     *     // ... data to create a Dislike
     *   }
     * })
     * 
     */
    create<T extends DislikeCreateArgs>(args: SelectSubset<T, DislikeCreateArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dislikes.
     * @param {DislikeCreateManyArgs} args - Arguments to create many Dislikes.
     * @example
     * // Create many Dislikes
     * const dislike = await prisma.dislike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DislikeCreateManyArgs>(args?: SelectSubset<T, DislikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dislikes and returns the data saved in the database.
     * @param {DislikeCreateManyAndReturnArgs} args - Arguments to create many Dislikes.
     * @example
     * // Create many Dislikes
     * const dislike = await prisma.dislike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dislikes and only return the `id`
     * const dislikeWithIdOnly = await prisma.dislike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DislikeCreateManyAndReturnArgs>(args?: SelectSubset<T, DislikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dislike.
     * @param {DislikeDeleteArgs} args - Arguments to delete one Dislike.
     * @example
     * // Delete one Dislike
     * const Dislike = await prisma.dislike.delete({
     *   where: {
     *     // ... filter to delete one Dislike
     *   }
     * })
     * 
     */
    delete<T extends DislikeDeleteArgs>(args: SelectSubset<T, DislikeDeleteArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dislike.
     * @param {DislikeUpdateArgs} args - Arguments to update one Dislike.
     * @example
     * // Update one Dislike
     * const dislike = await prisma.dislike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DislikeUpdateArgs>(args: SelectSubset<T, DislikeUpdateArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dislikes.
     * @param {DislikeDeleteManyArgs} args - Arguments to filter Dislikes to delete.
     * @example
     * // Delete a few Dislikes
     * const { count } = await prisma.dislike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DislikeDeleteManyArgs>(args?: SelectSubset<T, DislikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dislikes
     * const dislike = await prisma.dislike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DislikeUpdateManyArgs>(args: SelectSubset<T, DislikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dislikes and returns the data updated in the database.
     * @param {DislikeUpdateManyAndReturnArgs} args - Arguments to update many Dislikes.
     * @example
     * // Update many Dislikes
     * const dislike = await prisma.dislike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dislikes and only return the `id`
     * const dislikeWithIdOnly = await prisma.dislike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DislikeUpdateManyAndReturnArgs>(args: SelectSubset<T, DislikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dislike.
     * @param {DislikeUpsertArgs} args - Arguments to update or create a Dislike.
     * @example
     * // Update or create a Dislike
     * const dislike = await prisma.dislike.upsert({
     *   create: {
     *     // ... data to create a Dislike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dislike we want to update
     *   }
     * })
     */
    upsert<T extends DislikeUpsertArgs>(args: SelectSubset<T, DislikeUpsertArgs<ExtArgs>>): Prisma__DislikeClient<$Result.GetResult<Prisma.$DislikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dislikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeCountArgs} args - Arguments to filter Dislikes to count.
     * @example
     * // Count the number of Dislikes
     * const count = await prisma.dislike.count({
     *   where: {
     *     // ... the filter for the Dislikes we want to count
     *   }
     * })
    **/
    count<T extends DislikeCountArgs>(
      args?: Subset<T, DislikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DislikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dislike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DislikeAggregateArgs>(args: Subset<T, DislikeAggregateArgs>): Prisma.PrismaPromise<GetDislikeAggregateType<T>>

    /**
     * Group by Dislike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DislikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DislikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DislikeGroupByArgs['orderBy'] }
        : { orderBy?: DislikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DislikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDislikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dislike model
   */
  readonly fields: DislikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dislike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DislikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projeto<T extends ProjetoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjetoDefaultArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dislike model
   */
  interface DislikeFieldRefs {
    readonly id: FieldRef<"Dislike", 'Int'>
    readonly usuarioId: FieldRef<"Dislike", 'String'>
    readonly projetoId: FieldRef<"Dislike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dislike findUnique
   */
  export type DislikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike findUniqueOrThrow
   */
  export type DislikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike findFirst
   */
  export type DislikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dislikes.
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dislikes.
     */
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Dislike findFirstOrThrow
   */
  export type DislikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislike to fetch.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dislikes.
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dislikes.
     */
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Dislike findMany
   */
  export type DislikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter, which Dislikes to fetch.
     */
    where?: DislikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dislikes to fetch.
     */
    orderBy?: DislikeOrderByWithRelationInput | DislikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dislikes.
     */
    cursor?: DislikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dislikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dislikes.
     */
    skip?: number
    distinct?: DislikeScalarFieldEnum | DislikeScalarFieldEnum[]
  }

  /**
   * Dislike create
   */
  export type DislikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Dislike.
     */
    data: XOR<DislikeCreateInput, DislikeUncheckedCreateInput>
  }

  /**
   * Dislike createMany
   */
  export type DislikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dislikes.
     */
    data: DislikeCreateManyInput | DislikeCreateManyInput[]
  }

  /**
   * Dislike createManyAndReturn
   */
  export type DislikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * The data used to create many Dislikes.
     */
    data: DislikeCreateManyInput | DislikeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dislike update
   */
  export type DislikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Dislike.
     */
    data: XOR<DislikeUpdateInput, DislikeUncheckedUpdateInput>
    /**
     * Choose, which Dislike to update.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike updateMany
   */
  export type DislikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dislikes.
     */
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyInput>
    /**
     * Filter which Dislikes to update
     */
    where?: DislikeWhereInput
    /**
     * Limit how many Dislikes to update.
     */
    limit?: number
  }

  /**
   * Dislike updateManyAndReturn
   */
  export type DislikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * The data used to update Dislikes.
     */
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyInput>
    /**
     * Filter which Dislikes to update
     */
    where?: DislikeWhereInput
    /**
     * Limit how many Dislikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dislike upsert
   */
  export type DislikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Dislike to update in case it exists.
     */
    where: DislikeWhereUniqueInput
    /**
     * In case the Dislike found by the `where` argument doesn't exist, create a new Dislike with this data.
     */
    create: XOR<DislikeCreateInput, DislikeUncheckedCreateInput>
    /**
     * In case the Dislike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DislikeUpdateInput, DislikeUncheckedUpdateInput>
  }

  /**
   * Dislike delete
   */
  export type DislikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
    /**
     * Filter which Dislike to delete.
     */
    where: DislikeWhereUniqueInput
  }

  /**
   * Dislike deleteMany
   */
  export type DislikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dislikes to delete
     */
    where?: DislikeWhereInput
    /**
     * Limit how many Dislikes to delete.
     */
    limit?: number
  }

  /**
   * Dislike without action
   */
  export type DislikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dislike
     */
    select?: DislikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dislike
     */
    omit?: DislikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DislikeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hash_senha: 'hash_senha',
    nome: 'nome',
    ativo: 'ativo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const ProjetoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descricao: 'descricao',
    imagemURL: 'imagemURL',
    repositorioURL: 'repositorioURL',
    previewURL: 'previewURL',
    usuarioId: 'usuarioId'
  };

  export type ProjetoScalarFieldEnum = (typeof ProjetoScalarFieldEnum)[keyof typeof ProjetoScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    projetoId: 'projetoId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const DislikeScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    projetoId: 'projetoId'
  };

  export type DislikeScalarFieldEnum = (typeof DislikeScalarFieldEnum)[keyof typeof DislikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    hash_senha?: StringFilter<"Usuario"> | string
    nome?: StringNullableFilter<"Usuario"> | string | null
    ativo?: BoolFilter<"Usuario"> | boolean
    projetos?: ProjetoListRelationFilter
    likes?: LikeListRelationFilter
    dislike?: DislikeListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    nome?: SortOrderInput | SortOrder
    ativo?: SortOrder
    projetos?: ProjetoOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    dislike?: DislikeOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    hash_senha?: StringFilter<"Usuario"> | string
    nome?: StringNullableFilter<"Usuario"> | string | null
    ativo?: BoolFilter<"Usuario"> | boolean
    projetos?: ProjetoListRelationFilter
    likes?: LikeListRelationFilter
    dislike?: DislikeListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    nome?: SortOrderInput | SortOrder
    ativo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    hash_senha?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    ativo?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type ProjetoWhereInput = {
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    id?: IntFilter<"Projeto"> | number
    titulo?: StringFilter<"Projeto"> | string
    descricao?: StringNullableFilter<"Projeto"> | string | null
    imagemURL?: StringNullableFilter<"Projeto"> | string | null
    repositorioURL?: StringNullableFilter<"Projeto"> | string | null
    previewURL?: StringNullableFilter<"Projeto"> | string | null
    usuarioId?: StringFilter<"Projeto"> | string
    likes?: LikeListRelationFilter
    dislikes?: DislikeListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ProjetoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    imagemURL?: SortOrderInput | SortOrder
    repositorioURL?: SortOrderInput | SortOrder
    previewURL?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    likes?: LikeOrderByRelationAggregateInput
    dislikes?: DislikeOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    titulo?: StringFilter<"Projeto"> | string
    descricao?: StringNullableFilter<"Projeto"> | string | null
    imagemURL?: StringNullableFilter<"Projeto"> | string | null
    repositorioURL?: StringNullableFilter<"Projeto"> | string | null
    previewURL?: StringNullableFilter<"Projeto"> | string | null
    usuarioId?: StringFilter<"Projeto"> | string
    likes?: LikeListRelationFilter
    dislikes?: DislikeListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrderInput | SortOrder
    imagemURL?: SortOrderInput | SortOrder
    repositorioURL?: SortOrderInput | SortOrder
    previewURL?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    _count?: ProjetoCountOrderByAggregateInput
    _avg?: ProjetoAvgOrderByAggregateInput
    _max?: ProjetoMaxOrderByAggregateInput
    _min?: ProjetoMinOrderByAggregateInput
    _sum?: ProjetoSumOrderByAggregateInput
  }

  export type ProjetoScalarWhereWithAggregatesInput = {
    AND?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    OR?: ProjetoScalarWhereWithAggregatesInput[]
    NOT?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projeto"> | number
    titulo?: StringWithAggregatesFilter<"Projeto"> | string
    descricao?: StringNullableWithAggregatesFilter<"Projeto"> | string | null
    imagemURL?: StringNullableWithAggregatesFilter<"Projeto"> | string | null
    repositorioURL?: StringNullableWithAggregatesFilter<"Projeto"> | string | null
    previewURL?: StringNullableWithAggregatesFilter<"Projeto"> | string | null
    usuarioId?: StringWithAggregatesFilter<"Projeto"> | string
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: IntFilter<"Like"> | number
    usuarioId?: StringFilter<"Like"> | string
    projetoId?: IntFilter<"Like"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    projeto?: ProjetoOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    usuarioId?: StringFilter<"Like"> | string
    projetoId?: IntFilter<"Like"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
  }, "id">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Like"> | number
    usuarioId?: StringWithAggregatesFilter<"Like"> | string
    projetoId?: IntWithAggregatesFilter<"Like"> | number
  }

  export type DislikeWhereInput = {
    AND?: DislikeWhereInput | DislikeWhereInput[]
    OR?: DislikeWhereInput[]
    NOT?: DislikeWhereInput | DislikeWhereInput[]
    id?: IntFilter<"Dislike"> | number
    usuarioId?: StringFilter<"Dislike"> | string
    projetoId?: IntFilter<"Dislike"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
  }

  export type DislikeOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    projeto?: ProjetoOrderByWithRelationInput
  }

  export type DislikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DislikeWhereInput | DislikeWhereInput[]
    OR?: DislikeWhereInput[]
    NOT?: DislikeWhereInput | DislikeWhereInput[]
    usuarioId?: StringFilter<"Dislike"> | string
    projetoId?: IntFilter<"Dislike"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    projeto?: XOR<ProjetoScalarRelationFilter, ProjetoWhereInput>
  }, "id">

  export type DislikeOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
    _count?: DislikeCountOrderByAggregateInput
    _avg?: DislikeAvgOrderByAggregateInput
    _max?: DislikeMaxOrderByAggregateInput
    _min?: DislikeMinOrderByAggregateInput
    _sum?: DislikeSumOrderByAggregateInput
  }

  export type DislikeScalarWhereWithAggregatesInput = {
    AND?: DislikeScalarWhereWithAggregatesInput | DislikeScalarWhereWithAggregatesInput[]
    OR?: DislikeScalarWhereWithAggregatesInput[]
    NOT?: DislikeScalarWhereWithAggregatesInput | DislikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dislike"> | number
    usuarioId?: StringWithAggregatesFilter<"Dislike"> | string
    projetoId?: IntWithAggregatesFilter<"Dislike"> | number
  }

  export type UsuarioCreateInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    projetos?: ProjetoCreateNestedManyWithoutUsuarioInput
    likes?: LikeCreateNestedManyWithoutUsuarioInput
    dislike?: DislikeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    projetos?: ProjetoUncheckedCreateNestedManyWithoutUsuarioInput
    likes?: LikeUncheckedCreateNestedManyWithoutUsuarioInput
    dislike?: DislikeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUpdateManyWithoutUsuarioNestedInput
    likes?: LikeUpdateManyWithoutUsuarioNestedInput
    dislike?: DislikeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUncheckedUpdateManyWithoutUsuarioNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUsuarioNestedInput
    dislike?: DislikeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjetoCreateInput = {
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    likes?: LikeCreateNestedManyWithoutProjetoInput
    dislikes?: DislikeCreateNestedManyWithoutProjetoInput
    usuario: UsuarioCreateNestedOneWithoutProjetosInput
  }

  export type ProjetoUncheckedCreateInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    usuarioId: string
    likes?: LikeUncheckedCreateNestedManyWithoutProjetoInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikeUpdateManyWithoutProjetoNestedInput
    dislikes?: DislikeUpdateManyWithoutProjetoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type ProjetoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    likes?: LikeUncheckedUpdateManyWithoutProjetoNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoCreateManyInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    usuarioId: string
  }

  export type ProjetoUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjetoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutLikesInput
    projeto: ProjetoCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: number
    usuarioId: string
    projetoId: number
  }

  export type LikeUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutLikesNestedInput
    projeto?: ProjetoUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateManyInput = {
    id?: number
    usuarioId: string
    projetoId: number
  }

  export type LikeUpdateManyMutationInput = {

  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type DislikeCreateInput = {
    usuario: UsuarioCreateNestedOneWithoutDislikeInput
    projeto: ProjetoCreateNestedOneWithoutDislikesInput
  }

  export type DislikeUncheckedCreateInput = {
    id?: number
    usuarioId: string
    projetoId: number
  }

  export type DislikeUpdateInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutDislikeNestedInput
    projeto?: ProjetoUpdateOneRequiredWithoutDislikesNestedInput
  }

  export type DislikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type DislikeCreateManyInput = {
    id?: number
    usuarioId: string
    projetoId: number
  }

  export type DislikeUpdateManyMutationInput = {

  }

  export type DislikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjetoListRelationFilter = {
    every?: ProjetoWhereInput
    some?: ProjetoWhereInput
    none?: ProjetoWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type DislikeListRelationFilter = {
    every?: DislikeWhereInput
    some?: DislikeWhereInput
    none?: DislikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjetoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DislikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hash_senha?: SortOrder
    nome?: SortOrder
    ativo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type ProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemURL?: SortOrder
    repositorioURL?: SortOrder
    previewURL?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemURL?: SortOrder
    repositorioURL?: SortOrder
    previewURL?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    imagemURL?: SortOrder
    repositorioURL?: SortOrder
    previewURL?: SortOrder
    usuarioId?: SortOrder
  }

  export type ProjetoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProjetoScalarRelationFilter = {
    is?: ProjetoWhereInput
    isNot?: ProjetoWhereInput
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
  }

  export type DislikeCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
  }

  export type DislikeAvgOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
  }

  export type DislikeMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
  }

  export type DislikeMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    projetoId?: SortOrder
  }

  export type DislikeSumOrderByAggregateInput = {
    id?: SortOrder
    projetoId?: SortOrder
  }

  export type ProjetoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioInput, ProjetoUncheckedCreateWithoutUsuarioInput> | ProjetoCreateWithoutUsuarioInput[] | ProjetoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioInput | ProjetoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProjetoCreateManyUsuarioInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LikeCreateWithoutUsuarioInput, LikeUncheckedCreateWithoutUsuarioInput> | LikeCreateWithoutUsuarioInput[] | LikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUsuarioInput | LikeCreateOrConnectWithoutUsuarioInput[]
    createMany?: LikeCreateManyUsuarioInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DislikeCreateWithoutUsuarioInput, DislikeUncheckedCreateWithoutUsuarioInput> | DislikeCreateWithoutUsuarioInput[] | DislikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUsuarioInput | DislikeCreateOrConnectWithoutUsuarioInput[]
    createMany?: DislikeCreateManyUsuarioInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type ProjetoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioInput, ProjetoUncheckedCreateWithoutUsuarioInput> | ProjetoCreateWithoutUsuarioInput[] | ProjetoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioInput | ProjetoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ProjetoCreateManyUsuarioInputEnvelope
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<LikeCreateWithoutUsuarioInput, LikeUncheckedCreateWithoutUsuarioInput> | LikeCreateWithoutUsuarioInput[] | LikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUsuarioInput | LikeCreateOrConnectWithoutUsuarioInput[]
    createMany?: LikeCreateManyUsuarioInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<DislikeCreateWithoutUsuarioInput, DislikeUncheckedCreateWithoutUsuarioInput> | DislikeCreateWithoutUsuarioInput[] | DislikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUsuarioInput | DislikeCreateOrConnectWithoutUsuarioInput[]
    createMany?: DislikeCreateManyUsuarioInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjetoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioInput, ProjetoUncheckedCreateWithoutUsuarioInput> | ProjetoCreateWithoutUsuarioInput[] | ProjetoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioInput | ProjetoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutUsuarioInput | ProjetoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProjetoCreateManyUsuarioInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutUsuarioInput | ProjetoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutUsuarioInput | ProjetoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LikeCreateWithoutUsuarioInput, LikeUncheckedCreateWithoutUsuarioInput> | LikeCreateWithoutUsuarioInput[] | LikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUsuarioInput | LikeCreateOrConnectWithoutUsuarioInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUsuarioInput | LikeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LikeCreateManyUsuarioInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUsuarioInput | LikeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUsuarioInput | LikeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DislikeCreateWithoutUsuarioInput, DislikeUncheckedCreateWithoutUsuarioInput> | DislikeCreateWithoutUsuarioInput[] | DislikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUsuarioInput | DislikeCreateOrConnectWithoutUsuarioInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutUsuarioInput | DislikeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DislikeCreateManyUsuarioInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutUsuarioInput | DislikeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutUsuarioInput | DislikeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type ProjetoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ProjetoCreateWithoutUsuarioInput, ProjetoUncheckedCreateWithoutUsuarioInput> | ProjetoCreateWithoutUsuarioInput[] | ProjetoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutUsuarioInput | ProjetoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutUsuarioInput | ProjetoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ProjetoCreateManyUsuarioInputEnvelope
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutUsuarioInput | ProjetoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutUsuarioInput | ProjetoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<LikeCreateWithoutUsuarioInput, LikeUncheckedCreateWithoutUsuarioInput> | LikeCreateWithoutUsuarioInput[] | LikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUsuarioInput | LikeCreateOrConnectWithoutUsuarioInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUsuarioInput | LikeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: LikeCreateManyUsuarioInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUsuarioInput | LikeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUsuarioInput | LikeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<DislikeCreateWithoutUsuarioInput, DislikeUncheckedCreateWithoutUsuarioInput> | DislikeCreateWithoutUsuarioInput[] | DislikeUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutUsuarioInput | DislikeCreateOrConnectWithoutUsuarioInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutUsuarioInput | DislikeUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: DislikeCreateManyUsuarioInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutUsuarioInput | DislikeUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutUsuarioInput | DislikeUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type LikeCreateNestedManyWithoutProjetoInput = {
    create?: XOR<LikeCreateWithoutProjetoInput, LikeUncheckedCreateWithoutProjetoInput> | LikeCreateWithoutProjetoInput[] | LikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProjetoInput | LikeCreateOrConnectWithoutProjetoInput[]
    createMany?: LikeCreateManyProjetoInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeCreateNestedManyWithoutProjetoInput = {
    create?: XOR<DislikeCreateWithoutProjetoInput, DislikeUncheckedCreateWithoutProjetoInput> | DislikeCreateWithoutProjetoInput[] | DislikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutProjetoInput | DislikeCreateOrConnectWithoutProjetoInput[]
    createMany?: DislikeCreateManyProjetoInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutProjetosInput = {
    create?: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProjetosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type LikeUncheckedCreateNestedManyWithoutProjetoInput = {
    create?: XOR<LikeCreateWithoutProjetoInput, LikeUncheckedCreateWithoutProjetoInput> | LikeCreateWithoutProjetoInput[] | LikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProjetoInput | LikeCreateOrConnectWithoutProjetoInput[]
    createMany?: LikeCreateManyProjetoInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type DislikeUncheckedCreateNestedManyWithoutProjetoInput = {
    create?: XOR<DislikeCreateWithoutProjetoInput, DislikeUncheckedCreateWithoutProjetoInput> | DislikeCreateWithoutProjetoInput[] | DislikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutProjetoInput | DislikeCreateOrConnectWithoutProjetoInput[]
    createMany?: DislikeCreateManyProjetoInputEnvelope
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
  }

  export type LikeUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<LikeCreateWithoutProjetoInput, LikeUncheckedCreateWithoutProjetoInput> | LikeCreateWithoutProjetoInput[] | LikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProjetoInput | LikeCreateOrConnectWithoutProjetoInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutProjetoInput | LikeUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: LikeCreateManyProjetoInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutProjetoInput | LikeUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutProjetoInput | LikeUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<DislikeCreateWithoutProjetoInput, DislikeUncheckedCreateWithoutProjetoInput> | DislikeCreateWithoutProjetoInput[] | DislikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutProjetoInput | DislikeCreateOrConnectWithoutProjetoInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutProjetoInput | DislikeUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: DislikeCreateManyProjetoInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutProjetoInput | DislikeUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutProjetoInput | DislikeUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutProjetosNestedInput = {
    create?: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutProjetosInput
    upsert?: UsuarioUpsertWithoutProjetosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutProjetosInput, UsuarioUpdateWithoutProjetosInput>, UsuarioUncheckedUpdateWithoutProjetosInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LikeUncheckedUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<LikeCreateWithoutProjetoInput, LikeUncheckedCreateWithoutProjetoInput> | LikeCreateWithoutProjetoInput[] | LikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutProjetoInput | LikeCreateOrConnectWithoutProjetoInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutProjetoInput | LikeUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: LikeCreateManyProjetoInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutProjetoInput | LikeUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutProjetoInput | LikeUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type DislikeUncheckedUpdateManyWithoutProjetoNestedInput = {
    create?: XOR<DislikeCreateWithoutProjetoInput, DislikeUncheckedCreateWithoutProjetoInput> | DislikeCreateWithoutProjetoInput[] | DislikeUncheckedCreateWithoutProjetoInput[]
    connectOrCreate?: DislikeCreateOrConnectWithoutProjetoInput | DislikeCreateOrConnectWithoutProjetoInput[]
    upsert?: DislikeUpsertWithWhereUniqueWithoutProjetoInput | DislikeUpsertWithWhereUniqueWithoutProjetoInput[]
    createMany?: DislikeCreateManyProjetoInputEnvelope
    set?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    disconnect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    delete?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    connect?: DislikeWhereUniqueInput | DislikeWhereUniqueInput[]
    update?: DislikeUpdateWithWhereUniqueWithoutProjetoInput | DislikeUpdateWithWhereUniqueWithoutProjetoInput[]
    updateMany?: DislikeUpdateManyWithWhereWithoutProjetoInput | DislikeUpdateManyWithWhereWithoutProjetoInput[]
    deleteMany?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutLikesInput = {
    create?: XOR<UsuarioCreateWithoutLikesInput, UsuarioUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLikesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProjetoCreateNestedOneWithoutLikesInput = {
    create?: XOR<ProjetoCreateWithoutLikesInput, ProjetoUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutLikesInput
    connect?: ProjetoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UsuarioCreateWithoutLikesInput, UsuarioUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutLikesInput
    upsert?: UsuarioUpsertWithoutLikesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutLikesInput, UsuarioUpdateWithoutLikesInput>, UsuarioUncheckedUpdateWithoutLikesInput>
  }

  export type ProjetoUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ProjetoCreateWithoutLikesInput, ProjetoUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutLikesInput
    upsert?: ProjetoUpsertWithoutLikesInput
    connect?: ProjetoWhereUniqueInput
    update?: XOR<XOR<ProjetoUpdateToOneWithWhereWithoutLikesInput, ProjetoUpdateWithoutLikesInput>, ProjetoUncheckedUpdateWithoutLikesInput>
  }

  export type UsuarioCreateNestedOneWithoutDislikeInput = {
    create?: XOR<UsuarioCreateWithoutDislikeInput, UsuarioUncheckedCreateWithoutDislikeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDislikeInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ProjetoCreateNestedOneWithoutDislikesInput = {
    create?: XOR<ProjetoCreateWithoutDislikesInput, ProjetoUncheckedCreateWithoutDislikesInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutDislikesInput
    connect?: ProjetoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutDislikeNestedInput = {
    create?: XOR<UsuarioCreateWithoutDislikeInput, UsuarioUncheckedCreateWithoutDislikeInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutDislikeInput
    upsert?: UsuarioUpsertWithoutDislikeInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutDislikeInput, UsuarioUpdateWithoutDislikeInput>, UsuarioUncheckedUpdateWithoutDislikeInput>
  }

  export type ProjetoUpdateOneRequiredWithoutDislikesNestedInput = {
    create?: XOR<ProjetoCreateWithoutDislikesInput, ProjetoUncheckedCreateWithoutDislikesInput>
    connectOrCreate?: ProjetoCreateOrConnectWithoutDislikesInput
    upsert?: ProjetoUpsertWithoutDislikesInput
    connect?: ProjetoWhereUniqueInput
    update?: XOR<XOR<ProjetoUpdateToOneWithWhereWithoutDislikesInput, ProjetoUpdateWithoutDislikesInput>, ProjetoUncheckedUpdateWithoutDislikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProjetoCreateWithoutUsuarioInput = {
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    likes?: LikeCreateNestedManyWithoutProjetoInput
    dislikes?: DislikeCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    likes?: LikeUncheckedCreateNestedManyWithoutProjetoInput
    dislikes?: DislikeUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutUsuarioInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutUsuarioInput, ProjetoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProjetoCreateManyUsuarioInputEnvelope = {
    data: ProjetoCreateManyUsuarioInput | ProjetoCreateManyUsuarioInput[]
  }

  export type LikeCreateWithoutUsuarioInput = {
    projeto: ProjetoCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUsuarioInput = {
    id?: number
    projetoId: number
  }

  export type LikeCreateOrConnectWithoutUsuarioInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUsuarioInput, LikeUncheckedCreateWithoutUsuarioInput>
  }

  export type LikeCreateManyUsuarioInputEnvelope = {
    data: LikeCreateManyUsuarioInput | LikeCreateManyUsuarioInput[]
  }

  export type DislikeCreateWithoutUsuarioInput = {
    projeto: ProjetoCreateNestedOneWithoutDislikesInput
  }

  export type DislikeUncheckedCreateWithoutUsuarioInput = {
    id?: number
    projetoId: number
  }

  export type DislikeCreateOrConnectWithoutUsuarioInput = {
    where: DislikeWhereUniqueInput
    create: XOR<DislikeCreateWithoutUsuarioInput, DislikeUncheckedCreateWithoutUsuarioInput>
  }

  export type DislikeCreateManyUsuarioInputEnvelope = {
    data: DislikeCreateManyUsuarioInput | DislikeCreateManyUsuarioInput[]
  }

  export type ProjetoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ProjetoWhereUniqueInput
    update: XOR<ProjetoUpdateWithoutUsuarioInput, ProjetoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ProjetoCreateWithoutUsuarioInput, ProjetoUncheckedCreateWithoutUsuarioInput>
  }

  export type ProjetoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ProjetoWhereUniqueInput
    data: XOR<ProjetoUpdateWithoutUsuarioInput, ProjetoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ProjetoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ProjetoScalarWhereInput
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ProjetoScalarWhereInput = {
    AND?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    OR?: ProjetoScalarWhereInput[]
    NOT?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    id?: IntFilter<"Projeto"> | number
    titulo?: StringFilter<"Projeto"> | string
    descricao?: StringNullableFilter<"Projeto"> | string | null
    imagemURL?: StringNullableFilter<"Projeto"> | string | null
    repositorioURL?: StringNullableFilter<"Projeto"> | string | null
    previewURL?: StringNullableFilter<"Projeto"> | string | null
    usuarioId?: StringFilter<"Projeto"> | string
  }

  export type LikeUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUsuarioInput, LikeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<LikeCreateWithoutUsuarioInput, LikeUncheckedCreateWithoutUsuarioInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUsuarioInput, LikeUncheckedUpdateWithoutUsuarioInput>
  }

  export type LikeUpdateManyWithWhereWithoutUsuarioInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: IntFilter<"Like"> | number
    usuarioId?: StringFilter<"Like"> | string
    projetoId?: IntFilter<"Like"> | number
  }

  export type DislikeUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: DislikeWhereUniqueInput
    update: XOR<DislikeUpdateWithoutUsuarioInput, DislikeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<DislikeCreateWithoutUsuarioInput, DislikeUncheckedCreateWithoutUsuarioInput>
  }

  export type DislikeUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: DislikeWhereUniqueInput
    data: XOR<DislikeUpdateWithoutUsuarioInput, DislikeUncheckedUpdateWithoutUsuarioInput>
  }

  export type DislikeUpdateManyWithWhereWithoutUsuarioInput = {
    where: DislikeScalarWhereInput
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type DislikeScalarWhereInput = {
    AND?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
    OR?: DislikeScalarWhereInput[]
    NOT?: DislikeScalarWhereInput | DislikeScalarWhereInput[]
    id?: IntFilter<"Dislike"> | number
    usuarioId?: StringFilter<"Dislike"> | string
    projetoId?: IntFilter<"Dislike"> | number
  }

  export type LikeCreateWithoutProjetoInput = {
    usuario: UsuarioCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutProjetoInput = {
    id?: number
    usuarioId: string
  }

  export type LikeCreateOrConnectWithoutProjetoInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutProjetoInput, LikeUncheckedCreateWithoutProjetoInput>
  }

  export type LikeCreateManyProjetoInputEnvelope = {
    data: LikeCreateManyProjetoInput | LikeCreateManyProjetoInput[]
  }

  export type DislikeCreateWithoutProjetoInput = {
    usuario: UsuarioCreateNestedOneWithoutDislikeInput
  }

  export type DislikeUncheckedCreateWithoutProjetoInput = {
    id?: number
    usuarioId: string
  }

  export type DislikeCreateOrConnectWithoutProjetoInput = {
    where: DislikeWhereUniqueInput
    create: XOR<DislikeCreateWithoutProjetoInput, DislikeUncheckedCreateWithoutProjetoInput>
  }

  export type DislikeCreateManyProjetoInputEnvelope = {
    data: DislikeCreateManyProjetoInput | DislikeCreateManyProjetoInput[]
  }

  export type UsuarioCreateWithoutProjetosInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    likes?: LikeCreateNestedManyWithoutUsuarioInput
    dislike?: DislikeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutProjetosInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    likes?: LikeUncheckedCreateNestedManyWithoutUsuarioInput
    dislike?: DislikeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutProjetosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
  }

  export type LikeUpsertWithWhereUniqueWithoutProjetoInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutProjetoInput, LikeUncheckedUpdateWithoutProjetoInput>
    create: XOR<LikeCreateWithoutProjetoInput, LikeUncheckedCreateWithoutProjetoInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutProjetoInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutProjetoInput, LikeUncheckedUpdateWithoutProjetoInput>
  }

  export type LikeUpdateManyWithWhereWithoutProjetoInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutProjetoInput>
  }

  export type DislikeUpsertWithWhereUniqueWithoutProjetoInput = {
    where: DislikeWhereUniqueInput
    update: XOR<DislikeUpdateWithoutProjetoInput, DislikeUncheckedUpdateWithoutProjetoInput>
    create: XOR<DislikeCreateWithoutProjetoInput, DislikeUncheckedCreateWithoutProjetoInput>
  }

  export type DislikeUpdateWithWhereUniqueWithoutProjetoInput = {
    where: DislikeWhereUniqueInput
    data: XOR<DislikeUpdateWithoutProjetoInput, DislikeUncheckedUpdateWithoutProjetoInput>
  }

  export type DislikeUpdateManyWithWhereWithoutProjetoInput = {
    where: DislikeScalarWhereInput
    data: XOR<DislikeUpdateManyMutationInput, DislikeUncheckedUpdateManyWithoutProjetoInput>
  }

  export type UsuarioUpsertWithoutProjetosInput = {
    update: XOR<UsuarioUpdateWithoutProjetosInput, UsuarioUncheckedUpdateWithoutProjetosInput>
    create: XOR<UsuarioCreateWithoutProjetosInput, UsuarioUncheckedCreateWithoutProjetosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutProjetosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutProjetosInput, UsuarioUncheckedUpdateWithoutProjetosInput>
  }

  export type UsuarioUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikeUpdateManyWithoutUsuarioNestedInput
    dislike?: DislikeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutProjetosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikeUncheckedUpdateManyWithoutUsuarioNestedInput
    dislike?: DislikeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutLikesInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    projetos?: ProjetoCreateNestedManyWithoutUsuarioInput
    dislike?: DislikeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutLikesInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    projetos?: ProjetoUncheckedCreateNestedManyWithoutUsuarioInput
    dislike?: DislikeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutLikesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutLikesInput, UsuarioUncheckedCreateWithoutLikesInput>
  }

  export type ProjetoCreateWithoutLikesInput = {
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    dislikes?: DislikeCreateNestedManyWithoutProjetoInput
    usuario: UsuarioCreateNestedOneWithoutProjetosInput
  }

  export type ProjetoUncheckedCreateWithoutLikesInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    usuarioId: string
    dislikes?: DislikeUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutLikesInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutLikesInput, ProjetoUncheckedCreateWithoutLikesInput>
  }

  export type UsuarioUpsertWithoutLikesInput = {
    update: XOR<UsuarioUpdateWithoutLikesInput, UsuarioUncheckedUpdateWithoutLikesInput>
    create: XOR<UsuarioCreateWithoutLikesInput, UsuarioUncheckedCreateWithoutLikesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutLikesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutLikesInput, UsuarioUncheckedUpdateWithoutLikesInput>
  }

  export type UsuarioUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUpdateManyWithoutUsuarioNestedInput
    dislike?: DislikeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUncheckedUpdateManyWithoutUsuarioNestedInput
    dislike?: DislikeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProjetoUpsertWithoutLikesInput = {
    update: XOR<ProjetoUpdateWithoutLikesInput, ProjetoUncheckedUpdateWithoutLikesInput>
    create: XOR<ProjetoCreateWithoutLikesInput, ProjetoUncheckedCreateWithoutLikesInput>
    where?: ProjetoWhereInput
  }

  export type ProjetoUpdateToOneWithWhereWithoutLikesInput = {
    where?: ProjetoWhereInput
    data: XOR<ProjetoUpdateWithoutLikesInput, ProjetoUncheckedUpdateWithoutLikesInput>
  }

  export type ProjetoUpdateWithoutLikesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    dislikes?: DislikeUpdateManyWithoutProjetoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    dislikes?: DislikeUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type UsuarioCreateWithoutDislikeInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    projetos?: ProjetoCreateNestedManyWithoutUsuarioInput
    likes?: LikeCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutDislikeInput = {
    id?: string
    email: string
    hash_senha: string
    nome?: string | null
    ativo?: boolean
    projetos?: ProjetoUncheckedCreateNestedManyWithoutUsuarioInput
    likes?: LikeUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutDislikeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDislikeInput, UsuarioUncheckedCreateWithoutDislikeInput>
  }

  export type ProjetoCreateWithoutDislikesInput = {
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    likes?: LikeCreateNestedManyWithoutProjetoInput
    usuario: UsuarioCreateNestedOneWithoutProjetosInput
  }

  export type ProjetoUncheckedCreateWithoutDislikesInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
    usuarioId: string
    likes?: LikeUncheckedCreateNestedManyWithoutProjetoInput
  }

  export type ProjetoCreateOrConnectWithoutDislikesInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutDislikesInput, ProjetoUncheckedCreateWithoutDislikesInput>
  }

  export type UsuarioUpsertWithoutDislikeInput = {
    update: XOR<UsuarioUpdateWithoutDislikeInput, UsuarioUncheckedUpdateWithoutDislikeInput>
    create: XOR<UsuarioCreateWithoutDislikeInput, UsuarioUncheckedCreateWithoutDislikeInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutDislikeInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutDislikeInput, UsuarioUncheckedUpdateWithoutDislikeInput>
  }

  export type UsuarioUpdateWithoutDislikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUpdateManyWithoutUsuarioNestedInput
    likes?: LikeUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDislikeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hash_senha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUncheckedUpdateManyWithoutUsuarioNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ProjetoUpsertWithoutDislikesInput = {
    update: XOR<ProjetoUpdateWithoutDislikesInput, ProjetoUncheckedUpdateWithoutDislikesInput>
    create: XOR<ProjetoCreateWithoutDislikesInput, ProjetoUncheckedCreateWithoutDislikesInput>
    where?: ProjetoWhereInput
  }

  export type ProjetoUpdateToOneWithWhereWithoutDislikesInput = {
    where?: ProjetoWhereInput
    data: XOR<ProjetoUpdateWithoutDislikesInput, ProjetoUncheckedUpdateWithoutDislikesInput>
  }

  export type ProjetoUpdateWithoutDislikesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikeUpdateManyWithoutProjetoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutProjetosNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutDislikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: StringFieldUpdateOperationsInput | string
    likes?: LikeUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoCreateManyUsuarioInput = {
    id?: number
    titulo: string
    descricao?: string | null
    imagemURL?: string | null
    repositorioURL?: string | null
    previewURL?: string | null
  }

  export type LikeCreateManyUsuarioInput = {
    id?: number
    projetoId: number
  }

  export type DislikeCreateManyUsuarioInput = {
    id?: number
    projetoId: number
  }

  export type ProjetoUpdateWithoutUsuarioInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikeUpdateManyWithoutProjetoNestedInput
    dislikes?: DislikeUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: LikeUncheckedUpdateManyWithoutProjetoNestedInput
    dislikes?: DislikeUncheckedUpdateManyWithoutProjetoNestedInput
  }

  export type ProjetoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    imagemURL?: NullableStringFieldUpdateOperationsInput | string | null
    repositorioURL?: NullableStringFieldUpdateOperationsInput | string | null
    previewURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikeUpdateWithoutUsuarioInput = {
    projeto?: ProjetoUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type DislikeUpdateWithoutUsuarioInput = {
    projeto?: ProjetoUpdateOneRequiredWithoutDislikesNestedInput
  }

  export type DislikeUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type DislikeUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    projetoId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateManyProjetoInput = {
    id?: number
    usuarioId: string
  }

  export type DislikeCreateManyProjetoInput = {
    id?: number
    usuarioId: string
  }

  export type LikeUpdateWithoutProjetoInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type LikeUncheckedUpdateManyWithoutProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type DislikeUpdateWithoutProjetoInput = {
    usuario?: UsuarioUpdateOneRequiredWithoutDislikeNestedInput
  }

  export type DislikeUncheckedUpdateWithoutProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type DislikeUncheckedUpdateManyWithoutProjetoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}