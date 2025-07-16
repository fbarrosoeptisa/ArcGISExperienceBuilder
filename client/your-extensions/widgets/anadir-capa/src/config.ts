import type { ImmutableObject } from 'seamless-immutable';

export interface Config {
  urlService: string;
}

export type IMConfig = ImmutableObject<Config>;
