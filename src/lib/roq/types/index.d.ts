/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model analysis
 *
 */
export type analysis = $Result.DefaultSelection<Prisma.$analysisPayload>;
/**
 * Model chat
 *
 */
export type chat = $Result.DefaultSelection<Prisma.$chatPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model pdf_file
 *
 */
export type pdf_file = $Result.DefaultSelection<Prisma.$pdf_filePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Analyses
 * const analyses = await prisma.analysis.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Analyses
   * const analyses = await prisma.analysis.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.analysis`: Exposes CRUD operations for the **analysis** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Analyses
   * const analyses = await prisma.analysis.findMany()
   * ```
   */
  get analysis(): Prisma.analysisDelegate<ExtArgs>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **chat** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Chats
   * const chats = await prisma.chat.findMany()
   * ```
   */
  get chat(): Prisma.chatDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.pdf_file`: Exposes CRUD operations for the **pdf_file** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Pdf_files
   * const pdf_files = await prisma.pdf_file.findMany()
   * ```
   */
  get pdf_file(): Prisma.pdf_fileDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    analysis: 'analysis';
    chat: 'chat';
    company: 'company';
    pdf_file: 'pdf_file';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'analysis' | 'chat' | 'company' | 'pdf_file' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      analysis: {
        payload: Prisma.$analysisPayload<ExtArgs>;
        fields: Prisma.analysisFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.analysisFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.analysisFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload>;
          };
          findFirst: {
            args: Prisma.analysisFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.analysisFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload>;
          };
          findMany: {
            args: Prisma.analysisFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload>[];
          };
          create: {
            args: Prisma.analysisCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload>;
          };
          createMany: {
            args: Prisma.analysisCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.analysisDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload>;
          };
          update: {
            args: Prisma.analysisUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload>;
          };
          deleteMany: {
            args: Prisma.analysisDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.analysisUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.analysisUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$analysisPayload>;
          };
          aggregate: {
            args: Prisma.AnalysisAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAnalysis>;
          };
          groupBy: {
            args: Prisma.analysisGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AnalysisGroupByOutputType>[];
          };
          count: {
            args: Prisma.analysisCountArgs<ExtArgs>;
            result: $Utils.Optional<AnalysisCountAggregateOutputType> | number;
          };
        };
      };
      chat: {
        payload: Prisma.$chatPayload<ExtArgs>;
        fields: Prisma.chatFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.chatFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload>;
          };
          findFirst: {
            args: Prisma.chatFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload>;
          };
          findMany: {
            args: Prisma.chatFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[];
          };
          create: {
            args: Prisma.chatCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload>;
          };
          createMany: {
            args: Prisma.chatCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.chatDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload>;
          };
          update: {
            args: Prisma.chatUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload>;
          };
          deleteMany: {
            args: Prisma.chatDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.chatUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.chatUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$chatPayload>;
          };
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateChat>;
          };
          groupBy: {
            args: Prisma.chatGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ChatGroupByOutputType>[];
          };
          count: {
            args: Prisma.chatCountArgs<ExtArgs>;
            result: $Utils.Optional<ChatCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      pdf_file: {
        payload: Prisma.$pdf_filePayload<ExtArgs>;
        fields: Prisma.pdf_fileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.pdf_fileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.pdf_fileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload>;
          };
          findFirst: {
            args: Prisma.pdf_fileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.pdf_fileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload>;
          };
          findMany: {
            args: Prisma.pdf_fileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload>[];
          };
          create: {
            args: Prisma.pdf_fileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload>;
          };
          createMany: {
            args: Prisma.pdf_fileCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.pdf_fileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload>;
          };
          update: {
            args: Prisma.pdf_fileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload>;
          };
          deleteMany: {
            args: Prisma.pdf_fileDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.pdf_fileUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.pdf_fileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$pdf_filePayload>;
          };
          aggregate: {
            args: Prisma.Pdf_fileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePdf_file>;
          };
          groupBy: {
            args: Prisma.pdf_fileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Pdf_fileGroupByOutputType>[];
          };
          count: {
            args: Prisma.pdf_fileCountArgs<ExtArgs>;
            result: $Utils.Optional<Pdf_fileCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    user: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | CompanyCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type Pdf_fileCountOutputType
   */

  export type Pdf_fileCountOutputType = {
    analysis: number;
    chat: number;
  };

  export type Pdf_fileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysis?: boolean | Pdf_fileCountOutputTypeCountAnalysisArgs;
    chat?: boolean | Pdf_fileCountOutputTypeCountChatArgs;
  };

  // Custom InputTypes

  /**
   * Pdf_fileCountOutputType without action
   */
  export type Pdf_fileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pdf_fileCountOutputType
     */
    select?: Pdf_fileCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Pdf_fileCountOutputType without action
   */
  export type Pdf_fileCountOutputTypeCountAnalysisArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: analysisWhereInput;
  };

  /**
   * Pdf_fileCountOutputType without action
   */
  export type Pdf_fileCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: chatWhereInput;
    };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chat: number;
    pdf_file: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | UserCountOutputTypeCountChatArgs;
    pdf_file?: boolean | UserCountOutputTypeCountPdf_fileArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPdf_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: pdf_fileWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model analysis
   */

  export type AggregateAnalysis = {
    _count: AnalysisCountAggregateOutputType | null;
    _avg: AnalysisAvgAggregateOutputType | null;
    _sum: AnalysisSumAggregateOutputType | null;
    _min: AnalysisMinAggregateOutputType | null;
    _max: AnalysisMaxAggregateOutputType | null;
  };

  export type AnalysisAvgAggregateOutputType = {
    num_words: number | null;
    num_sentences: number | null;
  };

  export type AnalysisSumAggregateOutputType = {
    num_words: number | null;
    num_sentences: number | null;
  };

  export type AnalysisMinAggregateOutputType = {
    id: string | null;
    pdf_file_id: string | null;
    num_words: number | null;
    num_sentences: number | null;
    most_common_word: string | null;
    least_common_word: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AnalysisMaxAggregateOutputType = {
    id: string | null;
    pdf_file_id: string | null;
    num_words: number | null;
    num_sentences: number | null;
    most_common_word: string | null;
    least_common_word: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AnalysisCountAggregateOutputType = {
    id: number;
    pdf_file_id: number;
    num_words: number;
    num_sentences: number;
    most_common_word: number;
    least_common_word: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AnalysisAvgAggregateInputType = {
    num_words?: true;
    num_sentences?: true;
  };

  export type AnalysisSumAggregateInputType = {
    num_words?: true;
    num_sentences?: true;
  };

  export type AnalysisMinAggregateInputType = {
    id?: true;
    pdf_file_id?: true;
    num_words?: true;
    num_sentences?: true;
    most_common_word?: true;
    least_common_word?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AnalysisMaxAggregateInputType = {
    id?: true;
    pdf_file_id?: true;
    num_words?: true;
    num_sentences?: true;
    most_common_word?: true;
    least_common_word?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AnalysisCountAggregateInputType = {
    id?: true;
    pdf_file_id?: true;
    num_words?: true;
    num_sentences?: true;
    most_common_word?: true;
    least_common_word?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which analysis to aggregate.
     */
    where?: analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analyses to fetch.
     */
    orderBy?: analysisOrderByWithRelationInput | analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned analyses
     **/
    _count?: true | AnalysisCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AnalysisAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AnalysisSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AnalysisMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AnalysisMaxAggregateInputType;
  };

  export type GetAnalysisAggregateType<T extends AnalysisAggregateArgs> = {
    [P in keyof T & keyof AggregateAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysis[P]>
      : GetScalarType<T[P], AggregateAnalysis[P]>;
  };

  export type analysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: analysisWhereInput;
    orderBy?: analysisOrderByWithAggregationInput | analysisOrderByWithAggregationInput[];
    by: AnalysisScalarFieldEnum[] | AnalysisScalarFieldEnum;
    having?: analysisScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnalysisCountAggregateInputType | true;
    _avg?: AnalysisAvgAggregateInputType;
    _sum?: AnalysisSumAggregateInputType;
    _min?: AnalysisMinAggregateInputType;
    _max?: AnalysisMaxAggregateInputType;
  };

  export type AnalysisGroupByOutputType = {
    id: string;
    pdf_file_id: string;
    num_words: number | null;
    num_sentences: number | null;
    most_common_word: string | null;
    least_common_word: string | null;
    created_at: Date;
    updated_at: Date;
    _count: AnalysisCountAggregateOutputType | null;
    _avg: AnalysisAvgAggregateOutputType | null;
    _sum: AnalysisSumAggregateOutputType | null;
    _min: AnalysisMinAggregateOutputType | null;
    _max: AnalysisMaxAggregateOutputType | null;
  };

  type GetAnalysisGroupByPayload<T extends analysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AnalysisGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
          : GetScalarType<T[P], AnalysisGroupByOutputType[P]>;
      }
    >
  >;

  export type analysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        pdf_file_id?: boolean;
        num_words?: boolean;
        num_sentences?: boolean;
        most_common_word?: boolean;
        least_common_word?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        pdf_file?: boolean | pdf_fileDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['analysis']
    >;

  export type analysisSelectScalar = {
    id?: boolean;
    pdf_file_id?: boolean;
    num_words?: boolean;
    num_sentences?: boolean;
    most_common_word?: boolean;
    least_common_word?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type analysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf_file?: boolean | pdf_fileDefaultArgs<ExtArgs>;
  };

  export type $analysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'analysis';
    objects: {
      pdf_file: Prisma.$pdf_filePayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        pdf_file_id: string;
        num_words: number | null;
        num_sentences: number | null;
        most_common_word: string | null;
        least_common_word: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['analysis']
    >;
    composites: {};
  };

  type analysisGetPayload<S extends boolean | null | undefined | analysisDefaultArgs> = $Result.GetResult<
    Prisma.$analysisPayload,
    S
  >;

  type analysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    analysisFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AnalysisCountAggregateInputType | true;
  };

  export interface analysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['analysis']; meta: { name: 'analysis' } };
    /**
     * Find zero or one Analysis that matches the filter.
     * @param {analysisFindUniqueArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends analysisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, analysisFindUniqueArgs<ExtArgs>>,
    ): Prisma__analysisClient<
      $Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Analysis that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {analysisFindUniqueOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends analysisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, analysisFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__analysisClient<
      $Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analysisFindFirstArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends analysisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, analysisFindFirstArgs<ExtArgs>>,
    ): Prisma__analysisClient<
      $Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analysisFindFirstOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends analysisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, analysisFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__analysisClient<
      $Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analysisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analysis.findMany()
     *
     * // Get first 10 Analyses
     * const analyses = await prisma.analysis.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const analysisWithIdOnly = await prisma.analysis.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends analysisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, analysisFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Analysis.
     * @param {analysisCreateArgs} args - Arguments to create a Analysis.
     * @example
     * // Create one Analysis
     * const Analysis = await prisma.analysis.create({
     *   data: {
     *     // ... data to create a Analysis
     *   }
     * })
     *
     **/
    create<T extends analysisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, analysisCreateArgs<ExtArgs>>,
    ): Prisma__analysisClient<$Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Analyses.
     *     @param {analysisCreateManyArgs} args - Arguments to create many Analyses.
     *     @example
     *     // Create many Analyses
     *     const analysis = await prisma.analysis.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends analysisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, analysisCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Analysis.
     * @param {analysisDeleteArgs} args - Arguments to delete one Analysis.
     * @example
     * // Delete one Analysis
     * const Analysis = await prisma.analysis.delete({
     *   where: {
     *     // ... filter to delete one Analysis
     *   }
     * })
     *
     **/
    delete<T extends analysisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, analysisDeleteArgs<ExtArgs>>,
    ): Prisma__analysisClient<$Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Analysis.
     * @param {analysisUpdateArgs} args - Arguments to update one Analysis.
     * @example
     * // Update one Analysis
     * const analysis = await prisma.analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends analysisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, analysisUpdateArgs<ExtArgs>>,
    ): Prisma__analysisClient<$Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Analyses.
     * @param {analysisDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends analysisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, analysisDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends analysisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, analysisUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Analysis.
     * @param {analysisUpsertArgs} args - Arguments to update or create a Analysis.
     * @example
     * // Update or create a Analysis
     * const analysis = await prisma.analysis.upsert({
     *   create: {
     *     // ... data to create a Analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analysis we want to update
     *   }
     * })
     **/
    upsert<T extends analysisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, analysisUpsertArgs<ExtArgs>>,
    ): Prisma__analysisClient<$Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analysisCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analysis.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
     **/
    count<T extends analysisCountArgs>(
      args?: Subset<T, analysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisAggregateArgs>(
      args: Subset<T, AnalysisAggregateArgs>,
    ): Prisma.PrismaPromise<GetAnalysisAggregateType<T>>;

    /**
     * Group by Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {analysisGroupByArgs} args - Group by arguments.
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
      T extends analysisGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: analysisGroupByArgs['orderBy'] }
        : { orderBy?: analysisGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, analysisGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the analysis model
     */
    readonly fields: analysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__analysisClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pdf_file<T extends pdf_fileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, pdf_fileDefaultArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<
      $Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the analysis model
   */
  interface analysisFieldRefs {
    readonly id: FieldRef<'analysis', 'String'>;
    readonly pdf_file_id: FieldRef<'analysis', 'String'>;
    readonly num_words: FieldRef<'analysis', 'Int'>;
    readonly num_sentences: FieldRef<'analysis', 'Int'>;
    readonly most_common_word: FieldRef<'analysis', 'String'>;
    readonly least_common_word: FieldRef<'analysis', 'String'>;
    readonly created_at: FieldRef<'analysis', 'DateTime'>;
    readonly updated_at: FieldRef<'analysis', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * analysis findUnique
   */
  export type analysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * Filter, which analysis to fetch.
     */
    where: analysisWhereUniqueInput;
  };

  /**
   * analysis findUniqueOrThrow
   */
  export type analysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * Filter, which analysis to fetch.
     */
    where: analysisWhereUniqueInput;
  };

  /**
   * analysis findFirst
   */
  export type analysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * Filter, which analysis to fetch.
     */
    where?: analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analyses to fetch.
     */
    orderBy?: analysisOrderByWithRelationInput | analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analyses.
     */
    cursor?: analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * analysis findFirstOrThrow
   */
  export type analysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * Filter, which analysis to fetch.
     */
    where?: analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analyses to fetch.
     */
    orderBy?: analysisOrderByWithRelationInput | analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for analyses.
     */
    cursor?: analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analyses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * analysis findMany
   */
  export type analysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * Filter, which analyses to fetch.
     */
    where?: analysisWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of analyses to fetch.
     */
    orderBy?: analysisOrderByWithRelationInput | analysisOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing analyses.
     */
    cursor?: analysisWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` analyses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` analyses.
     */
    skip?: number;
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * analysis create
   */
  export type analysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * The data needed to create a analysis.
     */
    data: XOR<analysisCreateInput, analysisUncheckedCreateInput>;
  };

  /**
   * analysis createMany
   */
  export type analysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many analyses.
     */
    data: analysisCreateManyInput | analysisCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * analysis update
   */
  export type analysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * The data needed to update a analysis.
     */
    data: XOR<analysisUpdateInput, analysisUncheckedUpdateInput>;
    /**
     * Choose, which analysis to update.
     */
    where: analysisWhereUniqueInput;
  };

  /**
   * analysis updateMany
   */
  export type analysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update analyses.
     */
    data: XOR<analysisUpdateManyMutationInput, analysisUncheckedUpdateManyInput>;
    /**
     * Filter which analyses to update
     */
    where?: analysisWhereInput;
  };

  /**
   * analysis upsert
   */
  export type analysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * The filter to search for the analysis to update in case it exists.
     */
    where: analysisWhereUniqueInput;
    /**
     * In case the analysis found by the `where` argument doesn't exist, create a new analysis with this data.
     */
    create: XOR<analysisCreateInput, analysisUncheckedCreateInput>;
    /**
     * In case the analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<analysisUpdateInput, analysisUncheckedUpdateInput>;
  };

  /**
   * analysis delete
   */
  export type analysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    /**
     * Filter which analysis to delete.
     */
    where: analysisWhereUniqueInput;
  };

  /**
   * analysis deleteMany
   */
  export type analysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which analyses to delete
     */
    where?: analysisWhereInput;
  };

  /**
   * analysis without action
   */
  export type analysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
  };

  /**
   * Model chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null;
    _min: ChatMinAggregateOutputType | null;
    _max: ChatMaxAggregateOutputType | null;
  };

  export type ChatMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    pdf_file_id: string | null;
    message: string | null;
    response: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ChatMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    pdf_file_id: string | null;
    message: string | null;
    response: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ChatCountAggregateOutputType = {
    id: number;
    user_id: number;
    pdf_file_id: number;
    message: number;
    response: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ChatMinAggregateInputType = {
    id?: true;
    user_id?: true;
    pdf_file_id?: true;
    message?: true;
    response?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ChatMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    pdf_file_id?: true;
    message?: true;
    response?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ChatCountAggregateInputType = {
    id?: true;
    user_id?: true;
    pdf_file_id?: true;
    message?: true;
    response?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat to aggregate.
     */
    where?: chatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: chatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` chats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` chats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned chats
     **/
    _count?: true | ChatCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ChatMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ChatMaxAggregateInputType;
  };

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
    [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>;
  };

  export type chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput;
    orderBy?: chatOrderByWithAggregationInput | chatOrderByWithAggregationInput[];
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum;
    having?: chatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChatCountAggregateInputType | true;
    _min?: ChatMinAggregateInputType;
    _max?: ChatMaxAggregateInputType;
  };

  export type ChatGroupByOutputType = {
    id: string;
    user_id: string;
    pdf_file_id: string;
    message: string;
    response: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ChatCountAggregateOutputType | null;
    _min: ChatMinAggregateOutputType | null;
    _max: ChatMaxAggregateOutputType | null;
  };

  type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ChatGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
          : GetScalarType<T[P], ChatGroupByOutputType[P]>;
      }
    >
  >;

  export type chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      pdf_file_id?: boolean;
      message?: boolean;
      response?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      pdf_file?: boolean | pdf_fileDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['chat']
  >;

  export type chatSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    pdf_file_id?: boolean;
    message?: boolean;
    response?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type chatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf_file?: boolean | pdf_fileDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'chat';
    objects: {
      pdf_file: Prisma.$pdf_filePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        pdf_file_id: string;
        message: string;
        response: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['chat']
    >;
    composites: {};
  };

  type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = $Result.GetResult<
    Prisma.$chatPayload,
    S
  >;

  type chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    chatFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ChatCountAggregateInputType | true;
  };

  export interface chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat']; meta: { name: 'chat' } };
    /**
     * Find zero or one Chat that matches the filter.
     * @param {chatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends chatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, chatFindUniqueArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Chat that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {chatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends chatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, chatFindFirstArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends chatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     *
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends chatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chatFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Chat.
     * @param {chatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     *
     **/
    create<T extends chatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, chatCreateArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Chats.
     *     @param {chatCreateManyArgs} args - Arguments to create many Chats.
     *     @example
     *     // Create many Chats
     *     const chat = await prisma.chat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends chatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chatCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Chat.
     * @param {chatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     *
     **/
    delete<T extends chatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, chatDeleteArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Chat.
     * @param {chatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends chatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, chatUpdateArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Chats.
     * @param {chatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends chatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, chatDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends chatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, chatUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Chat.
     * @param {chatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     **/
    upsert<T extends chatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, chatUpsertArgs<ExtArgs>>,
    ): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
     **/
    count<T extends chatCountArgs>(
      args?: Subset<T, chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(
      args: Subset<T, ChatAggregateArgs>,
    ): Prisma.PrismaPromise<GetChatAggregateType<T>>;

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupByArgs} args - Group by arguments.
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
      T extends chatGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the chat model
     */
    readonly fields: chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pdf_file<T extends pdf_fileDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, pdf_fileDefaultArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<
      $Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the chat model
   */
  interface chatFieldRefs {
    readonly id: FieldRef<'chat', 'String'>;
    readonly user_id: FieldRef<'chat', 'String'>;
    readonly pdf_file_id: FieldRef<'chat', 'String'>;
    readonly message: FieldRef<'chat', 'String'>;
    readonly response: FieldRef<'chat', 'String'>;
    readonly created_at: FieldRef<'chat', 'DateTime'>;
    readonly updated_at: FieldRef<'chat', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * chat findUnique
   */
  export type chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput;
  };

  /**
   * chat findUniqueOrThrow
   */
  export type chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput;
  };

  /**
   * chat findFirst
   */
  export type chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` chats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` chats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
  };

  /**
   * chat findFirstOrThrow
   */
  export type chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` chats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` chats.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
  };

  /**
   * chat findMany
   */
  export type chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * Filter, which chats to fetch.
     */
    where?: chatWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing chats.
     */
    cursor?: chatWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` chats from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` chats.
     */
    skip?: number;
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
  };

  /**
   * chat create
   */
  export type chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * The data needed to create a chat.
     */
    data: XOR<chatCreateInput, chatUncheckedCreateInput>;
  };

  /**
   * chat createMany
   */
  export type chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * chat update
   */
  export type chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * The data needed to update a chat.
     */
    data: XOR<chatUpdateInput, chatUncheckedUpdateInput>;
    /**
     * Choose, which chat to update.
     */
    where: chatWhereUniqueInput;
  };

  /**
   * chat updateMany
   */
  export type chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>;
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput;
  };

  /**
   * chat upsert
   */
  export type chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * The filter to search for the chat to update in case it exists.
     */
    where: chatWhereUniqueInput;
    /**
     * In case the chat found by the `where` argument doesn't exist, create a new chat with this data.
     */
    create: XOR<chatCreateInput, chatUncheckedCreateInput>;
    /**
     * In case the chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatUpdateInput, chatUncheckedUpdateInput>;
  };

  /**
   * chat delete
   */
  export type chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    /**
     * Filter which chat to delete.
     */
    where: chatWhereUniqueInput;
  };

  /**
   * chat deleteMany
   */
  export type chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatWhereInput;
  };

  /**
   * chat without action
   */
  export type chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    is_active: boolean | null;
    location: string | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    is_active: boolean | null;
    location: string | null;
    industry: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    is_active: number;
    location: number;
    industry: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    is_active?: true;
    location?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    is_active?: true;
    location?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    is_active?: true;
    location?: true;
    industry?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    is_active: boolean | null;
    location: string | null;
    industry: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      is_active?: boolean;
      location?: boolean;
      industry?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | company$userArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    is_active?: boolean;
    location?: boolean;
    industry?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | company$userArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        is_active: boolean | null;
        location: string | null;
        industry: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends company$userArgs<ExtArgs> = {}>(
      args?: Subset<T, company$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly is_active: FieldRef<'company', 'Boolean'>;
    readonly location: FieldRef<'company', 'String'>;
    readonly industry: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.user
   */
  export type company$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model pdf_file
   */

  export type AggregatePdf_file = {
    _count: Pdf_fileCountAggregateOutputType | null;
    _avg: Pdf_fileAvgAggregateOutputType | null;
    _sum: Pdf_fileSumAggregateOutputType | null;
    _min: Pdf_fileMinAggregateOutputType | null;
    _max: Pdf_fileMaxAggregateOutputType | null;
  };

  export type Pdf_fileAvgAggregateOutputType = {
    file_size: number | null;
    num_pages: number | null;
  };

  export type Pdf_fileSumAggregateOutputType = {
    file_size: number | null;
    num_pages: number | null;
  };

  export type Pdf_fileMinAggregateOutputType = {
    id: string | null;
    file_name: string | null;
    file_size: number | null;
    upload_date: Date | null;
    user_id: string | null;
    analyzed: boolean | null;
    num_pages: number | null;
    file_path: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Pdf_fileMaxAggregateOutputType = {
    id: string | null;
    file_name: string | null;
    file_size: number | null;
    upload_date: Date | null;
    user_id: string | null;
    analyzed: boolean | null;
    num_pages: number | null;
    file_path: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Pdf_fileCountAggregateOutputType = {
    id: number;
    file_name: number;
    file_size: number;
    upload_date: number;
    user_id: number;
    analyzed: number;
    num_pages: number;
    file_path: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Pdf_fileAvgAggregateInputType = {
    file_size?: true;
    num_pages?: true;
  };

  export type Pdf_fileSumAggregateInputType = {
    file_size?: true;
    num_pages?: true;
  };

  export type Pdf_fileMinAggregateInputType = {
    id?: true;
    file_name?: true;
    file_size?: true;
    upload_date?: true;
    user_id?: true;
    analyzed?: true;
    num_pages?: true;
    file_path?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Pdf_fileMaxAggregateInputType = {
    id?: true;
    file_name?: true;
    file_size?: true;
    upload_date?: true;
    user_id?: true;
    analyzed?: true;
    num_pages?: true;
    file_path?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Pdf_fileCountAggregateInputType = {
    id?: true;
    file_name?: true;
    file_size?: true;
    upload_date?: true;
    user_id?: true;
    analyzed?: true;
    num_pages?: true;
    file_path?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Pdf_fileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdf_file to aggregate.
     */
    where?: pdf_fileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdf_files to fetch.
     */
    orderBy?: pdf_fileOrderByWithRelationInput | pdf_fileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: pdf_fileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdf_files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdf_files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned pdf_files
     **/
    _count?: true | Pdf_fileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Pdf_fileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Pdf_fileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Pdf_fileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Pdf_fileMaxAggregateInputType;
  };

  export type GetPdf_fileAggregateType<T extends Pdf_fileAggregateArgs> = {
    [P in keyof T & keyof AggregatePdf_file]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePdf_file[P]>
      : GetScalarType<T[P], AggregatePdf_file[P]>;
  };

  export type pdf_fileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pdf_fileWhereInput;
    orderBy?: pdf_fileOrderByWithAggregationInput | pdf_fileOrderByWithAggregationInput[];
    by: Pdf_fileScalarFieldEnum[] | Pdf_fileScalarFieldEnum;
    having?: pdf_fileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Pdf_fileCountAggregateInputType | true;
    _avg?: Pdf_fileAvgAggregateInputType;
    _sum?: Pdf_fileSumAggregateInputType;
    _min?: Pdf_fileMinAggregateInputType;
    _max?: Pdf_fileMaxAggregateInputType;
  };

  export type Pdf_fileGroupByOutputType = {
    id: string;
    file_name: string;
    file_size: number;
    upload_date: Date;
    user_id: string;
    analyzed: boolean;
    num_pages: number | null;
    file_path: string;
    created_at: Date;
    updated_at: Date;
    _count: Pdf_fileCountAggregateOutputType | null;
    _avg: Pdf_fileAvgAggregateOutputType | null;
    _sum: Pdf_fileSumAggregateOutputType | null;
    _min: Pdf_fileMinAggregateOutputType | null;
    _max: Pdf_fileMaxAggregateOutputType | null;
  };

  type GetPdf_fileGroupByPayload<T extends pdf_fileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pdf_fileGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Pdf_fileGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Pdf_fileGroupByOutputType[P]>
          : GetScalarType<T[P], Pdf_fileGroupByOutputType[P]>;
      }
    >
  >;

  export type pdf_fileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        file_name?: boolean;
        file_size?: boolean;
        upload_date?: boolean;
        user_id?: boolean;
        analyzed?: boolean;
        num_pages?: boolean;
        file_path?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        analysis?: boolean | pdf_file$analysisArgs<ExtArgs>;
        chat?: boolean | pdf_file$chatArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | Pdf_fileCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['pdf_file']
    >;

  export type pdf_fileSelectScalar = {
    id?: boolean;
    file_name?: boolean;
    file_size?: boolean;
    upload_date?: boolean;
    user_id?: boolean;
    analyzed?: boolean;
    num_pages?: boolean;
    file_path?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type pdf_fileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analysis?: boolean | pdf_file$analysisArgs<ExtArgs>;
    chat?: boolean | pdf_file$chatArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | Pdf_fileCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $pdf_filePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'pdf_file';
    objects: {
      analysis: Prisma.$analysisPayload<ExtArgs>[];
      chat: Prisma.$chatPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        file_name: string;
        file_size: number;
        upload_date: Date;
        user_id: string;
        analyzed: boolean;
        num_pages: number | null;
        file_path: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['pdf_file']
    >;
    composites: {};
  };

  type pdf_fileGetPayload<S extends boolean | null | undefined | pdf_fileDefaultArgs> = $Result.GetResult<
    Prisma.$pdf_filePayload,
    S
  >;

  type pdf_fileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    pdf_fileFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Pdf_fileCountAggregateInputType | true;
  };

  export interface pdf_fileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pdf_file']; meta: { name: 'pdf_file' } };
    /**
     * Find zero or one Pdf_file that matches the filter.
     * @param {pdf_fileFindUniqueArgs} args - Arguments to find a Pdf_file
     * @example
     * // Get one Pdf_file
     * const pdf_file = await prisma.pdf_file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends pdf_fileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, pdf_fileFindUniqueArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<
      $Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Pdf_file that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {pdf_fileFindUniqueOrThrowArgs} args - Arguments to find a Pdf_file
     * @example
     * // Get one Pdf_file
     * const pdf_file = await prisma.pdf_file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends pdf_fileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pdf_fileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<
      $Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Pdf_file that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdf_fileFindFirstArgs} args - Arguments to find a Pdf_file
     * @example
     * // Get one Pdf_file
     * const pdf_file = await prisma.pdf_file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends pdf_fileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, pdf_fileFindFirstArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<
      $Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Pdf_file that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdf_fileFindFirstOrThrowArgs} args - Arguments to find a Pdf_file
     * @example
     * // Get one Pdf_file
     * const pdf_file = await prisma.pdf_file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends pdf_fileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, pdf_fileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<
      $Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Pdf_files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdf_fileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pdf_files
     * const pdf_files = await prisma.pdf_file.findMany()
     *
     * // Get first 10 Pdf_files
     * const pdf_files = await prisma.pdf_file.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pdf_fileWithIdOnly = await prisma.pdf_file.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends pdf_fileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pdf_fileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Pdf_file.
     * @param {pdf_fileCreateArgs} args - Arguments to create a Pdf_file.
     * @example
     * // Create one Pdf_file
     * const Pdf_file = await prisma.pdf_file.create({
     *   data: {
     *     // ... data to create a Pdf_file
     *   }
     * })
     *
     **/
    create<T extends pdf_fileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, pdf_fileCreateArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<$Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Pdf_files.
     *     @param {pdf_fileCreateManyArgs} args - Arguments to create many Pdf_files.
     *     @example
     *     // Create many Pdf_files
     *     const pdf_file = await prisma.pdf_file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends pdf_fileCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pdf_fileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Pdf_file.
     * @param {pdf_fileDeleteArgs} args - Arguments to delete one Pdf_file.
     * @example
     * // Delete one Pdf_file
     * const Pdf_file = await prisma.pdf_file.delete({
     *   where: {
     *     // ... filter to delete one Pdf_file
     *   }
     * })
     *
     **/
    delete<T extends pdf_fileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, pdf_fileDeleteArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<$Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Pdf_file.
     * @param {pdf_fileUpdateArgs} args - Arguments to update one Pdf_file.
     * @example
     * // Update one Pdf_file
     * const pdf_file = await prisma.pdf_file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends pdf_fileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, pdf_fileUpdateArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<$Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Pdf_files.
     * @param {pdf_fileDeleteManyArgs} args - Arguments to filter Pdf_files to delete.
     * @example
     * // Delete a few Pdf_files
     * const { count } = await prisma.pdf_file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends pdf_fileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, pdf_fileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Pdf_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdf_fileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pdf_files
     * const pdf_file = await prisma.pdf_file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends pdf_fileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, pdf_fileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Pdf_file.
     * @param {pdf_fileUpsertArgs} args - Arguments to update or create a Pdf_file.
     * @example
     * // Update or create a Pdf_file
     * const pdf_file = await prisma.pdf_file.upsert({
     *   create: {
     *     // ... data to create a Pdf_file
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pdf_file we want to update
     *   }
     * })
     **/
    upsert<T extends pdf_fileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, pdf_fileUpsertArgs<ExtArgs>>,
    ): Prisma__pdf_fileClient<$Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Pdf_files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdf_fileCountArgs} args - Arguments to filter Pdf_files to count.
     * @example
     * // Count the number of Pdf_files
     * const count = await prisma.pdf_file.count({
     *   where: {
     *     // ... the filter for the Pdf_files we want to count
     *   }
     * })
     **/
    count<T extends pdf_fileCountArgs>(
      args?: Subset<T, pdf_fileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pdf_fileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Pdf_file.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pdf_fileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pdf_fileAggregateArgs>(
      args: Subset<T, Pdf_fileAggregateArgs>,
    ): Prisma.PrismaPromise<GetPdf_fileAggregateType<T>>;

    /**
     * Group by Pdf_file.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdf_fileGroupByArgs} args - Group by arguments.
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
      T extends pdf_fileGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pdf_fileGroupByArgs['orderBy'] }
        : { orderBy?: pdf_fileGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, pdf_fileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPdf_fileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the pdf_file model
     */
    readonly fields: pdf_fileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pdf_file.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pdf_fileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    analysis<T extends pdf_file$analysisArgs<ExtArgs> = {}>(
      args?: Subset<T, pdf_file$analysisArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$analysisPayload<ExtArgs>, T, 'findMany'> | Null>;

    chat<T extends pdf_file$chatArgs<ExtArgs> = {}>(
      args?: Subset<T, pdf_file$chatArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the pdf_file model
   */
  interface pdf_fileFieldRefs {
    readonly id: FieldRef<'pdf_file', 'String'>;
    readonly file_name: FieldRef<'pdf_file', 'String'>;
    readonly file_size: FieldRef<'pdf_file', 'Int'>;
    readonly upload_date: FieldRef<'pdf_file', 'DateTime'>;
    readonly user_id: FieldRef<'pdf_file', 'String'>;
    readonly analyzed: FieldRef<'pdf_file', 'Boolean'>;
    readonly num_pages: FieldRef<'pdf_file', 'Int'>;
    readonly file_path: FieldRef<'pdf_file', 'String'>;
    readonly created_at: FieldRef<'pdf_file', 'DateTime'>;
    readonly updated_at: FieldRef<'pdf_file', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * pdf_file findUnique
   */
  export type pdf_fileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * Filter, which pdf_file to fetch.
     */
    where: pdf_fileWhereUniqueInput;
  };

  /**
   * pdf_file findUniqueOrThrow
   */
  export type pdf_fileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * Filter, which pdf_file to fetch.
     */
    where: pdf_fileWhereUniqueInput;
  };

  /**
   * pdf_file findFirst
   */
  export type pdf_fileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * Filter, which pdf_file to fetch.
     */
    where?: pdf_fileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdf_files to fetch.
     */
    orderBy?: pdf_fileOrderByWithRelationInput | pdf_fileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pdf_files.
     */
    cursor?: pdf_fileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdf_files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdf_files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pdf_files.
     */
    distinct?: Pdf_fileScalarFieldEnum | Pdf_fileScalarFieldEnum[];
  };

  /**
   * pdf_file findFirstOrThrow
   */
  export type pdf_fileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * Filter, which pdf_file to fetch.
     */
    where?: pdf_fileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdf_files to fetch.
     */
    orderBy?: pdf_fileOrderByWithRelationInput | pdf_fileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pdf_files.
     */
    cursor?: pdf_fileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdf_files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdf_files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pdf_files.
     */
    distinct?: Pdf_fileScalarFieldEnum | Pdf_fileScalarFieldEnum[];
  };

  /**
   * pdf_file findMany
   */
  export type pdf_fileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * Filter, which pdf_files to fetch.
     */
    where?: pdf_fileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pdf_files to fetch.
     */
    orderBy?: pdf_fileOrderByWithRelationInput | pdf_fileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing pdf_files.
     */
    cursor?: pdf_fileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pdf_files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pdf_files.
     */
    skip?: number;
    distinct?: Pdf_fileScalarFieldEnum | Pdf_fileScalarFieldEnum[];
  };

  /**
   * pdf_file create
   */
  export type pdf_fileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * The data needed to create a pdf_file.
     */
    data: XOR<pdf_fileCreateInput, pdf_fileUncheckedCreateInput>;
  };

  /**
   * pdf_file createMany
   */
  export type pdf_fileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pdf_files.
     */
    data: pdf_fileCreateManyInput | pdf_fileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * pdf_file update
   */
  export type pdf_fileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * The data needed to update a pdf_file.
     */
    data: XOR<pdf_fileUpdateInput, pdf_fileUncheckedUpdateInput>;
    /**
     * Choose, which pdf_file to update.
     */
    where: pdf_fileWhereUniqueInput;
  };

  /**
   * pdf_file updateMany
   */
  export type pdf_fileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pdf_files.
     */
    data: XOR<pdf_fileUpdateManyMutationInput, pdf_fileUncheckedUpdateManyInput>;
    /**
     * Filter which pdf_files to update
     */
    where?: pdf_fileWhereInput;
  };

  /**
   * pdf_file upsert
   */
  export type pdf_fileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * The filter to search for the pdf_file to update in case it exists.
     */
    where: pdf_fileWhereUniqueInput;
    /**
     * In case the pdf_file found by the `where` argument doesn't exist, create a new pdf_file with this data.
     */
    create: XOR<pdf_fileCreateInput, pdf_fileUncheckedCreateInput>;
    /**
     * In case the pdf_file was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pdf_fileUpdateInput, pdf_fileUncheckedUpdateInput>;
  };

  /**
   * pdf_file delete
   */
  export type pdf_fileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    /**
     * Filter which pdf_file to delete.
     */
    where: pdf_fileWhereUniqueInput;
  };

  /**
   * pdf_file deleteMany
   */
  export type pdf_fileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdf_files to delete
     */
    where?: pdf_fileWhereInput;
  };

  /**
   * pdf_file.analysis
   */
  export type pdf_file$analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the analysis
     */
    select?: analysisSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: analysisInclude<ExtArgs> | null;
    where?: analysisWhereInput;
    orderBy?: analysisOrderByWithRelationInput | analysisOrderByWithRelationInput[];
    cursor?: analysisWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[];
  };

  /**
   * pdf_file.chat
   */
  export type pdf_file$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    where?: chatWhereInput;
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[];
    cursor?: chatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
  };

  /**
   * pdf_file without action
   */
  export type pdf_fileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    company_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    company_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    company_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      company_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      chat?: boolean | user$chatArgs<ExtArgs>;
      pdf_file?: boolean | user$pdf_fileArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    company_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | user$chatArgs<ExtArgs>;
    pdf_file?: boolean | user$pdf_fileArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      chat: Prisma.$chatPayload<ExtArgs>[];
      pdf_file: Prisma.$pdf_filePayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        company_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    chat<T extends user$chatArgs<ExtArgs> = {}>(
      args?: Subset<T, user$chatArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, 'findMany'> | Null>;

    pdf_file<T extends user$pdf_fileArgs<ExtArgs> = {}>(
      args?: Subset<T, user$pdf_fileArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdf_filePayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly company_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.chat
   */
  export type user$chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: chatInclude<ExtArgs> | null;
    where?: chatWhereInput;
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[];
    cursor?: chatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[];
  };

  /**
   * user.pdf_file
   */
  export type user$pdf_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf_file
     */
    select?: pdf_fileSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: pdf_fileInclude<ExtArgs> | null;
    where?: pdf_fileWhereInput;
    orderBy?: pdf_fileOrderByWithRelationInput | pdf_fileOrderByWithRelationInput[];
    cursor?: pdf_fileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Pdf_fileScalarFieldEnum | Pdf_fileScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AnalysisScalarFieldEnum: {
    id: 'id';
    pdf_file_id: 'pdf_file_id';
    num_words: 'num_words';
    num_sentences: 'num_sentences';
    most_common_word: 'most_common_word';
    least_common_word: 'least_common_word';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AnalysisScalarFieldEnum = (typeof AnalysisScalarFieldEnum)[keyof typeof AnalysisScalarFieldEnum];

  export const ChatScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    pdf_file_id: 'pdf_file_id';
    message: 'message';
    response: 'response';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    is_active: 'is_active';
    location: 'location';
    industry: 'industry';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Pdf_fileScalarFieldEnum: {
    id: 'id';
    file_name: 'file_name';
    file_size: 'file_size';
    upload_date: 'upload_date';
    user_id: 'user_id';
    analyzed: 'analyzed';
    num_pages: 'num_pages';
    file_path: 'file_path';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Pdf_fileScalarFieldEnum = (typeof Pdf_fileScalarFieldEnum)[keyof typeof Pdf_fileScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    company_id: 'company_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type analysisWhereInput = {
    AND?: analysisWhereInput | analysisWhereInput[];
    OR?: analysisWhereInput[];
    NOT?: analysisWhereInput | analysisWhereInput[];
    id?: UuidFilter<'analysis'> | string;
    pdf_file_id?: UuidFilter<'analysis'> | string;
    num_words?: IntNullableFilter<'analysis'> | number | null;
    num_sentences?: IntNullableFilter<'analysis'> | number | null;
    most_common_word?: StringNullableFilter<'analysis'> | string | null;
    least_common_word?: StringNullableFilter<'analysis'> | string | null;
    created_at?: DateTimeFilter<'analysis'> | Date | string;
    updated_at?: DateTimeFilter<'analysis'> | Date | string;
    pdf_file?: XOR<Pdf_fileRelationFilter, pdf_fileWhereInput>;
  };

  export type analysisOrderByWithRelationInput = {
    id?: SortOrder;
    pdf_file_id?: SortOrder;
    num_words?: SortOrderInput | SortOrder;
    num_sentences?: SortOrderInput | SortOrder;
    most_common_word?: SortOrderInput | SortOrder;
    least_common_word?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    pdf_file?: pdf_fileOrderByWithRelationInput;
  };

  export type analysisWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: analysisWhereInput | analysisWhereInput[];
      OR?: analysisWhereInput[];
      NOT?: analysisWhereInput | analysisWhereInput[];
      pdf_file_id?: UuidFilter<'analysis'> | string;
      num_words?: IntNullableFilter<'analysis'> | number | null;
      num_sentences?: IntNullableFilter<'analysis'> | number | null;
      most_common_word?: StringNullableFilter<'analysis'> | string | null;
      least_common_word?: StringNullableFilter<'analysis'> | string | null;
      created_at?: DateTimeFilter<'analysis'> | Date | string;
      updated_at?: DateTimeFilter<'analysis'> | Date | string;
      pdf_file?: XOR<Pdf_fileRelationFilter, pdf_fileWhereInput>;
    },
    'id'
  >;

  export type analysisOrderByWithAggregationInput = {
    id?: SortOrder;
    pdf_file_id?: SortOrder;
    num_words?: SortOrderInput | SortOrder;
    num_sentences?: SortOrderInput | SortOrder;
    most_common_word?: SortOrderInput | SortOrder;
    least_common_word?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: analysisCountOrderByAggregateInput;
    _avg?: analysisAvgOrderByAggregateInput;
    _max?: analysisMaxOrderByAggregateInput;
    _min?: analysisMinOrderByAggregateInput;
    _sum?: analysisSumOrderByAggregateInput;
  };

  export type analysisScalarWhereWithAggregatesInput = {
    AND?: analysisScalarWhereWithAggregatesInput | analysisScalarWhereWithAggregatesInput[];
    OR?: analysisScalarWhereWithAggregatesInput[];
    NOT?: analysisScalarWhereWithAggregatesInput | analysisScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'analysis'> | string;
    pdf_file_id?: UuidWithAggregatesFilter<'analysis'> | string;
    num_words?: IntNullableWithAggregatesFilter<'analysis'> | number | null;
    num_sentences?: IntNullableWithAggregatesFilter<'analysis'> | number | null;
    most_common_word?: StringNullableWithAggregatesFilter<'analysis'> | string | null;
    least_common_word?: StringNullableWithAggregatesFilter<'analysis'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'analysis'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'analysis'> | Date | string;
  };

  export type chatWhereInput = {
    AND?: chatWhereInput | chatWhereInput[];
    OR?: chatWhereInput[];
    NOT?: chatWhereInput | chatWhereInput[];
    id?: UuidFilter<'chat'> | string;
    user_id?: UuidFilter<'chat'> | string;
    pdf_file_id?: UuidFilter<'chat'> | string;
    message?: StringFilter<'chat'> | string;
    response?: StringNullableFilter<'chat'> | string | null;
    created_at?: DateTimeFilter<'chat'> | Date | string;
    updated_at?: DateTimeFilter<'chat'> | Date | string;
    pdf_file?: XOR<Pdf_fileRelationFilter, pdf_fileWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type chatOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    pdf_file_id?: SortOrder;
    message?: SortOrder;
    response?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    pdf_file?: pdf_fileOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type chatWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: chatWhereInput | chatWhereInput[];
      OR?: chatWhereInput[];
      NOT?: chatWhereInput | chatWhereInput[];
      user_id?: UuidFilter<'chat'> | string;
      pdf_file_id?: UuidFilter<'chat'> | string;
      message?: StringFilter<'chat'> | string;
      response?: StringNullableFilter<'chat'> | string | null;
      created_at?: DateTimeFilter<'chat'> | Date | string;
      updated_at?: DateTimeFilter<'chat'> | Date | string;
      pdf_file?: XOR<Pdf_fileRelationFilter, pdf_fileWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type chatOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    pdf_file_id?: SortOrder;
    message?: SortOrder;
    response?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: chatCountOrderByAggregateInput;
    _max?: chatMaxOrderByAggregateInput;
    _min?: chatMinOrderByAggregateInput;
  };

  export type chatScalarWhereWithAggregatesInput = {
    AND?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[];
    OR?: chatScalarWhereWithAggregatesInput[];
    NOT?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'chat'> | string;
    user_id?: UuidWithAggregatesFilter<'chat'> | string;
    pdf_file_id?: UuidWithAggregatesFilter<'chat'> | string;
    message?: StringWithAggregatesFilter<'chat'> | string;
    response?: StringNullableWithAggregatesFilter<'chat'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'chat'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'chat'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    is_active?: BoolNullableFilter<'company'> | boolean | null;
    location?: StringNullableFilter<'company'> | string | null;
    industry?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    is_active?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      is_active?: BoolNullableFilter<'company'> | boolean | null;
      location?: StringNullableFilter<'company'> | string | null;
      industry?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    is_active?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    industry?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    is_active?: BoolNullableWithAggregatesFilter<'company'> | boolean | null;
    location?: StringNullableWithAggregatesFilter<'company'> | string | null;
    industry?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
  };

  export type pdf_fileWhereInput = {
    AND?: pdf_fileWhereInput | pdf_fileWhereInput[];
    OR?: pdf_fileWhereInput[];
    NOT?: pdf_fileWhereInput | pdf_fileWhereInput[];
    id?: UuidFilter<'pdf_file'> | string;
    file_name?: StringFilter<'pdf_file'> | string;
    file_size?: IntFilter<'pdf_file'> | number;
    upload_date?: DateTimeFilter<'pdf_file'> | Date | string;
    user_id?: UuidFilter<'pdf_file'> | string;
    analyzed?: BoolFilter<'pdf_file'> | boolean;
    num_pages?: IntNullableFilter<'pdf_file'> | number | null;
    file_path?: StringFilter<'pdf_file'> | string;
    created_at?: DateTimeFilter<'pdf_file'> | Date | string;
    updated_at?: DateTimeFilter<'pdf_file'> | Date | string;
    analysis?: AnalysisListRelationFilter;
    chat?: ChatListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type pdf_fileOrderByWithRelationInput = {
    id?: SortOrder;
    file_name?: SortOrder;
    file_size?: SortOrder;
    upload_date?: SortOrder;
    user_id?: SortOrder;
    analyzed?: SortOrder;
    num_pages?: SortOrderInput | SortOrder;
    file_path?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    analysis?: analysisOrderByRelationAggregateInput;
    chat?: chatOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type pdf_fileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: pdf_fileWhereInput | pdf_fileWhereInput[];
      OR?: pdf_fileWhereInput[];
      NOT?: pdf_fileWhereInput | pdf_fileWhereInput[];
      file_name?: StringFilter<'pdf_file'> | string;
      file_size?: IntFilter<'pdf_file'> | number;
      upload_date?: DateTimeFilter<'pdf_file'> | Date | string;
      user_id?: UuidFilter<'pdf_file'> | string;
      analyzed?: BoolFilter<'pdf_file'> | boolean;
      num_pages?: IntNullableFilter<'pdf_file'> | number | null;
      file_path?: StringFilter<'pdf_file'> | string;
      created_at?: DateTimeFilter<'pdf_file'> | Date | string;
      updated_at?: DateTimeFilter<'pdf_file'> | Date | string;
      analysis?: AnalysisListRelationFilter;
      chat?: ChatListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type pdf_fileOrderByWithAggregationInput = {
    id?: SortOrder;
    file_name?: SortOrder;
    file_size?: SortOrder;
    upload_date?: SortOrder;
    user_id?: SortOrder;
    analyzed?: SortOrder;
    num_pages?: SortOrderInput | SortOrder;
    file_path?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: pdf_fileCountOrderByAggregateInput;
    _avg?: pdf_fileAvgOrderByAggregateInput;
    _max?: pdf_fileMaxOrderByAggregateInput;
    _min?: pdf_fileMinOrderByAggregateInput;
    _sum?: pdf_fileSumOrderByAggregateInput;
  };

  export type pdf_fileScalarWhereWithAggregatesInput = {
    AND?: pdf_fileScalarWhereWithAggregatesInput | pdf_fileScalarWhereWithAggregatesInput[];
    OR?: pdf_fileScalarWhereWithAggregatesInput[];
    NOT?: pdf_fileScalarWhereWithAggregatesInput | pdf_fileScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'pdf_file'> | string;
    file_name?: StringWithAggregatesFilter<'pdf_file'> | string;
    file_size?: IntWithAggregatesFilter<'pdf_file'> | number;
    upload_date?: DateTimeWithAggregatesFilter<'pdf_file'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'pdf_file'> | string;
    analyzed?: BoolWithAggregatesFilter<'pdf_file'> | boolean;
    num_pages?: IntNullableWithAggregatesFilter<'pdf_file'> | number | null;
    file_path?: StringWithAggregatesFilter<'pdf_file'> | string;
    created_at?: DateTimeWithAggregatesFilter<'pdf_file'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'pdf_file'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    chat?: ChatListRelationFilter;
    pdf_file?: Pdf_fileListRelationFilter;
    company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    chat?: chatOrderByRelationAggregateInput;
    pdf_file?: pdf_fileOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      company_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      chat?: ChatListRelationFilter;
      pdf_file?: Pdf_fileListRelationFilter;
      company?: XOR<CompanyNullableRelationFilter, companyWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    company_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type analysisCreateInput = {
    id?: string;
    num_words?: number | null;
    num_sentences?: number | null;
    most_common_word?: string | null;
    least_common_word?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf_file: pdf_fileCreateNestedOneWithoutAnalysisInput;
  };

  export type analysisUncheckedCreateInput = {
    id?: string;
    pdf_file_id: string;
    num_words?: number | null;
    num_sentences?: number | null;
    most_common_word?: string | null;
    least_common_word?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type analysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    num_words?: NullableIntFieldUpdateOperationsInput | number | null;
    num_sentences?: NullableIntFieldUpdateOperationsInput | number | null;
    most_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    least_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_file?: pdf_fileUpdateOneRequiredWithoutAnalysisNestedInput;
  };

  export type analysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pdf_file_id?: StringFieldUpdateOperationsInput | string;
    num_words?: NullableIntFieldUpdateOperationsInput | number | null;
    num_sentences?: NullableIntFieldUpdateOperationsInput | number | null;
    most_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    least_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type analysisCreateManyInput = {
    id?: string;
    pdf_file_id: string;
    num_words?: number | null;
    num_sentences?: number | null;
    most_common_word?: string | null;
    least_common_word?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type analysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    num_words?: NullableIntFieldUpdateOperationsInput | number | null;
    num_sentences?: NullableIntFieldUpdateOperationsInput | number | null;
    most_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    least_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type analysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pdf_file_id?: StringFieldUpdateOperationsInput | string;
    num_words?: NullableIntFieldUpdateOperationsInput | number | null;
    num_sentences?: NullableIntFieldUpdateOperationsInput | number | null;
    most_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    least_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type chatCreateInput = {
    id?: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf_file: pdf_fileCreateNestedOneWithoutChatInput;
    user: userCreateNestedOneWithoutChatInput;
  };

  export type chatUncheckedCreateInput = {
    id?: string;
    user_id: string;
    pdf_file_id: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type chatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_file?: pdf_fileUpdateOneRequiredWithoutChatNestedInput;
    user?: userUpdateOneRequiredWithoutChatNestedInput;
  };

  export type chatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    pdf_file_id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type chatCreateManyInput = {
    id?: string;
    user_id: string;
    pdf_file_id: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type chatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type chatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    pdf_file_id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    location?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    location?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    location?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type pdf_fileCreateInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analysis?: analysisCreateNestedManyWithoutPdf_fileInput;
    chat?: chatCreateNestedManyWithoutPdf_fileInput;
    user: userCreateNestedOneWithoutPdf_fileInput;
  };

  export type pdf_fileUncheckedCreateInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    user_id: string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analysis?: analysisUncheckedCreateNestedManyWithoutPdf_fileInput;
    chat?: chatUncheckedCreateNestedManyWithoutPdf_fileInput;
  };

  export type pdf_fileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: analysisUpdateManyWithoutPdf_fileNestedInput;
    chat?: chatUpdateManyWithoutPdf_fileNestedInput;
    user?: userUpdateOneRequiredWithoutPdf_fileNestedInput;
  };

  export type pdf_fileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: analysisUncheckedUpdateManyWithoutPdf_fileNestedInput;
    chat?: chatUncheckedUpdateManyWithoutPdf_fileNestedInput;
  };

  export type pdf_fileCreateManyInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    user_id: string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type pdf_fileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type pdf_fileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatCreateNestedManyWithoutUserInput;
    pdf_file?: pdf_fileCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatUncheckedCreateNestedManyWithoutUserInput;
    pdf_file?: pdf_fileUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUpdateManyWithoutUserNestedInput;
    pdf_file?: pdf_fileUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUncheckedUpdateManyWithoutUserNestedInput;
    pdf_file?: pdf_fileUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type Pdf_fileRelationFilter = {
    is?: pdf_fileWhereInput;
    isNot?: pdf_fileWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type analysisCountOrderByAggregateInput = {
    id?: SortOrder;
    pdf_file_id?: SortOrder;
    num_words?: SortOrder;
    num_sentences?: SortOrder;
    most_common_word?: SortOrder;
    least_common_word?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type analysisAvgOrderByAggregateInput = {
    num_words?: SortOrder;
    num_sentences?: SortOrder;
  };

  export type analysisMaxOrderByAggregateInput = {
    id?: SortOrder;
    pdf_file_id?: SortOrder;
    num_words?: SortOrder;
    num_sentences?: SortOrder;
    most_common_word?: SortOrder;
    least_common_word?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type analysisMinOrderByAggregateInput = {
    id?: SortOrder;
    pdf_file_id?: SortOrder;
    num_words?: SortOrder;
    num_sentences?: SortOrder;
    most_common_word?: SortOrder;
    least_common_word?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type analysisSumOrderByAggregateInput = {
    num_words?: SortOrder;
    num_sentences?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type chatCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    pdf_file_id?: SortOrder;
    message?: SortOrder;
    response?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type chatMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    pdf_file_id?: SortOrder;
    message?: SortOrder;
    response?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type chatMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    pdf_file_id?: SortOrder;
    message?: SortOrder;
    response?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    is_active?: SortOrder;
    location?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    is_active?: SortOrder;
    location?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    is_active?: SortOrder;
    location?: SortOrder;
    industry?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type AnalysisListRelationFilter = {
    every?: analysisWhereInput;
    some?: analysisWhereInput;
    none?: analysisWhereInput;
  };

  export type ChatListRelationFilter = {
    every?: chatWhereInput;
    some?: chatWhereInput;
    none?: chatWhereInput;
  };

  export type analysisOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type chatOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type pdf_fileCountOrderByAggregateInput = {
    id?: SortOrder;
    file_name?: SortOrder;
    file_size?: SortOrder;
    upload_date?: SortOrder;
    user_id?: SortOrder;
    analyzed?: SortOrder;
    num_pages?: SortOrder;
    file_path?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type pdf_fileAvgOrderByAggregateInput = {
    file_size?: SortOrder;
    num_pages?: SortOrder;
  };

  export type pdf_fileMaxOrderByAggregateInput = {
    id?: SortOrder;
    file_name?: SortOrder;
    file_size?: SortOrder;
    upload_date?: SortOrder;
    user_id?: SortOrder;
    analyzed?: SortOrder;
    num_pages?: SortOrder;
    file_path?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type pdf_fileMinOrderByAggregateInput = {
    id?: SortOrder;
    file_name?: SortOrder;
    file_size?: SortOrder;
    upload_date?: SortOrder;
    user_id?: SortOrder;
    analyzed?: SortOrder;
    num_pages?: SortOrder;
    file_path?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type pdf_fileSumOrderByAggregateInput = {
    file_size?: SortOrder;
    num_pages?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type Pdf_fileListRelationFilter = {
    every?: pdf_fileWhereInput;
    some?: pdf_fileWhereInput;
    none?: pdf_fileWhereInput;
  };

  export type CompanyNullableRelationFilter = {
    is?: companyWhereInput | null;
    isNot?: companyWhereInput | null;
  };

  export type pdf_fileOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    company_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type pdf_fileCreateNestedOneWithoutAnalysisInput = {
    create?: XOR<pdf_fileCreateWithoutAnalysisInput, pdf_fileUncheckedCreateWithoutAnalysisInput>;
    connectOrCreate?: pdf_fileCreateOrConnectWithoutAnalysisInput;
    connect?: pdf_fileWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type pdf_fileUpdateOneRequiredWithoutAnalysisNestedInput = {
    create?: XOR<pdf_fileCreateWithoutAnalysisInput, pdf_fileUncheckedCreateWithoutAnalysisInput>;
    connectOrCreate?: pdf_fileCreateOrConnectWithoutAnalysisInput;
    upsert?: pdf_fileUpsertWithoutAnalysisInput;
    connect?: pdf_fileWhereUniqueInput;
    update?: XOR<
      XOR<pdf_fileUpdateToOneWithWhereWithoutAnalysisInput, pdf_fileUpdateWithoutAnalysisInput>,
      pdf_fileUncheckedUpdateWithoutAnalysisInput
    >;
  };

  export type pdf_fileCreateNestedOneWithoutChatInput = {
    create?: XOR<pdf_fileCreateWithoutChatInput, pdf_fileUncheckedCreateWithoutChatInput>;
    connectOrCreate?: pdf_fileCreateOrConnectWithoutChatInput;
    connect?: pdf_fileWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutChatInput = {
    create?: XOR<userCreateWithoutChatInput, userUncheckedCreateWithoutChatInput>;
    connectOrCreate?: userCreateOrConnectWithoutChatInput;
    connect?: userWhereUniqueInput;
  };

  export type pdf_fileUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<pdf_fileCreateWithoutChatInput, pdf_fileUncheckedCreateWithoutChatInput>;
    connectOrCreate?: pdf_fileCreateOrConnectWithoutChatInput;
    upsert?: pdf_fileUpsertWithoutChatInput;
    connect?: pdf_fileWhereUniqueInput;
    update?: XOR<
      XOR<pdf_fileUpdateToOneWithWhereWithoutChatInput, pdf_fileUpdateWithoutChatInput>,
      pdf_fileUncheckedUpdateWithoutChatInput
    >;
  };

  export type userUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<userCreateWithoutChatInput, userUncheckedCreateWithoutChatInput>;
    connectOrCreate?: userCreateOrConnectWithoutChatInput;
    upsert?: userUpsertWithoutChatInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutChatInput, userUpdateWithoutChatInput>,
      userUncheckedUpdateWithoutChatInput
    >;
  };

  export type userCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type userUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>
      | userCreateWithoutCompanyInput[]
      | userUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput | userCreateOrConnectWithoutCompanyInput[];
    upsert?: userUpsertWithWhereUniqueWithoutCompanyInput | userUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: userCreateManyCompanyInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutCompanyInput | userUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: userUpdateManyWithWhereWithoutCompanyInput | userUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type analysisCreateNestedManyWithoutPdf_fileInput = {
    create?:
      | XOR<analysisCreateWithoutPdf_fileInput, analysisUncheckedCreateWithoutPdf_fileInput>
      | analysisCreateWithoutPdf_fileInput[]
      | analysisUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: analysisCreateOrConnectWithoutPdf_fileInput | analysisCreateOrConnectWithoutPdf_fileInput[];
    createMany?: analysisCreateManyPdf_fileInputEnvelope;
    connect?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
  };

  export type chatCreateNestedManyWithoutPdf_fileInput = {
    create?:
      | XOR<chatCreateWithoutPdf_fileInput, chatUncheckedCreateWithoutPdf_fileInput>
      | chatCreateWithoutPdf_fileInput[]
      | chatUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: chatCreateOrConnectWithoutPdf_fileInput | chatCreateOrConnectWithoutPdf_fileInput[];
    createMany?: chatCreateManyPdf_fileInputEnvelope;
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutPdf_fileInput = {
    create?: XOR<userCreateWithoutPdf_fileInput, userUncheckedCreateWithoutPdf_fileInput>;
    connectOrCreate?: userCreateOrConnectWithoutPdf_fileInput;
    connect?: userWhereUniqueInput;
  };

  export type analysisUncheckedCreateNestedManyWithoutPdf_fileInput = {
    create?:
      | XOR<analysisCreateWithoutPdf_fileInput, analysisUncheckedCreateWithoutPdf_fileInput>
      | analysisCreateWithoutPdf_fileInput[]
      | analysisUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: analysisCreateOrConnectWithoutPdf_fileInput | analysisCreateOrConnectWithoutPdf_fileInput[];
    createMany?: analysisCreateManyPdf_fileInputEnvelope;
    connect?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
  };

  export type chatUncheckedCreateNestedManyWithoutPdf_fileInput = {
    create?:
      | XOR<chatCreateWithoutPdf_fileInput, chatUncheckedCreateWithoutPdf_fileInput>
      | chatCreateWithoutPdf_fileInput[]
      | chatUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: chatCreateOrConnectWithoutPdf_fileInput | chatCreateOrConnectWithoutPdf_fileInput[];
    createMany?: chatCreateManyPdf_fileInputEnvelope;
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type analysisUpdateManyWithoutPdf_fileNestedInput = {
    create?:
      | XOR<analysisCreateWithoutPdf_fileInput, analysisUncheckedCreateWithoutPdf_fileInput>
      | analysisCreateWithoutPdf_fileInput[]
      | analysisUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: analysisCreateOrConnectWithoutPdf_fileInput | analysisCreateOrConnectWithoutPdf_fileInput[];
    upsert?: analysisUpsertWithWhereUniqueWithoutPdf_fileInput | analysisUpsertWithWhereUniqueWithoutPdf_fileInput[];
    createMany?: analysisCreateManyPdf_fileInputEnvelope;
    set?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    disconnect?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    delete?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    connect?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    update?: analysisUpdateWithWhereUniqueWithoutPdf_fileInput | analysisUpdateWithWhereUniqueWithoutPdf_fileInput[];
    updateMany?: analysisUpdateManyWithWhereWithoutPdf_fileInput | analysisUpdateManyWithWhereWithoutPdf_fileInput[];
    deleteMany?: analysisScalarWhereInput | analysisScalarWhereInput[];
  };

  export type chatUpdateManyWithoutPdf_fileNestedInput = {
    create?:
      | XOR<chatCreateWithoutPdf_fileInput, chatUncheckedCreateWithoutPdf_fileInput>
      | chatCreateWithoutPdf_fileInput[]
      | chatUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: chatCreateOrConnectWithoutPdf_fileInput | chatCreateOrConnectWithoutPdf_fileInput[];
    upsert?: chatUpsertWithWhereUniqueWithoutPdf_fileInput | chatUpsertWithWhereUniqueWithoutPdf_fileInput[];
    createMany?: chatCreateManyPdf_fileInputEnvelope;
    set?: chatWhereUniqueInput | chatWhereUniqueInput[];
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[];
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    update?: chatUpdateWithWhereUniqueWithoutPdf_fileInput | chatUpdateWithWhereUniqueWithoutPdf_fileInput[];
    updateMany?: chatUpdateManyWithWhereWithoutPdf_fileInput | chatUpdateManyWithWhereWithoutPdf_fileInput[];
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutPdf_fileNestedInput = {
    create?: XOR<userCreateWithoutPdf_fileInput, userUncheckedCreateWithoutPdf_fileInput>;
    connectOrCreate?: userCreateOrConnectWithoutPdf_fileInput;
    upsert?: userUpsertWithoutPdf_fileInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPdf_fileInput, userUpdateWithoutPdf_fileInput>,
      userUncheckedUpdateWithoutPdf_fileInput
    >;
  };

  export type analysisUncheckedUpdateManyWithoutPdf_fileNestedInput = {
    create?:
      | XOR<analysisCreateWithoutPdf_fileInput, analysisUncheckedCreateWithoutPdf_fileInput>
      | analysisCreateWithoutPdf_fileInput[]
      | analysisUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: analysisCreateOrConnectWithoutPdf_fileInput | analysisCreateOrConnectWithoutPdf_fileInput[];
    upsert?: analysisUpsertWithWhereUniqueWithoutPdf_fileInput | analysisUpsertWithWhereUniqueWithoutPdf_fileInput[];
    createMany?: analysisCreateManyPdf_fileInputEnvelope;
    set?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    disconnect?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    delete?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    connect?: analysisWhereUniqueInput | analysisWhereUniqueInput[];
    update?: analysisUpdateWithWhereUniqueWithoutPdf_fileInput | analysisUpdateWithWhereUniqueWithoutPdf_fileInput[];
    updateMany?: analysisUpdateManyWithWhereWithoutPdf_fileInput | analysisUpdateManyWithWhereWithoutPdf_fileInput[];
    deleteMany?: analysisScalarWhereInput | analysisScalarWhereInput[];
  };

  export type chatUncheckedUpdateManyWithoutPdf_fileNestedInput = {
    create?:
      | XOR<chatCreateWithoutPdf_fileInput, chatUncheckedCreateWithoutPdf_fileInput>
      | chatCreateWithoutPdf_fileInput[]
      | chatUncheckedCreateWithoutPdf_fileInput[];
    connectOrCreate?: chatCreateOrConnectWithoutPdf_fileInput | chatCreateOrConnectWithoutPdf_fileInput[];
    upsert?: chatUpsertWithWhereUniqueWithoutPdf_fileInput | chatUpsertWithWhereUniqueWithoutPdf_fileInput[];
    createMany?: chatCreateManyPdf_fileInputEnvelope;
    set?: chatWhereUniqueInput | chatWhereUniqueInput[];
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[];
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    update?: chatUpdateWithWhereUniqueWithoutPdf_fileInput | chatUpdateWithWhereUniqueWithoutPdf_fileInput[];
    updateMany?: chatUpdateManyWithWhereWithoutPdf_fileInput | chatUpdateManyWithWhereWithoutPdf_fileInput[];
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[];
  };

  export type chatCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<chatCreateWithoutUserInput, chatUncheckedCreateWithoutUserInput>
      | chatCreateWithoutUserInput[]
      | chatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: chatCreateOrConnectWithoutUserInput | chatCreateOrConnectWithoutUserInput[];
    createMany?: chatCreateManyUserInputEnvelope;
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
  };

  export type pdf_fileCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<pdf_fileCreateWithoutUserInput, pdf_fileUncheckedCreateWithoutUserInput>
      | pdf_fileCreateWithoutUserInput[]
      | pdf_fileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdf_fileCreateOrConnectWithoutUserInput | pdf_fileCreateOrConnectWithoutUserInput[];
    createMany?: pdf_fileCreateManyUserInputEnvelope;
    connect?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutUserInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    connect?: companyWhereUniqueInput;
  };

  export type chatUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<chatCreateWithoutUserInput, chatUncheckedCreateWithoutUserInput>
      | chatCreateWithoutUserInput[]
      | chatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: chatCreateOrConnectWithoutUserInput | chatCreateOrConnectWithoutUserInput[];
    createMany?: chatCreateManyUserInputEnvelope;
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
  };

  export type pdf_fileUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<pdf_fileCreateWithoutUserInput, pdf_fileUncheckedCreateWithoutUserInput>
      | pdf_fileCreateWithoutUserInput[]
      | pdf_fileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdf_fileCreateOrConnectWithoutUserInput | pdf_fileCreateOrConnectWithoutUserInput[];
    createMany?: pdf_fileCreateManyUserInputEnvelope;
    connect?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
  };

  export type chatUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<chatCreateWithoutUserInput, chatUncheckedCreateWithoutUserInput>
      | chatCreateWithoutUserInput[]
      | chatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: chatCreateOrConnectWithoutUserInput | chatCreateOrConnectWithoutUserInput[];
    upsert?: chatUpsertWithWhereUniqueWithoutUserInput | chatUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: chatCreateManyUserInputEnvelope;
    set?: chatWhereUniqueInput | chatWhereUniqueInput[];
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[];
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    update?: chatUpdateWithWhereUniqueWithoutUserInput | chatUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: chatUpdateManyWithWhereWithoutUserInput | chatUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[];
  };

  export type pdf_fileUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<pdf_fileCreateWithoutUserInput, pdf_fileUncheckedCreateWithoutUserInput>
      | pdf_fileCreateWithoutUserInput[]
      | pdf_fileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdf_fileCreateOrConnectWithoutUserInput | pdf_fileCreateOrConnectWithoutUserInput[];
    upsert?: pdf_fileUpsertWithWhereUniqueWithoutUserInput | pdf_fileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: pdf_fileCreateManyUserInputEnvelope;
    set?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    disconnect?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    delete?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    connect?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    update?: pdf_fileUpdateWithWhereUniqueWithoutUserInput | pdf_fileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: pdf_fileUpdateManyWithWhereWithoutUserInput | pdf_fileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: pdf_fileScalarWhereInput | pdf_fileScalarWhereInput[];
  };

  export type companyUpdateOneWithoutUserNestedInput = {
    create?: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    connectOrCreate?: companyCreateOrConnectWithoutUserInput;
    upsert?: companyUpsertWithoutUserInput;
    disconnect?: companyWhereInput | boolean;
    delete?: companyWhereInput | boolean;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutUserInput, companyUpdateWithoutUserInput>,
      companyUncheckedUpdateWithoutUserInput
    >;
  };

  export type chatUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<chatCreateWithoutUserInput, chatUncheckedCreateWithoutUserInput>
      | chatCreateWithoutUserInput[]
      | chatUncheckedCreateWithoutUserInput[];
    connectOrCreate?: chatCreateOrConnectWithoutUserInput | chatCreateOrConnectWithoutUserInput[];
    upsert?: chatUpsertWithWhereUniqueWithoutUserInput | chatUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: chatCreateManyUserInputEnvelope;
    set?: chatWhereUniqueInput | chatWhereUniqueInput[];
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[];
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[];
    update?: chatUpdateWithWhereUniqueWithoutUserInput | chatUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: chatUpdateManyWithWhereWithoutUserInput | chatUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[];
  };

  export type pdf_fileUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<pdf_fileCreateWithoutUserInput, pdf_fileUncheckedCreateWithoutUserInput>
      | pdf_fileCreateWithoutUserInput[]
      | pdf_fileUncheckedCreateWithoutUserInput[];
    connectOrCreate?: pdf_fileCreateOrConnectWithoutUserInput | pdf_fileCreateOrConnectWithoutUserInput[];
    upsert?: pdf_fileUpsertWithWhereUniqueWithoutUserInput | pdf_fileUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: pdf_fileCreateManyUserInputEnvelope;
    set?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    disconnect?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    delete?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    connect?: pdf_fileWhereUniqueInput | pdf_fileWhereUniqueInput[];
    update?: pdf_fileUpdateWithWhereUniqueWithoutUserInput | pdf_fileUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: pdf_fileUpdateManyWithWhereWithoutUserInput | pdf_fileUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: pdf_fileScalarWhereInput | pdf_fileScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type pdf_fileCreateWithoutAnalysisInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatCreateNestedManyWithoutPdf_fileInput;
    user: userCreateNestedOneWithoutPdf_fileInput;
  };

  export type pdf_fileUncheckedCreateWithoutAnalysisInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    user_id: string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatUncheckedCreateNestedManyWithoutPdf_fileInput;
  };

  export type pdf_fileCreateOrConnectWithoutAnalysisInput = {
    where: pdf_fileWhereUniqueInput;
    create: XOR<pdf_fileCreateWithoutAnalysisInput, pdf_fileUncheckedCreateWithoutAnalysisInput>;
  };

  export type pdf_fileUpsertWithoutAnalysisInput = {
    update: XOR<pdf_fileUpdateWithoutAnalysisInput, pdf_fileUncheckedUpdateWithoutAnalysisInput>;
    create: XOR<pdf_fileCreateWithoutAnalysisInput, pdf_fileUncheckedCreateWithoutAnalysisInput>;
    where?: pdf_fileWhereInput;
  };

  export type pdf_fileUpdateToOneWithWhereWithoutAnalysisInput = {
    where?: pdf_fileWhereInput;
    data: XOR<pdf_fileUpdateWithoutAnalysisInput, pdf_fileUncheckedUpdateWithoutAnalysisInput>;
  };

  export type pdf_fileUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUpdateManyWithoutPdf_fileNestedInput;
    user?: userUpdateOneRequiredWithoutPdf_fileNestedInput;
  };

  export type pdf_fileUncheckedUpdateWithoutAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUncheckedUpdateManyWithoutPdf_fileNestedInput;
  };

  export type pdf_fileCreateWithoutChatInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analysis?: analysisCreateNestedManyWithoutPdf_fileInput;
    user: userCreateNestedOneWithoutPdf_fileInput;
  };

  export type pdf_fileUncheckedCreateWithoutChatInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    user_id: string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analysis?: analysisUncheckedCreateNestedManyWithoutPdf_fileInput;
  };

  export type pdf_fileCreateOrConnectWithoutChatInput = {
    where: pdf_fileWhereUniqueInput;
    create: XOR<pdf_fileCreateWithoutChatInput, pdf_fileUncheckedCreateWithoutChatInput>;
  };

  export type userCreateWithoutChatInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf_file?: pdf_fileCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutChatInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf_file?: pdf_fileUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutChatInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutChatInput, userUncheckedCreateWithoutChatInput>;
  };

  export type pdf_fileUpsertWithoutChatInput = {
    update: XOR<pdf_fileUpdateWithoutChatInput, pdf_fileUncheckedUpdateWithoutChatInput>;
    create: XOR<pdf_fileCreateWithoutChatInput, pdf_fileUncheckedCreateWithoutChatInput>;
    where?: pdf_fileWhereInput;
  };

  export type pdf_fileUpdateToOneWithWhereWithoutChatInput = {
    where?: pdf_fileWhereInput;
    data: XOR<pdf_fileUpdateWithoutChatInput, pdf_fileUncheckedUpdateWithoutChatInput>;
  };

  export type pdf_fileUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: analysisUpdateManyWithoutPdf_fileNestedInput;
    user?: userUpdateOneRequiredWithoutPdf_fileNestedInput;
  };

  export type pdf_fileUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: analysisUncheckedUpdateManyWithoutPdf_fileNestedInput;
  };

  export type userUpsertWithoutChatInput = {
    update: XOR<userUpdateWithoutChatInput, userUncheckedUpdateWithoutChatInput>;
    create: XOR<userCreateWithoutChatInput, userUncheckedCreateWithoutChatInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutChatInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutChatInput, userUncheckedUpdateWithoutChatInput>;
  };

  export type userUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_file?: pdf_fileUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_file?: pdf_fileUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatCreateNestedManyWithoutUserInput;
    pdf_file?: pdf_fileCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatUncheckedCreateNestedManyWithoutUserInput;
    pdf_file?: pdf_fileUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userCreateManyCompanyInputEnvelope = {
    data: userCreateManyCompanyInput | userCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type userUpdateWithWhereUniqueWithoutCompanyInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateManyWithWhereWithoutCompanyInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    company_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type analysisCreateWithoutPdf_fileInput = {
    id?: string;
    num_words?: number | null;
    num_sentences?: number | null;
    most_common_word?: string | null;
    least_common_word?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type analysisUncheckedCreateWithoutPdf_fileInput = {
    id?: string;
    num_words?: number | null;
    num_sentences?: number | null;
    most_common_word?: string | null;
    least_common_word?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type analysisCreateOrConnectWithoutPdf_fileInput = {
    where: analysisWhereUniqueInput;
    create: XOR<analysisCreateWithoutPdf_fileInput, analysisUncheckedCreateWithoutPdf_fileInput>;
  };

  export type analysisCreateManyPdf_fileInputEnvelope = {
    data: analysisCreateManyPdf_fileInput | analysisCreateManyPdf_fileInput[];
    skipDuplicates?: boolean;
  };

  export type chatCreateWithoutPdf_fileInput = {
    id?: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutChatInput;
  };

  export type chatUncheckedCreateWithoutPdf_fileInput = {
    id?: string;
    user_id: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type chatCreateOrConnectWithoutPdf_fileInput = {
    where: chatWhereUniqueInput;
    create: XOR<chatCreateWithoutPdf_fileInput, chatUncheckedCreateWithoutPdf_fileInput>;
  };

  export type chatCreateManyPdf_fileInputEnvelope = {
    data: chatCreateManyPdf_fileInput | chatCreateManyPdf_fileInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutPdf_fileInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPdf_fileInput = {
    id?: string;
    email: string;
    company_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    chat?: chatUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPdf_fileInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPdf_fileInput, userUncheckedCreateWithoutPdf_fileInput>;
  };

  export type analysisUpsertWithWhereUniqueWithoutPdf_fileInput = {
    where: analysisWhereUniqueInput;
    update: XOR<analysisUpdateWithoutPdf_fileInput, analysisUncheckedUpdateWithoutPdf_fileInput>;
    create: XOR<analysisCreateWithoutPdf_fileInput, analysisUncheckedCreateWithoutPdf_fileInput>;
  };

  export type analysisUpdateWithWhereUniqueWithoutPdf_fileInput = {
    where: analysisWhereUniqueInput;
    data: XOR<analysisUpdateWithoutPdf_fileInput, analysisUncheckedUpdateWithoutPdf_fileInput>;
  };

  export type analysisUpdateManyWithWhereWithoutPdf_fileInput = {
    where: analysisScalarWhereInput;
    data: XOR<analysisUpdateManyMutationInput, analysisUncheckedUpdateManyWithoutPdf_fileInput>;
  };

  export type analysisScalarWhereInput = {
    AND?: analysisScalarWhereInput | analysisScalarWhereInput[];
    OR?: analysisScalarWhereInput[];
    NOT?: analysisScalarWhereInput | analysisScalarWhereInput[];
    id?: UuidFilter<'analysis'> | string;
    pdf_file_id?: UuidFilter<'analysis'> | string;
    num_words?: IntNullableFilter<'analysis'> | number | null;
    num_sentences?: IntNullableFilter<'analysis'> | number | null;
    most_common_word?: StringNullableFilter<'analysis'> | string | null;
    least_common_word?: StringNullableFilter<'analysis'> | string | null;
    created_at?: DateTimeFilter<'analysis'> | Date | string;
    updated_at?: DateTimeFilter<'analysis'> | Date | string;
  };

  export type chatUpsertWithWhereUniqueWithoutPdf_fileInput = {
    where: chatWhereUniqueInput;
    update: XOR<chatUpdateWithoutPdf_fileInput, chatUncheckedUpdateWithoutPdf_fileInput>;
    create: XOR<chatCreateWithoutPdf_fileInput, chatUncheckedCreateWithoutPdf_fileInput>;
  };

  export type chatUpdateWithWhereUniqueWithoutPdf_fileInput = {
    where: chatWhereUniqueInput;
    data: XOR<chatUpdateWithoutPdf_fileInput, chatUncheckedUpdateWithoutPdf_fileInput>;
  };

  export type chatUpdateManyWithWhereWithoutPdf_fileInput = {
    where: chatScalarWhereInput;
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyWithoutPdf_fileInput>;
  };

  export type chatScalarWhereInput = {
    AND?: chatScalarWhereInput | chatScalarWhereInput[];
    OR?: chatScalarWhereInput[];
    NOT?: chatScalarWhereInput | chatScalarWhereInput[];
    id?: UuidFilter<'chat'> | string;
    user_id?: UuidFilter<'chat'> | string;
    pdf_file_id?: UuidFilter<'chat'> | string;
    message?: StringFilter<'chat'> | string;
    response?: StringNullableFilter<'chat'> | string | null;
    created_at?: DateTimeFilter<'chat'> | Date | string;
    updated_at?: DateTimeFilter<'chat'> | Date | string;
  };

  export type userUpsertWithoutPdf_fileInput = {
    update: XOR<userUpdateWithoutPdf_fileInput, userUncheckedUpdateWithoutPdf_fileInput>;
    create: XOR<userCreateWithoutPdf_fileInput, userUncheckedCreateWithoutPdf_fileInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPdf_fileInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPdf_fileInput, userUncheckedUpdateWithoutPdf_fileInput>;
  };

  export type userUpdateWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUpdateManyWithoutUserNestedInput;
    company?: companyUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    company_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type chatCreateWithoutUserInput = {
    id?: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    pdf_file: pdf_fileCreateNestedOneWithoutChatInput;
  };

  export type chatUncheckedCreateWithoutUserInput = {
    id?: string;
    pdf_file_id: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type chatCreateOrConnectWithoutUserInput = {
    where: chatWhereUniqueInput;
    create: XOR<chatCreateWithoutUserInput, chatUncheckedCreateWithoutUserInput>;
  };

  export type chatCreateManyUserInputEnvelope = {
    data: chatCreateManyUserInput | chatCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type pdf_fileCreateWithoutUserInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analysis?: analysisCreateNestedManyWithoutPdf_fileInput;
    chat?: chatCreateNestedManyWithoutPdf_fileInput;
  };

  export type pdf_fileUncheckedCreateWithoutUserInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    analysis?: analysisUncheckedCreateNestedManyWithoutPdf_fileInput;
    chat?: chatUncheckedCreateNestedManyWithoutPdf_fileInput;
  };

  export type pdf_fileCreateOrConnectWithoutUserInput = {
    where: pdf_fileWhereUniqueInput;
    create: XOR<pdf_fileCreateWithoutUserInput, pdf_fileUncheckedCreateWithoutUserInput>;
  };

  export type pdf_fileCreateManyUserInputEnvelope = {
    data: pdf_fileCreateManyUserInput | pdf_fileCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    location?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    location?: string | null;
    industry?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type chatUpsertWithWhereUniqueWithoutUserInput = {
    where: chatWhereUniqueInput;
    update: XOR<chatUpdateWithoutUserInput, chatUncheckedUpdateWithoutUserInput>;
    create: XOR<chatCreateWithoutUserInput, chatUncheckedCreateWithoutUserInput>;
  };

  export type chatUpdateWithWhereUniqueWithoutUserInput = {
    where: chatWhereUniqueInput;
    data: XOR<chatUpdateWithoutUserInput, chatUncheckedUpdateWithoutUserInput>;
  };

  export type chatUpdateManyWithWhereWithoutUserInput = {
    where: chatScalarWhereInput;
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyWithoutUserInput>;
  };

  export type pdf_fileUpsertWithWhereUniqueWithoutUserInput = {
    where: pdf_fileWhereUniqueInput;
    update: XOR<pdf_fileUpdateWithoutUserInput, pdf_fileUncheckedUpdateWithoutUserInput>;
    create: XOR<pdf_fileCreateWithoutUserInput, pdf_fileUncheckedCreateWithoutUserInput>;
  };

  export type pdf_fileUpdateWithWhereUniqueWithoutUserInput = {
    where: pdf_fileWhereUniqueInput;
    data: XOR<pdf_fileUpdateWithoutUserInput, pdf_fileUncheckedUpdateWithoutUserInput>;
  };

  export type pdf_fileUpdateManyWithWhereWithoutUserInput = {
    where: pdf_fileScalarWhereInput;
    data: XOR<pdf_fileUpdateManyMutationInput, pdf_fileUncheckedUpdateManyWithoutUserInput>;
  };

  export type pdf_fileScalarWhereInput = {
    AND?: pdf_fileScalarWhereInput | pdf_fileScalarWhereInput[];
    OR?: pdf_fileScalarWhereInput[];
    NOT?: pdf_fileScalarWhereInput | pdf_fileScalarWhereInput[];
    id?: UuidFilter<'pdf_file'> | string;
    file_name?: StringFilter<'pdf_file'> | string;
    file_size?: IntFilter<'pdf_file'> | number;
    upload_date?: DateTimeFilter<'pdf_file'> | Date | string;
    user_id?: UuidFilter<'pdf_file'> | string;
    analyzed?: BoolFilter<'pdf_file'> | boolean;
    num_pages?: IntNullableFilter<'pdf_file'> | number | null;
    file_path?: StringFilter<'pdf_file'> | string;
    created_at?: DateTimeFilter<'pdf_file'> | Date | string;
    updated_at?: DateTimeFilter<'pdf_file'> | Date | string;
  };

  export type companyUpsertWithoutUserInput = {
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutUserInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    industry?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyCompanyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUpdateManyWithoutUserNestedInput;
    pdf_file?: pdf_fileUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    chat?: chatUncheckedUpdateManyWithoutUserNestedInput;
    pdf_file?: pdf_fileUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type analysisCreateManyPdf_fileInput = {
    id?: string;
    num_words?: number | null;
    num_sentences?: number | null;
    most_common_word?: string | null;
    least_common_word?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type chatCreateManyPdf_fileInput = {
    id?: string;
    user_id: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type analysisUpdateWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    num_words?: NullableIntFieldUpdateOperationsInput | number | null;
    num_sentences?: NullableIntFieldUpdateOperationsInput | number | null;
    most_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    least_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type analysisUncheckedUpdateWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    num_words?: NullableIntFieldUpdateOperationsInput | number | null;
    num_sentences?: NullableIntFieldUpdateOperationsInput | number | null;
    most_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    least_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type analysisUncheckedUpdateManyWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    num_words?: NullableIntFieldUpdateOperationsInput | number | null;
    num_sentences?: NullableIntFieldUpdateOperationsInput | number | null;
    most_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    least_common_word?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type chatUpdateWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutChatNestedInput;
  };

  export type chatUncheckedUpdateWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type chatUncheckedUpdateManyWithoutPdf_fileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type chatCreateManyUserInput = {
    id?: string;
    pdf_file_id: string;
    message: string;
    response?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type pdf_fileCreateManyUserInput = {
    id?: string;
    file_name: string;
    file_size: number;
    upload_date?: Date | string;
    analyzed?: boolean;
    num_pages?: number | null;
    file_path: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type chatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    pdf_file?: pdf_fileUpdateOneRequiredWithoutChatNestedInput;
  };

  export type chatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pdf_file_id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type chatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pdf_file_id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    response?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type pdf_fileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: analysisUpdateManyWithoutPdf_fileNestedInput;
    chat?: chatUpdateManyWithoutPdf_fileNestedInput;
  };

  export type pdf_fileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    analysis?: analysisUncheckedUpdateManyWithoutPdf_fileNestedInput;
    chat?: chatUncheckedUpdateManyWithoutPdf_fileNestedInput;
  };

  export type pdf_fileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    file_name?: StringFieldUpdateOperationsInput | string;
    file_size?: IntFieldUpdateOperationsInput | number;
    upload_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    analyzed?: BoolFieldUpdateOperationsInput | boolean;
    num_pages?: NullableIntFieldUpdateOperationsInput | number | null;
    file_path?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Pdf_fileCountOutputTypeDefaultArgs instead
   */
  export type Pdf_fileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Pdf_fileCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use analysisDefaultArgs instead
   */
  export type analysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    analysisDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use chatDefaultArgs instead
   */
  export type chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = chatDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use pdf_fileDefaultArgs instead
   */
  export type pdf_fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    pdf_fileDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
