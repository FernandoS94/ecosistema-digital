// ── Hook centralizado de Google Analytics ────────
// Uso: const { track } = useAnalytics();
//      track.verMaterial(titulo, url)

export function useAnalytics() {

  function gtag(...args) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag(...args);
    }
  }

  const track = {

    // ── Navegación ───────────────────────────────
    paginaVista: (pagina) => {
      gtag('event', 'page_view', {
        page_title: pagina,
        page_location: window.location.href,
      });
    },

    // ── Recursos didácticos ──────────────────────
    verMaterial: (titulo, url) => {
      gtag('event', 'ver_material', {
        event_category: 'recursos',
        event_label: titulo,
        resource_url: url,
      });
    },

    busquedaRecursos: (termino) => {
      gtag('event', 'search', {
        search_term: termino,
        event_category: 'recursos',
      });
    },

    filtroAplicado: (tipo, valor) => {
      gtag('event', 'filtro_aplicado', {
        event_category: 'recursos',
        filter_type: tipo,
        filter_value: valor,
      });
    },

    paginacionRecursos: (pagina) => {
      gtag('event', 'paginacion', {
        event_category: 'recursos',
        page_number: pagina,
      });
    },

    // ── Buscador global (lupa) ───────────────────
    busquedaGlobal: (termino) => {
      gtag('event', 'search', {
        search_term: termino,
        event_category: 'buscador_global',
      });
    },

    resultadoBuscadorClick: (titulo, tipo) => {
      gtag('event', 'click_resultado_busqueda', {
        event_category: 'buscador_global',
        event_label: titulo,
        result_type: tipo,
      });
    },

    // ── Avatares ─────────────────────────────────
    clickAvatar: (label, categoria) => {
      gtag('event', 'click_avatar', {
        event_category: 'avatares',
        event_label: label,
        avatar_category: categoria,
      });
    },

    // ── Videos ───────────────────────────────────
    verVideo: (titulo, seccion) => {
      gtag('event', 'ver_video', {
        event_category: 'videos',
        event_label: titulo,
        video_section: seccion,
      });
    },

    clickVideoGrid: (titulo, url) => {
      gtag('event', 'click_video_grid', {
        event_category: 'videos',
        event_label: titulo,
        video_url: url,
      });
    },

    // ── Apps / Carrusel ──────────────────────────
    verTutorialApp: (appName) => {
      gtag('event', 'ver_tutorial_app', {
        event_category: 'apps',
        event_label: appName,
      });
    },

    // ── Docente GEM ──────────────────────────────
    clickDocenteGem: () => {
      gtag('event', 'click_docente_gem', {
        event_category: 'gem',
      });
    },

    clickPoliticasUsos: () => {
      gtag('event', 'click_politicas_usos', {
        event_category: 'gem',
      });
    },

    // ── Navegación entre páginas ─────────────────
    clickAcceso: (perfil) => {
      gtag('event', 'click_acceso_perfil', {
        event_category: 'navegacion',
        event_label: perfil,
      });
    },

    // ── FAQ ──────────────────────────────────────
    abrirFaq: (pregunta) => {
      gtag('event', 'abrir_faq', {
        event_category: 'faq',
        event_label: pregunta,
      });
    },

    // ── Biblioteca externa ───────────────────────
    clickBiblioteca: () => {
      gtag('event', 'click_biblioteca_ticmas', {
        event_category: 'recursos_externos',
      });
    },

    // ── Flyer modal ──────────────────────────────
    verFlyer: () => {
      gtag('event', 'ver_flyer_cursos', {
        event_category: 'flyer',
      });
    },

    cerrarFlyer: () => {
      gtag('event', 'cerrar_flyer_cursos', {
        event_category: 'flyer',
      });
    },

    clickInscripcion: () => {
      gtag('event', 'click_inscripcion', {
        event_category: 'flyer',
      });
    },
  };

  return { track };
}