import { StaticImageData } from 'next/image';
import { v4 as uuidv4 } from 'uuid';

import abracoCoracao from './abracoCoracao.jpeg'
import carrinhoAlegria from './carrinhoAlegria.jpeg'
import corteCabelo from './corteCabelo.jpeg'
import doces from './doces.jpeg'
import helpImage from './helpImage.jpeg'
import adBelemLogo from './adBelemLogo.png'
import adBelemShortLogo from './adBelemShortLogo.png'
import eventLocationMap from './eventLocationMap.png'

export interface ImageInterface {
  id: string;
  src: StaticImageData;
  caption?: string;
  imageAlt: string;
}

export class Images {
  static abracoCoracao: ImageInterface = { id: uuidv4(), src: abracoCoracao, caption: "Brincadeiras", imageAlt: "Abraço Coração" }
  static carrinhoAlegria: ImageInterface = { id: uuidv4(), src: carrinhoAlegria, caption: "Carreta da Alegria", imageAlt: "Carreta da Alegria" }
  static corteCabelo: ImageInterface = { id: uuidv4(), src: corteCabelo, caption: "Corte de Cabelo", imageAlt: "Corte de Cabelo" }
  static doces: ImageInterface = { id: uuidv4(), src: doces, caption: "Algodão doce", imageAlt: "Algodão doce" }
  static helpImage: ImageInterface = { id: uuidv4(), src: helpImage, caption: "Ajude com o que pode", imageAlt: "Ajude com o que pode" }
  static adBelemLogo: ImageInterface = { id: uuidv4(), src: adBelemLogo, imageAlt: "Logo Assembléia de Deus ministério Belém" }
  static adBelemShortLogo: ImageInterface = { id: uuidv4(), src: adBelemShortLogo, imageAlt: "Logo Assembléia de Deus ministério Belém" }
  static eventLocationMap: ImageInterface = { id: uuidv4(), src: eventLocationMap, imageAlt: "Mapa de localização do evento" }
}
