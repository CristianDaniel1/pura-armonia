/**
 * Datos centrales de la banda.
 * Para actualizar contactos, redes o videos, edite solo este archivo.
 */

export type VideoCategory = 'official' | 'live' | 'session';

export interface Video {
  id: string;
  title: string;
  category: VideoCategory;
  year: number;
  /** Clave de traducción para el subtítulo (ver i18n). */
  note?: 'officialClip' | 'pianoVoice' | 'mix' | 'rehearsal' | 'repertoire' | 'cover' | 'live';
  credit?: string;
}

export const BAND = {
  name: 'Agrupación Pura Armonía',
  city: 'São Paulo – SP, Brasil',
  whatsapp: {
    display: '+55 11 96773-7231',
    number: '5511967737231',
  },
  social: {
    youtube: 'https://www.youtube.com/@puraarmonia',
    youtubeSubscribe: 'https://www.youtube.com/@puraarmonia?sub_confirmation=1',
    facebook: 'https://www.facebook.com/agrupacion.pura.armonia',
    facebookPhotos: 'https://www.facebook.com/agrupacion.pura.armonia/photos',
    instagram: 'https://www.instagram.com/agrupacionarmonia',
    instagramHandle: '@agrupacionarmonia',
    tiktok: 'https://www.tiktok.com/@gris_pura_armonia',
    tiktokHandle: '@gris_pura_armonia',
  },
} as const;

/** Video destacado en el reproductor principal. */
export const FEATURED_VIDEO_ID = 'eAGWn0W5_wI';

export const VIDEOS: Video[] = [
  {
    id: 'eAGWn0W5_wI',
    title: 'Par de anillos',
    category: 'official',
    year: 2023,
    note: 'officialClip',
  },
  {
    id: 'tkwDb_sGdLU',
    title: 'Tu falta de querer',
    category: 'official',
    year: 2021,
    note: 'officialClip',
  },
  {
    id: 'HHTcXVfBjAM',
    title: 'Un nuevo amor',
    category: 'official',
    year: 2020,
    note: 'officialClip',
  },
  { id: 'BeCsliTWKYc', title: 'Cuéntale', category: 'session', year: 2022, note: 'pianoVoice' },
  { id: 'sqL22pNspy8', title: 'Mix Frontera', category: 'live', year: 2023, note: 'mix' },
  { id: '7S36289cAfQ', title: 'Mix Selena', category: 'live', year: 2020, note: 'mix' },
  { id: 'wqodkgNq5X0', title: 'Ensayo', category: 'live', year: 2022, note: 'rehearsal' },
  {
    id: 'JENkXM4xdVw',
    title: 'Nuestro repertorio',
    category: 'live',
    year: 2019,
    note: 'repertoire',
  },
  {
    id: 'zpsxZnodLZI',
    title: 'Reina La Fuente junto a K-Ribe con Sabor',
    category: 'live',
    year: 2018,
    note: 'live',
  },
  {
    id: '8OQAI2rS3iM',
    title: 'El hombre que yo amo',
    category: 'session',
    year: 2017,
    note: 'cover',
    credit: 'Myriam Hernández',
  },
  {
    id: 'EBmi4eceQBk',
    title: 'Qué será de ti',
    category: 'session',
    year: 2017,
    note: 'cover',
    credit: 'Roberto Carlos',
  },
  {
    id: '2mEZhV4B_P8',
    title: 'Lo busqué',
    category: 'session',
    year: 2017,
    note: 'cover',
    credit: 'Ana Bárbara',
  },
  {
    id: 'WJHtC_zjHpc',
    title: 'Hacer el amor con otro',
    category: 'session',
    year: 2016,
    note: 'cover',
    credit: 'Alejandra Guzmán',
  },
];

export interface GalleryImage {
  src: string;
  /** Texto alternativo en ES/PT. */
  alt: { es: string; pt: string };
  wide?: boolean;
}

export const GALLERY: GalleryImage[] = [
  {
    src: 'images/gallery/escenario-1.jpg',
    alt: { es: 'Gris cantando en el escenario', pt: 'Gris cantando no palco' },
    wide: true,
  },
  {
    src: 'images/gallery/par-de-anillos.jpg',
    alt: { es: 'Videoclip Par de anillos', pt: 'Videoclipe Par de anillos' },
  },
  { src: 'images/gallery/escenario-2.jpg', alt: { es: 'Batería en vivo', pt: 'Bateria ao vivo' } },
  {
    src: 'images/gallery/ensayo.jpg',
    alt: { es: 'Ensayo de la agrupación', pt: 'Ensaio do grupo' },
    wide: true,
  },
  {
    src: 'images/gallery/un-nuevo-amor.jpg',
    alt: { es: 'Videoclip Un nuevo amor', pt: 'Videoclipe Un nuevo amor' },
  },
  {
    src: 'images/gallery/cuentale.jpg',
    alt: { es: 'Grabación de Cuéntale', pt: 'Gravação de Cuéntale' },
  },
  {
    src: 'images/gallery/mix-frontera.jpg',
    alt: { es: 'Sesión Mix Frontera', pt: 'Sessão Mix Frontera' },
    wide: true,
  },
  {
    src: 'images/gallery/mix-selena.jpg',
    alt: { es: 'Mix Selena desde casa', pt: 'Mix Selena de casa' },
    wide: true,
  },
];

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: 'youtube' | 'facebook' | 'instagram' | 'tiktok';
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'YouTube', url: BAND.social.youtube, handle: '@puraarmonia', icon: 'youtube' },
  {
    name: 'Facebook',
    url: BAND.social.facebook,
    handle: 'agrupacion.pura.armonia',
    icon: 'facebook',
  },
  {
    name: 'Instagram',
    url: BAND.social.instagram,
    handle: BAND.social.instagramHandle,
    icon: 'instagram',
  },
  { name: 'TikTok', url: BAND.social.tiktok, handle: BAND.social.tiktokHandle, icon: 'tiktok' },
];
