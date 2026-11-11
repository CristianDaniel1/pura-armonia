import type { IconName } from '../../shared/icon/icon';

/** Tarjeta de tipo de evento. */
export interface EventItem {
  icon: IconName;
  title: string;
  text: string;
}

/** Textos en español (idioma principal). */
export const es = {
  skip: 'Saltar al contenido',
  newTab: '(se abre en una pestaña nueva)',
  errors: {
    required: 'Completa este campo.',
    tooLong: 'El texto es demasiado largo.',
  },
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    music: 'Música',
    events: 'Eventos',
    gallery: 'Galería',
    contact: 'Contacto',
    cta: 'Contrátanos',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    lang: 'Idioma',
    main: 'Principal',
    mobile: 'Menú',
  },
  hero: {
    eyebrow: 'Cumbia boliviana · São Paulo, Brasil',
    lead: 'Música en vivo que une a la comunidad boliviana y latinoamericana en cada celebración.',
    watch: 'Ver videoclips',
    hire: 'Contratar para mi evento',
    scroll: 'Desliza',
  },
  about: {
    eyebrow: 'Quiénes somos',
    title: { text: 'Música que nace del', highlight: 'corazón latinoamericano' },
    p1: 'Pura Armonía es una agrupación musical dedicada a llevar música en vivo a todo tipo de eventos sociales. Nacimos para presentar una nueva opción musical a la comunidad boliviana y latinoamericana en São Paulo, Brasil.',
    p2: 'Nuestro repertorio recorre la cumbia boliviana, la cumbia romántica y los grandes clásicos que todos quieren cantar, junto a canciones propias como «Un nuevo amor», «Tu falta de querer» y «Par de anillos».',
    stats: [
      { value: '7', label: 'músicos en escena' },
      { value: '3', label: 'videoclips oficiales' },
      { value: '100%', label: 'música en vivo' },
    ],
    genresTitle: 'Nuestro repertorio',
    genres: [
      'Cumbia boliviana',
      'Cumbia romántica',
      'Cumbia norteña',
      'Tex-mex',
      'Baladas',
      'Canciones propias',
    ],
    photoAlt: 'Integrantes de la Agrupación Pura Armonía',
  },
  music: {
    eyebrow: 'Música',
    title: { text: 'Escucha a', highlight: 'Pura Armonía' },
    lead: 'Videoclips oficiales, mixes en vivo y sesiones especiales. Haz clic y disfrútalos en YouTube.',
    featured: 'Último videoclip oficial',
    play: 'Reproducir',
    filterLabel: 'Filtrar videos',
    filters: { all: 'Todos', official: 'Videoclips', live: 'En vivo y mixes', session: 'Sesiones' },
    notes: {
      officialClip: 'Videoclip oficial',
      pianoVoice: 'Versión piano y voz',
      mix: 'Mix en vivo',
      rehearsal: 'Ensayo',
      repertoire: 'Repertorio en vivo',
      cover: 'Versión de',
      live: 'En vivo',
    },
    watchOn: 'Ver en YouTube',
    showMore: 'Ver más videos',
    showLess: 'Ver menos',
    channel: 'Ver canal completo',
    subscribe: 'Suscríbete',
  },
  events: {
    eyebrow: 'Eventos',
    title: { text: 'Hacemos de tu celebración un', highlight: 'momento inolvidable' },
    lead: 'Llevamos sonido, energía y elegancia a cada escenario. Adaptamos el repertorio a tu público y a cada momento de la fiesta.',
    items: [
      {
        icon: 'rings',
        title: 'Bodas',
        text: 'La música ideal para la entrada, el brindis y un baile que nadie olvidará.',
      },
      {
        icon: 'crown',
        title: 'Quinceañeros',
        text: 'Desde el vals hasta la cumbia: una noche a la altura de su gran día.',
      },
      {
        icon: 'flag',
        title: 'Fiestas y prestes',
        text: 'Fiestas patronales, prestes y celebraciones de nuestra comunidad.',
      },
      {
        icon: 'cake',
        title: 'Cumpleaños y aniversarios',
        text: 'Celebraciones familiares con el sabor y la alegría de la música en vivo.',
      },
      {
        icon: 'building',
        title: 'Eventos corporativos',
        text: 'Confraternizaciones, eventos culturales y presentaciones institucionales.',
      },
      {
        icon: 'mic',
        title: 'Shows y discotecas',
        text: 'Presentaciones en locales, festivales y escenarios de la región.',
      },
    ] as EventItem[],
    stepsTitle: 'Cómo contratarnos',
    steps: [
      { title: 'Escríbenos', text: 'Cuéntanos la fecha, el lugar y el tipo de evento.' },
      { title: 'Armamos tu show', text: 'Definimos juntos el repertorio y la duración.' },
      { title: '¡A bailar!', text: 'Llegamos, montamos y hacemos vibrar tu fiesta.' },
    ],
  },
  gallery: {
    eyebrow: 'Galería',
    title: { text: 'Momentos en', highlight: 'escena' },
    more: 'Más fotos en Facebook',
    open: 'Ampliar foto',
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
  },
  contact: {
    eyebrow: 'Contacto',
    title: { text: 'Hablemos de', highlight: 'tu evento' },
    lead: 'Completa el formulario y te responderemos por WhatsApp con disponibilidad y presupuesto.',
    name: 'Tu nombre',
    type: 'Tipo de evento',
    typePlaceholder: 'Selecciona…',
    types: [
      'Boda',
      'Quinceañero',
      'Fiesta / Preste',
      'Cumpleaños / Aniversario',
      'Evento corporativo',
      'Show / Discoteca',
      'Otro',
    ],
    date: 'Fecha',
    place: 'Ciudad o lugar',
    message: 'Mensaje (opcional)',
    messagePlaceholder: 'Cantidad de invitados, horario, canciones especiales…',
    send: 'Enviar por WhatsApp',
    whatsapp: 'WhatsApp',
    location: 'Ubicación',
    follow: 'Síguenos',
    greeting: '¡Hola, Pura Armonía! Me llamo',
    want: 'Quisiera consultar disponibilidad para un evento:',
    labels: { type: 'Tipo', date: 'Fecha', place: 'Lugar', message: 'Mensaje' },
  },
  footer: {
    tagline: 'Cumbia boliviana con sabor, desde São Paulo para toda Latinoamérica.',
    rights: 'Todos los derechos reservados.',
    top: 'Volver arriba',
    developedBy: 'Desarrollado por',
  },
  floatWhatsapp: 'Escríbenos por WhatsApp',
};

export type Dict = typeof es;
