import type { ImmutableObject } from 'seamless-immutable'

export interface Config {
  nombre: string
  direccion: string
  telefono: string
  web: string
  imagen: string
}

export type IMConfig = ImmutableObject<Config>
