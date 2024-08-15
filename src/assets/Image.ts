import { StaticImageData } from 'next/image';
import { randomUUID } from 'crypto';

import abracoCoracao from './abracoCoracao.jpeg'
import carrinhoAlegria from './carrinhoAlegria.jpeg'
import corteCabelo from './corteCabelo.jpeg'
import doces from './doces.jpeg'

export interface ImageInterface {
  id: string;
  src: StaticImageData;
  caption?: string;
  imageAlt: string;
}

export class Images {
  static abracoCoracao: ImageInterface = { id: randomUUID(), src: abracoCoracao, caption: "Brincadeiras", imageAlt: "Abraço Coração" }
  static carrinhoAlegria: ImageInterface = { id: randomUUID(), src: carrinhoAlegria, caption: "Carreta da Alegria", imageAlt: "Carreta da Alegria" }
  static corteCabelo: ImageInterface = { id: randomUUID(), src: corteCabelo, caption: "Corte de Cabelo", imageAlt: "Corte de Cabelo" }
  static doces: ImageInterface = { id: randomUUID(), src: doces, caption: "Algodão doce", imageAlt: "Algodão doce" }
}
