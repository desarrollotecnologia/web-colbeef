/** Rutas centralizadas de assets — reemplazar aquí al actualizar medios */

import { assetUrl } from '../utils/assetUrl'

const asset = assetUrl

export const brand = {
  logo: asset('/assets/brand/logo-colbeef-transparent.png'),
  logoWhite: asset('/assets/brand/logo-white-transparent.png'),
} as const

export const footerAssets = {
  asesora: asset('/assets/images/footer/footer-asesora.png'),
  logoWhite: asset('/assets/images/footer/logo-white-transparent.png'),
} as const

export const icons = {
  ganado: asset('/assets/icons/ganado.png'),
  beneficio: asset('/assets/icons/beneficio.png'),
  desposte: asset('/assets/icons/desposte.png'),
  porcionado: asset('/assets/icons/porcionado.png'),
  carnes: asset('/assets/icons/carnes.png'),
  badgePlanta: asset('/assets/icons/badge-planta-ecologica.png'),
  badgeLideres: asset('/assets/icons/badge-lideres-carne.png'),
  badgePlantaWhite: asset('/assets/icons/badge-planta-white.png'),
  badgeExpertos: asset('/assets/icons/badge-expertos-calidad.png'),
  instagram: asset('/assets/icons/social/instagram.png'),
  facebook: asset('/assets/icons/social/facebook.png'),
  youtube: asset('/assets/icons/social/youtube.png'),
  search: asset('/assets/icons/social/search.png'),
} as const

export const serviciosImages = {
  pesajeGanado: asset('/assets/images/servicios/pesaje-ganado.jpg'),
  pesajeBascula: asset('/assets/images/servicios/pesaje-bascula.jpg'),
  beneficioHero: asset('/assets/images/servicios/beneficio-hero.jpg'),
  beneficioProceso: asset('/assets/images/servicios/beneficio-proceso.jpg'),
  beneficioConfianza: asset('/assets/images/servicios/beneficio-confianza.jpg'),
  compromisoProceso: asset('/assets/images/servicios/compromiso-proceso.jpg'),
  desposteProceso: asset('/assets/images/servicios/desposte-proceso.jpg'),
  desposteBeneficios: asset('/assets/images/servicios/desposte-beneficios.jpg'),
  desposteTipo1: asset('/assets/images/servicios/desposte-tipo-1.jpg'),
  desposteTipo2: asset('/assets/images/servicios/desposte-tipo-2.jpg'),
  desposteTipo3: asset('/assets/images/servicios/desposte-tipo-3.jpg'),
  desposteTipo4: asset('/assets/images/servicios/desposte-tipo-4.jpg'),
  porcionadoProceso: asset('/assets/images/servicios/porcionado-proceso.jpg'),
} as const

export const images = {
  panoramica: asset('/assets/images/panoramica-planta.png'),
  homeAbout: asset('/assets/images/home-about-banner.png'),
  lineaProcesamiento: asset('/assets/images/linea-procesamiento.png'),
  desposteTrabajador: asset('/assets/images/desposte-trabajador.png'),
  beneficioSierra: asset('/assets/images/beneficio-sierra.png'),
  beneficioLavado: asset('/assets/images/beneficio-lavado.png'),
  comercializacion: asset('/assets/images/comercializacion-empaque.png'),
  canales: asset('/assets/images/canales-colgantes.png'),
  horecaBanner: asset('/assets/images/horeca-chef.jpg'),
  img5280: asset('/images/IMG_5280.JPG'),
  img5282: asset('/images/IMG_5282.JPG'),
  img5288: asset('/images/IMG_5288.JPG'),
  img5289: asset('/images/IMG_5289.JPG'),
  corte1: asset('/images/cortes/corte-1.jpg'),
  corte2: asset('/images/cortes/corte-2.jpg'),
  corte3: asset('/images/cortes/corte-3.jpg'),
  corte4: asset('/images/cortes/corte-4.jpg'),
  corte5: asset('/images/cortes/corte-5.jpg'),
  cortesMapaBase: asset('/assets/images/cortes/cortes-mapa-base.jpg'),
  cortesMapaOverlay: asset('/assets/images/cortes/cortes-mapa-overlay.jpg'),
  corteFichaEjemplo: asset('/assets/images/cortes/fichas/corte-ejemplo.png'),
} as const

export const carouselCuts = [
  { src: images.corte1, alt: 'Corte premium Colbeef 1' },
  { src: images.corte2, alt: 'Corte premium Colbeef 2' },
  { src: images.corte3, alt: 'Corte premium Colbeef 3' },
  { src: images.corte4, alt: 'Corte premium Colbeef 4' },
  { src: images.corte5, alt: 'Corte premium Colbeef 5' },
] as const

export const corporativo = {
  nosotros: {
    banner: asset('/assets/corporativo/nosotros/banner-nosotros.png'),
    bannerFinal: asset('/assets/corporativo/nosotros/banner-final.png'),
    foto1: asset('/assets/corporativo/nosotros/foto-1.png'),
    tituloHistoria: asset('/assets/corporativo/nosotros/titulo-historia.png'),
    historiaTimeline: asset('/assets/corporativo/nosotros/historia-timeline.png'),
    redesSociales: asset('/assets/corporativo/nosotros/redes-sociales.png'),
  },
  filosofia: {
    banner: asset('/assets/corporativo/filosofia/banner-filosofia.png'),
    bannerFamilia: asset('/assets/corporativo/filosofia/banner-familia.png'),
    familiaColbeef: asset('/assets/corporativo/filosofia/familia-colbeef.png'),
    fondoValores: asset('/assets/corporativo/filosofia/fondo-valores.png'),
    valoresIconos: asset('/assets/corporativo/filosofia/valores-iconos.png'),
    botonMision: asset('/assets/corporativo/filosofia/boton-mision.png'),
    botonVision: asset('/assets/corporativo/filosofia/boton-vision.png'),
  },
  sostenibilidad: {
    banner: asset('/assets/corporativo/sostenibilidad/banner-sostenibilidad.png'),
    bannerConstruyendo: asset('/assets/corporativo/sostenibilidad/banner-construyendo.png'),
    foto2: asset('/assets/corporativo/sostenibilidad/foto-2.png'),
    iconoRes: asset('/assets/corporativo/sostenibilidad/icono-res.png'),
    energiaRenovable: asset('/assets/corporativo/sostenibilidad/energia-renovable.png'),
    gestionAgua: asset('/assets/corporativo/sostenibilidad/gestion-agua.png'),
    produccionResponsable: asset('/assets/corporativo/sostenibilidad/produccion-responsable.png'),
    compromisoComunidad: asset('/assets/corporativo/sostenibilidad/compromiso-comunidad.png'),
  },
  certificaciones: {
    banner: asset('/assets/corporativo/certificaciones/banner-certificados.png'),
    bannerPoliticaAmbiental: asset('/assets/corporativo/certificaciones/banner-politica-ambiental.png'),
    todosCertificados: asset('/assets/corporativo/certificaciones/todos-certificados.png'),
    invima: asset('/assets/corporativo/certificaciones/invima-sello.png'),
    tituloHabilitaciones: asset('/assets/corporativo/certificaciones/titulo-habilitaciones.png'),
    tituloPoliticasCalidad: asset('/assets/corporativo/certificaciones/titulo-politicas-calidad.png'),
    tituloInspeccionInvima: asset('/assets/corporativo/certificaciones/titulo-inspeccion-invima.png'),
  },
  gobierno: {
    banner: asset('/assets/corporativo/gobierno/banner-gobierno.png'),
    bannerDenuncias: asset('/assets/corporativo/gobierno/banner-denuncias.png'),
    bannerCanales: asset('/assets/corporativo/gobierno/banner-canales.png'),
    formulario: asset('/assets/corporativo/gobierno/formulario-denuncia.png'),
    foto3: asset('/assets/corporativo/gobierno/foto-3.png'),
    botonCorreo: asset('/assets/corporativo/gobierno/boton-correo.png'),
    botonSuper: asset('/assets/corporativo/gobierno/boton-super.png'),
    botonAnticorrupcion: asset('/assets/corporativo/gobierno/boton-anticorrupcion.png'),
    tituloGobiernoEtica: asset('/assets/corporativo/gobierno/titulo-gobierno-etica.png'),
    tituloQueEsEtica: asset('/assets/corporativo/gobierno/titulo-que-es-etica.png'),
    tituloQueReportar: asset('/assets/corporativo/gobierno/titulo-que-reportar.png'),
    tituloQuienesPueden: asset('/assets/corporativo/gobierno/titulo-quienes-pueden.png'),
    tituloPoliticasCalidad: asset('/assets/corporativo/gobierno/titulo-politicas-calidad.png'),
  },
} as const
