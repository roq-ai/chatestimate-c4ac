/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type { Prisma, analysis, chat, company, pdf_file, user } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface AnalysisSDK {
  create: <
    T extends Prisma.analysisCreateArgs,
    R extends CheckSelect<T, analysis, Prisma.analysisGetPayload<T>>,
    U extends Omit<Prisma.analysisCreateArgs, 'data'> & {
      data: Prisma.analysisUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.analysisCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.analysisCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.analysisUpdateArgs,
    R extends Prisma.analysisGetPayload<T>,
    U extends Omit<Prisma.analysisUpdateArgs, 'data'> & {
      data: Prisma.analysisUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.analysisUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.analysisUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.analysisUpsertArgs, R extends Prisma.analysisGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.analysisUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.analysisDeleteArgs, R extends Prisma.analysisGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.analysisDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.analysisDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.analysisDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.analysisFindManyArgs, R extends GetFindResult<Prisma.$analysisPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.analysisFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.analysisCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.analysisCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.analysisFindManyArgs,
    R extends GetFindResult<Prisma.$analysisPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.analysisFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.analysisFindFirstArgs, R extends GetFindResult<Prisma.$analysisPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.analysisFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface ChatSDK {
  create: <
    T extends Prisma.chatCreateArgs,
    R extends CheckSelect<T, chat, Prisma.chatGetPayload<T>>,
    U extends Omit<Prisma.chatCreateArgs, 'data'> & {
      data: Prisma.chatUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.chatCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.chatCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.chatUpdateArgs,
    R extends Prisma.chatGetPayload<T>,
    U extends Omit<Prisma.chatUpdateArgs, 'data'> & {
      data: Prisma.chatUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.chatUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.chatUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.chatUpsertArgs, R extends Prisma.chatGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.chatUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.chatDeleteArgs, R extends Prisma.chatGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.chatDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.chatDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.chatDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.chatFindManyArgs, R extends GetFindResult<Prisma.$chatPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.chatFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.chatCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.chatCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.chatFindManyArgs,
    R extends GetFindResult<Prisma.$chatPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.chatFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.chatFindFirstArgs, R extends GetFindResult<Prisma.$chatPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.chatFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface CompanySDK {
  create: <
    T extends Prisma.companyCreateArgs,
    R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>,
    U extends Omit<Prisma.companyCreateArgs, 'data'> & {
      data: Omit<Prisma.companyUncheckedCreateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.companyCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.companyUpdateArgs,
    R extends Prisma.companyGetPayload<T>,
    U extends Omit<Prisma.companyUpdateArgs, 'data'> & {
      data: Omit<Prisma.companyUncheckedUpdateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.companyUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.companyDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.companyFindManyArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.companyCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.companyFindManyArgs,
    R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.companyFindFirstArgs, R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Pdf_fileSDK {
  create: <
    T extends Prisma.pdf_fileCreateArgs,
    R extends CheckSelect<T, pdf_file, Prisma.pdf_fileGetPayload<T>>,
    U extends Omit<Prisma.pdf_fileCreateArgs, 'data'> & {
      data: Omit<Prisma.pdf_fileUncheckedCreateInput, 'analysis' | 'chat'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.pdf_fileCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.pdf_fileCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.pdf_fileUpdateArgs,
    R extends Prisma.pdf_fileGetPayload<T>,
    U extends Omit<Prisma.pdf_fileUpdateArgs, 'data'> & {
      data: Omit<Prisma.pdf_fileUncheckedUpdateInput, 'analysis' | 'chat'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.pdf_fileUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.pdf_fileUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.pdf_fileUpsertArgs, R extends Prisma.pdf_fileGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.pdf_fileUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.pdf_fileDeleteArgs, R extends Prisma.pdf_fileGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.pdf_fileDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.pdf_fileDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.pdf_fileDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.pdf_fileFindManyArgs, R extends GetFindResult<Prisma.$pdf_filePayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.pdf_fileFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.pdf_fileCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.pdf_fileCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.pdf_fileFindManyArgs,
    R extends GetFindResult<Prisma.$pdf_filePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.pdf_fileFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.pdf_fileFindFirstArgs, R extends GetFindResult<Prisma.$pdf_filePayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.pdf_fileFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <
    T extends Prisma.userCreateArgs,
    R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
    U extends Omit<Prisma.userCreateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedCreateInput, 'chat' | 'pdf_file'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.userUpdateArgs,
    R extends Prisma.userGetPayload<T>,
    U extends Omit<Prisma.userUpdateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedUpdateInput, 'chat' | 'pdf_file'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public analysis!: AnalysisSDK;

  public chat!: ChatSDK;

  public company!: CompanySDK;

  public pdf_file!: Pdf_fileSDK;

  public user!: UserSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.analysis = {
      create: async function createAnalysis<
        T extends Prisma.analysisCreateArgs,
        R extends CheckSelect<T, analysis, Prisma.analysisGetPayload<T>>,
        U extends Omit<Prisma.analysisCreateArgs, 'data'> & {
          data: Prisma.analysisUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/analysis/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyAnalysis<
        T extends Prisma.analysisCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.analysisCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/analysis/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateAnalysis<
        T extends Prisma.analysisUpdateArgs,
        R extends Prisma.analysisGetPayload<T>,
        U extends Omit<Prisma.analysisUpdateArgs, 'data'> & {
          data: Prisma.analysisUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/analysis/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyAnalysis<
        T extends Prisma.analysisUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.analysisUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/analysis/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertAnalysis<
        T extends Prisma.analysisUpsertArgs,
        R extends Prisma.analysisGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.analysisUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/analysis/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteAnalysis<
        T extends Prisma.analysisDeleteArgs,
        R extends Prisma.analysisGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.analysisDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/analysis/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyAnalysis<
        T extends Prisma.analysisDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.analysisDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/analysis/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyAnalysis<
        T extends Prisma.analysisFindManyArgs,
        R extends GetFindResult<Prisma.$analysisPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.analysisFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/analysis/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countAnalysis<T extends Prisma.analysisCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.analysisCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/analysis/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountAnalysis<
        T extends Prisma.analysisFindManyArgs,
        R extends GetFindResult<Prisma.$analysisPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.analysisFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.analysis.findMany(args, options),
          ctx.analysis.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstAnalysis<
        T extends Prisma.analysisFindFirstArgs,
        R extends GetFindResult<Prisma.$analysisPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.analysisFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/analysis/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.chat = {
      create: async function createChat<
        T extends Prisma.chatCreateArgs,
        R extends CheckSelect<T, chat, Prisma.chatGetPayload<T>>,
        U extends Omit<Prisma.chatCreateArgs, 'data'> & {
          data: Prisma.chatUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/chat/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyChat<T extends Prisma.chatCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.chatCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/chat/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateChat<
        T extends Prisma.chatUpdateArgs,
        R extends Prisma.chatGetPayload<T>,
        U extends Omit<Prisma.chatUpdateArgs, 'data'> & {
          data: Prisma.chatUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/chat/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyChat<T extends Prisma.chatUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.chatUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/chat/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertChat<T extends Prisma.chatUpsertArgs, R extends Prisma.chatGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.chatUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/chat/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteChat<T extends Prisma.chatDeleteArgs, R extends Prisma.chatGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.chatDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/chat/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyChat<T extends Prisma.chatDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.chatDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/chat/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyChat<
        T extends Prisma.chatFindManyArgs,
        R extends GetFindResult<Prisma.$chatPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.chatFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/chat/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countChat<T extends Prisma.chatCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.chatCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/chat/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountChat<
        T extends Prisma.chatFindManyArgs,
        R extends GetFindResult<Prisma.$chatPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.chatFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.chat.findMany(args, options),
          ctx.chat.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstChat<
        T extends Prisma.chatFindFirstArgs,
        R extends GetFindResult<Prisma.$chatPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.chatFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/chat/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.company = {
      create: async function createCompany<
        T extends Prisma.companyCreateArgs,
        R extends CheckSelect<T, company, Prisma.companyGetPayload<T>>,
        U extends Omit<Prisma.companyCreateArgs, 'data'> & {
          data: Omit<Prisma.companyUncheckedCreateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCompany<
        T extends Prisma.companyCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCompany<
        T extends Prisma.companyUpdateArgs,
        R extends Prisma.companyGetPayload<T>,
        U extends Omit<Prisma.companyUpdateArgs, 'data'> & {
          data: Omit<Prisma.companyUncheckedUpdateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCompany<
        T extends Prisma.companyUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/company/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCompany<T extends Prisma.companyUpsertArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/company/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCompany<T extends Prisma.companyDeleteArgs, R extends Prisma.companyGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.companyDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCompany<
        T extends Prisma.companyDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.companyDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCompany<T extends Prisma.companyCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/company/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCompany<
        T extends Prisma.companyFindManyArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.company.findMany(args, options),
          ctx.company.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCompany<
        T extends Prisma.companyFindFirstArgs,
        R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/company/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.pdf_file = {
      create: async function createPdf_file<
        T extends Prisma.pdf_fileCreateArgs,
        R extends CheckSelect<T, pdf_file, Prisma.pdf_fileGetPayload<T>>,
        U extends Omit<Prisma.pdf_fileCreateArgs, 'data'> & {
          data: Omit<Prisma.pdf_fileUncheckedCreateInput, 'analysis' | 'chat'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/pdf_file/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyPdf_file<
        T extends Prisma.pdf_fileCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.pdf_fileCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/pdf_file/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updatePdf_file<
        T extends Prisma.pdf_fileUpdateArgs,
        R extends Prisma.pdf_fileGetPayload<T>,
        U extends Omit<Prisma.pdf_fileUpdateArgs, 'data'> & {
          data: Omit<Prisma.pdf_fileUncheckedUpdateInput, 'analysis' | 'chat'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/pdf_file/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyPdf_file<
        T extends Prisma.pdf_fileUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.pdf_fileUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/pdf_file/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertPdf_file<
        T extends Prisma.pdf_fileUpsertArgs,
        R extends Prisma.pdf_fileGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.pdf_fileUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/pdf_file/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deletePdf_file<
        T extends Prisma.pdf_fileDeleteArgs,
        R extends Prisma.pdf_fileGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.pdf_fileDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/pdf_file/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyPdf_file<
        T extends Prisma.pdf_fileDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.pdf_fileDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/pdf_file/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyPdf_file<
        T extends Prisma.pdf_fileFindManyArgs,
        R extends GetFindResult<Prisma.$pdf_filePayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.pdf_fileFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/pdf_file/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countPdf_file<T extends Prisma.pdf_fileCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.pdf_fileCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/pdf_file/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountPdf_file<
        T extends Prisma.pdf_fileFindManyArgs,
        R extends GetFindResult<Prisma.$pdf_filePayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.pdf_fileFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.pdf_file.findMany(args, options),
          ctx.pdf_file.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstPdf_file<
        T extends Prisma.pdf_fileFindFirstArgs,
        R extends GetFindResult<Prisma.$pdf_filePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.pdf_fileFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/pdf_file/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
        U extends Omit<Prisma.userCreateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedCreateInput, 'chat' | 'pdf_file'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<
        T extends Prisma.userUpdateArgs,
        R extends Prisma.userGetPayload<T>,
        U extends Omit<Prisma.userUpdateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedUpdateInput, 'chat' | 'pdf_file'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
