/* tslint:disable */
/* eslint-disable */


export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    news: News;
    aboutUs: AboutUs;
    evacuation: Evacuation;
    financialAid: FinancialAid;
    forChildren: ForChild;
    forPensioners: ForPensioner;
    gifts: Gift;
    health: Health;
    humanitarianAid: HumanitarianAid;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    news: NewsSelect<false> | NewsSelect<true>;
    aboutUs: AboutUsSelect<false> | AboutUsSelect<true>;
    evacuation: EvacuationSelect<false> | EvacuationSelect<true>;
    financialAid: FinancialAidSelect<false> | FinancialAidSelect<true>;
    forChildren: ForChildrenSelect<false> | ForChildrenSelect<true>;
    forPensioners: ForPensionersSelect<false> | ForPensionersSelect<true>;
    gifts: GiftsSelect<false> | GiftsSelect<true>;
    health: HealthSelect<false> | HealthSelect<true>;
    humanitarianAid: HumanitarianAidSelect<false> | HumanitarianAidSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  globalsSelect: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "aboutUs".
 */
export interface AboutUs {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "evacuation".
 */
export interface Evacuation {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "financialAid".
 */
export interface FinancialAid {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forChildren".
 */
export interface ForChild {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forPensioners".
 */
export interface ForPensioner {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "gifts".
 */
export interface Gift {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "health".
 */
export interface Health {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "humanitarianAid".
 */
export interface HumanitarianAid {
  id: number;
  img?: string | null;
  title: string;
  author?: string | null;
  date?: string | null;
  time?: string | null;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'news';
        value: number | News;
      } | null)
    | ({
        relationTo: 'aboutUs';
        value: number | AboutUs;
      } | null)
    | ({
        relationTo: 'evacuation';
        value: number | Evacuation;
      } | null)
    | ({
        relationTo: 'financialAid';
        value: number | FinancialAid;
      } | null)
    | ({
        relationTo: 'forChildren';
        value: number | ForChild;
      } | null)
    | ({
        relationTo: 'forPensioners';
        value: number | ForPensioner;
      } | null)
    | ({
        relationTo: 'gifts';
        value: number | Gift;
      } | null)
    | ({
        relationTo: 'health';
        value: number | Health;
      } | null)
    | ({
        relationTo: 'humanitarianAid';
        value: number | HumanitarianAid;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news_select".
 */
export interface NewsSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "aboutUs_select".
 */
export interface AboutUsSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "evacuation_select".
 */
export interface EvacuationSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "financialAid_select".
 */
export interface FinancialAidSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forChildren_select".
 */
export interface ForChildrenSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forPensioners_select".
 */
export interface ForPensionersSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "gifts_select".
 */
export interface GiftsSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "health_select".
 */
export interface HealthSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "humanitarianAid_select".
 */
export interface HumanitarianAidSelect<T extends boolean = true> {
  img?: T;
  title?: T;
  author?: T;
  date?: T;
  time?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}