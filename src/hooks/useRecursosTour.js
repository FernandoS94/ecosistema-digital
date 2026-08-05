import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const TOUR_KEY = 'ecosistema_recursos_tour_visto';

export function useRecursosTour() {
  useEffect(() => {
    if (localStorage.getItem(TOUR_KEY)) return;

    const seccion = document.getElementById('recursos');
    if (!seccion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();

            setTimeout(() => {
              const driverObj = driver({
                showProgress: true,
                nextBtnText: 'Siguiente',
                prevBtnText: 'Anterior',
                doneBtnText: 'Entendido',
                progressText: '{{current}} / {{total}}',
                overlayColor: 'rgba(15, 25, 35, 0.8)',
                popoverClass: 'ecosistema-tour-popover',
                onDestroyStarted: () => {
                  localStorage.setItem(TOUR_KEY, 'true');
                  driverObj.destroy();
                },
                steps: [
                  {
                    element: '.recursos-title',
                    popover: {
                      title: 'Material didáctico',
                      description: 'Encontrás recursos organizados por nivel, espacio curricular y modalidad para usar en el aula.',
                      side: 'bottom',
                      align: 'start',
                    },
                  },
                  {
                    element: '.global-search-input',
                    popover: {
                      title: 'Buscador',
                      description: 'Escribí el nombre de un recurso, materia o tema para encontrarlo rápido.',
                      side: 'bottom',
                      align: 'start',
                    },
                  },
                  {
                    element: '.filter-categories',
                    popover: {
                      title: 'Filtros',
                      description: 'Filtrá por nivel, espacio curricular, materia y modalidad para encontrar lo que necesitás.',
                      side: 'bottom',
                      align: 'start',
                    },
                  },
                  {
                    element: '.resource-card',
                    popover: {
                      title: 'Recurso didáctico',
                      description: 'Cada tarjeta muestra el nivel, título, descripción y etiquetas del recurso.',
                      side: 'right',
                      align: 'start',
                    },
                  },
                  {
                    element: '.btn-view-pdf',
                    popover: {
                      title: 'Ver material',
                      description: 'Abrí el recurso en una nueva pestaña para previsualizarlo y vincularlo al aula virtual.',
                      side: 'top',
                      align: 'start',
                    },
                  },
                  {
                    element: '.btn-compartir',
                    popover: {
                      title: 'Compartir',
                      description: 'Copiá el link del recurso para compartirlo o pegarlo en el aula virtual.',
                      side: 'top',
                      align: 'start',
                    },
                  },
                  {
                    element: '.star-rating',
                    popover: {
                      title: 'Calificá el recurso',
                      description: 'Dejá tu valoración con estrellas para ayudarnos a mejorar la oferta de materiales.',
                      side: 'top',
                      align: 'start',
                    },
                  },
                  {
                    element: '.pagination',
                    popover: {
                      title: 'Paginación',
                      description: 'Navegá entre páginas para explorar todos los recursos disponibles.',
                      side: 'top',
                      align: 'center',
                    },
                  },
                ],
              });

              driverObj.drive();
            }, 600);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(seccion);
    return () => observer.disconnect();
  }, []);
}