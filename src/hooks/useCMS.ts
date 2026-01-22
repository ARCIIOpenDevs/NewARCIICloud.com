'use client';

import { useState, useCallback } from 'react';
import { 
  collection, 
  doc, 
  getDocs, 
  getDoc,
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  startAfter,
  Timestamp,
  writeBatch
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { 
  PageContent, 
  PageContentFormData,
  BlogPost, 
  BlogFormData,
  BlogCategoria,
  Testimonio,
  FAQ,
  Tutorial,
  CasoEstudio,
  MediaFile,
  SiteConfig,
  CMSFilter,
  CMSSearchResult,
  CMSStats,
  CMSActivity
} from '@/types/cms';

export const useCMS = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ===============================
  // CONTENIDO DE PÁGINAS
  // ===============================
  
  const [pages, setPages] = useState<PageContent[]>([]);

  const fetchPages = useCallback(async (filters?: CMSFilter) => {
    try {
      setLoading(true);
      setError(null);
      
      let q = query(collection(db, 'cms_pages'));
      
      if (filters?.estado) {
        q = query(q, where('estado', '==', filters.estado));
      }
      
      if (filters?.fechaDesde) {
        q = query(q, where('fechaCreacion', '>=', Timestamp.fromDate(filters.fechaDesde)));
      }
      
      q = query(q, orderBy('fechaActualizacion', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const pagesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as PageContent[];
      
      setPages(pagesData);
      return pagesData;
    } catch (err) {
      console.error('Error fetching pages:', err);
      setError('Error al cargar las páginas');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createPage = useCallback(async (pageData: PageContentFormData): Promise<string> => {
    try {
      setLoading(true);
      setError(null);
      
      const now = Timestamp.now();
      const newPage = {
        ...pageData,
        fechaCreacion: now,
        fechaActualizacion: now,
        vistas: 0
      };
      
      const docRef = await addDoc(collection(db, 'cms_pages'), newPage);
      
      // Registrar actividad
      await logActivity('crear', 'pagina', docRef.id, pageData.titulo, 'admin', 'Administrador');
      
      await fetchPages();
      return docRef.id;
    } catch (err) {
      console.error('Error creating page:', err);
      setError('Error al crear la página');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchPages]);

  const updatePage = useCallback(async (pageId: string, pageData: Partial<PageContentFormData>): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const pageRef = doc(db, 'cms_pages', pageId);
      await updateDoc(pageRef, {
        ...pageData,
        fechaActualizacion: Timestamp.now()
      });
      
      await logActivity('editar', 'pagina', pageId, pageData.titulo || '', 'admin', 'Administrador');
      await fetchPages();
    } catch (err) {
      console.error('Error updating page:', err);
      setError('Error al actualizar la página');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchPages]);

  const deletePage = useCallback(async (pageId: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const pageRef = doc(db, 'cms_pages', pageId);
      await deleteDoc(pageRef);
      
      await logActivity('eliminar', 'pagina', pageId, '', 'admin', 'Administrador');
      await fetchPages();
    } catch (err) {
      console.error('Error deleting page:', err);
      setError('Error al eliminar la página');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchPages]);

  const getPageBySlug = useCallback(async (slug: string): Promise<PageContent | null> => {
    try {
      const q = query(
        collection(db, 'cms_pages'),
        where('slug', '==', slug),
        where('estado', '==', 'publicado'),
        limit(1)
      );
      
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) return null;
      
      const doc = querySnapshot.docs[0];
      const pageData = { id: doc.id, ...doc.data() } as PageContent;
      
      // Incrementar vistas
      await updateDoc(doc.ref, {
        vistas: (pageData.vistas || 0) + 1,
        ultimaVista: Timestamp.now()
      });
      
      return pageData;
    } catch (err) {
      console.error('Error fetching page by slug:', err);
      return null;
    }
  }, []);

  // ===============================
  // BLOG Y ARTÍCULOS
  // ===============================
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogCategories, setBlogCategories] = useState<BlogCategoria[]>([]);

  const fetchBlogPosts = useCallback(async (filters?: CMSFilter) => {
    try {
      setLoading(true);
      setError(null);
      
      let q = query(collection(db, 'cms_blog'));
      
      if (filters?.estado) {
        q = query(q, where('estado', '==', filters.estado));
      }
      
      if (filters?.categoria) {
        q = query(q, where('categoria.slug', '==', filters.categoria));
      }
      
      q = query(q, orderBy('fechaPublicacion', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogPost[];
      
      setBlogPosts(postsData);
      return postsData;
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Error al cargar los artículos');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createBlogPost = useCallback(async (postData: BlogFormData): Promise<string> => {
    try {
      setLoading(true);
      setError(null);
      
      const now = Timestamp.now();
      const newPost = {
        ...postData,
        fechaCreacion: now,
        fechaActualizacion: now,
        vistas: 0,
        likes: 0,
        shares: 0,
        comentarios: 0
      };
      
      const docRef = await addDoc(collection(db, 'cms_blog'), newPost);
      
      await logActivity('crear', 'blog', docRef.id, postData.titulo, 'admin', 'Administrador');
      await fetchBlogPosts();
      return docRef.id;
    } catch (err) {
      console.error('Error creating blog post:', err);
      setError('Error al crear el artículo');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchBlogPosts]);

  const fetchBlogCategories = useCallback(async () => {
    try {
      const q = query(
        collection(db, 'cms_blog_categories'),
        where('activa', '==', true),
        orderBy('orden', 'asc')
      );
      
      const querySnapshot = await getDocs(q);
      const categoriesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as BlogCategoria[];
      
      setBlogCategories(categoriesData);
      return categoriesData;
    } catch (err) {
      console.error('Error fetching blog categories:', err);
      throw err;
    }
  }, []);

  // ===============================
  // TESTIMONIOS
  // ===============================
  
  const [testimonios, setTestimonios] = useState<Testimonio[]>([]);

  const fetchTestimonios = useCallback(async (filters?: CMSFilter) => {
    try {
      setLoading(true);
      setError(null);
      
      let q = query(collection(db, 'cms_testimonios'));
      
      if (filters?.estado) {
        q = query(q, where('estado', '==', filters.estado));
      }
      
      if (filters?.destacados) {
        q = query(q, where('destacado', '==', true));
      }
      
      q = query(q, orderBy('fechaCreacion', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const testimoniosData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Testimonio[];
      
      setTestimonios(testimoniosData);
      return testimoniosData;
    } catch (err) {
      console.error('Error fetching testimonios:', err);
      setError('Error al cargar los testimonios');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createTestimonio = useCallback(async (testimonioData: Omit<Testimonio, 'id' | 'fechaCreacion' | 'fechaActualizacion'>): Promise<string> => {
    try {
      setLoading(true);
      setError(null);
      
      const now = Timestamp.now();
      const newTestimonio = {
        ...testimonioData,
        fechaCreacion: now,
        fechaActualizacion: now
      };
      
      const docRef = await addDoc(collection(db, 'cms_testimonios'), newTestimonio);
      
      await logActivity('crear', 'testimonio', docRef.id, testimonioData.clienteNombre, 'admin', 'Administrador');
      await fetchTestimonios();
      return docRef.id;
    } catch (err) {
      console.error('Error creating testimonio:', err);
      setError('Error al crear el testimonio');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchTestimonios]);

  // ===============================
  // FAQ
  // ===============================
  
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const fetchFAQs = useCallback(async (filters?: CMSFilter) => {
    try {
      setLoading(true);
      setError(null);
      
      let q = query(collection(db, 'cms_faq'));
      
      if (filters?.categoria) {
        q = query(q, where('categoria', '==', filters.categoria));
      }
      
      if (filters?.activos !== undefined) {
        q = query(q, where('activa', '==', filters.activos));
      }
      
      q = query(q, orderBy('orden', 'asc'));
      
      const querySnapshot = await getDocs(q);
      const faqsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as FAQ[];
      
      setFaqs(faqsData);
      return faqsData;
    } catch (err) {
      console.error('Error fetching FAQs:', err);
      setError('Error al cargar las FAQs');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ===============================
  // TUTORIALES
  // ===============================
  
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  const fetchTutorials = useCallback(async (filters?: CMSFilter) => {
    try {
      setLoading(true);
      setError(null);
      
      let q = query(collection(db, 'cms_tutorials'));
      
      if (filters?.estado) {
        q = query(q, where('estado', '==', filters.estado));
      }
      
      if (filters?.categoria) {
        q = query(q, where('categoria', '==', filters.categoria));
      }
      
      q = query(q, orderBy('fechaCreacion', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const tutorialsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Tutorial[];
      
      setTutorials(tutorialsData);
      return tutorialsData;
    } catch (err) {
      console.error('Error fetching tutorials:', err);
      setError('Error al cargar los tutoriales');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ===============================
  // MEDIOS
  // ===============================
  
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const fetchMediaFiles = useCallback(async (categoria?: string) => {
    try {
      setLoading(true);
      setError(null);
      
      let q = query(collection(db, 'cms_media'));
      
      if (categoria) {
        q = query(q, where('categoria', '==', categoria));
      }
      
      q = query(q, where('activo', '==', true), orderBy('fechaSubida', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const mediaData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MediaFile[];
      
      setMediaFiles(mediaData);
      return mediaData;
    } catch (err) {
      console.error('Error fetching media files:', err);
      setError('Error al cargar los archivos');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ===============================
  // CONFIGURACIÓN DEL SITIO
  // ===============================
  
  const [siteConfig, setSiteConfig] = useState<Record<string, any>>({});

  const fetchSiteConfig = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'cms_config'));
      const configData: Record<string, any> = {};
      
      querySnapshot.docs.forEach(doc => {
        const data = doc.data() as SiteConfig;
        configData[data.seccion] = data.configuraciones;
      });
      
      setSiteConfig(configData);
      return configData;
    } catch (err) {
      console.error('Error fetching site config:', err);
      throw err;
    }
  }, []);

  const updateSiteConfig = useCallback(async (seccion: string, configuraciones: Record<string, any>): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      
      const configRef = doc(db, 'cms_config', seccion);
      await updateDoc(configRef, {
        seccion,
        configuraciones,
        fechaActualizacion: Timestamp.now(),
        actualizadoPorId: 'admin',
        actualizadoPorNombre: 'Administrador'
      });
      
      await logActivity('editar', 'configuracion', seccion, `Configuración ${seccion}`, 'admin', 'Administrador');
      await fetchSiteConfig();
    } catch (err) {
      console.error('Error updating site config:', err);
      setError('Error al actualizar la configuración');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [fetchSiteConfig]);

  // ===============================
  // BÚSQUEDA Y ESTADÍSTICAS
  // ===============================
  
  const searchContent = useCallback(async (query: string, filters?: CMSFilter): Promise<CMSSearchResult[]> => {
    try {
      const results: CMSSearchResult[] = [];
      
      // Buscar en páginas
      if (!filters?.tipo || filters.tipo === 'pagina') {
        const pagesQuery = await getDocs(collection(db, 'cms_pages'));
        pagesQuery.docs.forEach(doc => {
          const data = doc.data() as PageContent;
          if (data.titulo.toLowerCase().includes(query.toLowerCase()) ||
              data.contenido.toLowerCase().includes(query.toLowerCase())) {
            results.push({
              id: doc.id,
              tipo: 'pagina',
              titulo: data.titulo,
              descripcion: data.descripcion,
              fechaActualizacion: data.fechaActualizacion,
              relevancia: calculateRelevance(query, data.titulo, data.contenido)
            });
          }
        });
      }
      
      // Buscar en blog
      if (!filters?.tipo || filters.tipo === 'blog') {
        const blogQuery = await getDocs(collection(db, 'cms_blog'));
        blogQuery.docs.forEach(doc => {
          const data = doc.data() as BlogPost;
          if (data.titulo.toLowerCase().includes(query.toLowerCase()) ||
              data.contenido.toLowerCase().includes(query.toLowerCase())) {
            results.push({
              id: doc.id,
              tipo: 'blog',
              titulo: data.titulo,
              descripcion: data.extracto,
              imagen: data.imagenDestacada,
              fechaActualizacion: data.fechaActualizacion,
              relevancia: calculateRelevance(query, data.titulo, data.contenido)
            });
          }
        });
      }
      
      // Ordenar por relevancia
      return results.sort((a, b) => b.relevancia - a.relevancia);
    } catch (err) {
      console.error('Error searching content:', err);
      return [];
    }
  }, []);

  const getCMSStats = useCallback(async (): Promise<CMSStats> => {
    try {
      const [pagesSnap, blogSnap, testimoniosSnap, faqSnap, tutorialsSnap, mediaSnap] = await Promise.all([
        getDocs(collection(db, 'cms_pages')),
        getDocs(collection(db, 'cms_blog')),
        getDocs(collection(db, 'cms_testimonios')),
        getDocs(collection(db, 'cms_faq')),
        getDocs(collection(db, 'cms_tutorials')),
        getDocs(collection(db, 'cms_media'))
      ]);

      const mediaFiles = mediaSnap.docs.map(doc => doc.data() as MediaFile);
      const espacioUsado = mediaFiles.reduce((total, file) => total + file.tamaño, 0);

      return {
        contenido: {
          paginas: pagesSnap.size,
          blog: blogSnap.size,
          testimonios: testimoniosSnap.size,
          faq: faqSnap.size,
          tutoriales: tutorialsSnap.size,
          casosEstudio: 0 // Por implementar
        },
        medios: {
          total: mediaSnap.size,
          imagenes: mediaFiles.filter(f => f.tipo === 'imagen').length,
          videos: mediaFiles.filter(f => f.tipo === 'video').length,
          documentos: mediaFiles.filter(f => f.tipo === 'documento').length,
          espacioUsado
        },
        actividad: {
          publicacionesEsteMes: 0, // Calcular según fechas
          vistasEstaSeamana: 0, // Calcular según analytics
          ultimaActualizacion: Timestamp.now()
        }
      };
    } catch (err) {
      console.error('Error getting CMS stats:', err);
      throw err;
    }
  }, []);

  // ===============================
  // ACTIVIDAD Y LOGS
  // ===============================
  
  const logActivity = useCallback(async (
    tipo: 'crear' | 'editar' | 'publicar' | 'eliminar' | 'archivar',
    entidad: 'pagina' | 'blog' | 'testimonio' | 'faq' | 'tutorial' | 'media' | 'configuracion',
    entidadId: string,
    entidadTitulo: string,
    usuarioId: string,
    usuarioNombre: string
  ): Promise<void> => {
    try {
      const activity: Omit<CMSActivity, 'id'> = {
        tipo,
        entidad,
        entidadId,
        entidadTitulo,
        descripcion: `${tipo} ${entidad}: ${entidadTitulo}`,
        usuarioId,
        usuarioNombre,
        fecha: Timestamp.now()
      };
      
      await addDoc(collection(db, 'cms_activity'), activity);
    } catch (err) {
      console.error('Error logging activity:', err);
    }
  }, []);

  // ===============================
  // UTILIDADES
  // ===============================
  
  const calculateRelevance = (query: string, title: string, content: string): number => {
    const queryLower = query.toLowerCase();
    const titleLower = title.toLowerCase();
    const contentLower = content.toLowerCase();
    
    let score = 0;
    
    // Coincidencia exacta en título
    if (titleLower.includes(queryLower)) {
      score += 10;
    }
    
    // Coincidencia en contenido
    const contentMatches = (contentLower.match(new RegExp(queryLower, 'g')) || []).length;
    score += contentMatches * 2;
    
    // Coincidencia de palabras individuales
    const queryWords = queryLower.split(' ');
    queryWords.forEach(word => {
      if (titleLower.includes(word)) score += 5;
      if (contentLower.includes(word)) score += 1;
    });
    
    return score;
  };

  return {
    // Estado
    loading,
    error,
    
    // Páginas
    pages,
    fetchPages,
    createPage,
    updatePage,
    deletePage,
    getPageBySlug,
    
    // Blog
    blogPosts,
    blogCategories,
    fetchBlogPosts,
    createBlogPost,
    fetchBlogCategories,
    
    // Testimonios
    testimonios,
    fetchTestimonios,
    createTestimonio,
    
    // FAQ
    faqs,
    fetchFAQs,
    
    // Tutoriales
    tutorials,
    fetchTutorials,
    
    // Medios
    mediaFiles,
    fetchMediaFiles,
    
    // Configuración
    siteConfig,
    fetchSiteConfig,
    updateSiteConfig,
    
    // Búsqueda y estadísticas
    searchContent,
    getCMSStats,
    
    // Utilidades
    logActivity
  };
};