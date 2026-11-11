/** Utilidades para armar URLs de YouTube a partir del ID del video. */

export const youtubeWatchUrl = (id: string): string => `https://www.youtube.com/watch?v=${id}`;

export const youtubeThumbnail = (
  id: string,
  quality: 'hqdefault' | 'maxresdefault' = 'hqdefault',
): string => `https://i.ytimg.com/vi/${id}/${quality}.jpg`;

/** Embed sin cookies hasta que el usuario da play. */
export const youtubeEmbedUrl = (id: string): string =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
