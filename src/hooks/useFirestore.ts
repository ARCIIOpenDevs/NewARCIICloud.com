import { useState, useEffect } from 'react';
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
  QueryDocumentSnapshot,
  DocumentData,
  onSnapshot,
  Unsubscribe
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { APIResponse, PaginationParams, FilterParams } from '@/types';

export interface UseFirestoreOptions {
  realtime?: boolean;
  initialFetch?: boolean;
}

export interface UseFirestoreResult<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  refresh: () => void;
  pagination: {
    hasMore: boolean;
    loadMore: () => void;
    page: number;
    totalPages: number;
  };
}

export const useFirestore = <T extends DocumentData>(
  collectionName: string,
  options: UseFirestoreOptions = {}
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastDoc, setLastDoc] = useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { realtime = false, initialFetch = true } = options;

  const buildQuery = (
    collectionName: string,
    filters?: FilterParams,
    pagination?: PaginationParams,
    lastDocument?: QueryDocumentSnapshot<DocumentData> | null
  ) => {
    let q = collection(db, collectionName);
    let queryConstraints: any[] = [];

    // Apply filters
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== '' && key !== 'search') {
          queryConstraints.push(where(key, '==', value));
        }
      });
    }

    // Apply sorting
    if (pagination?.sortBy) {
      const sortOrder = pagination.sortOrder || 'desc';
      queryConstraints.push(orderBy(pagination.sortBy, sortOrder));
    } else {
      // Default sort by createdAt
      queryConstraints.push(orderBy('createdAt', 'desc'));
    }

    // Apply pagination
    if (lastDocument) {
      queryConstraints.push(startAfter(lastDocument));
    }

    if (pagination?.limit) {
      queryConstraints.push(limit(pagination.limit));
    } else {
      queryConstraints.push(limit(10)); // Default limit
    }

    return query(q, ...queryConstraints);
  };

  const fetchData = async (
    filters?: FilterParams,
    paginationParams?: PaginationParams,
    append = false
  ) => {
    try {
      setLoading(true);
      setError(null);

      const q = buildQuery(
        collectionName,
        filters,
        paginationParams,
        append ? lastDoc : null
      );

      const snapshot = await getDocs(q);
      const documents = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as unknown as T[];

      if (append) {
        setData(prev => [...prev, ...documents]);
      } else {
        setData(documents);
        setPage(1);
      }

      // Update pagination info
      if (snapshot.docs.length > 0) {
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        setHasMore(snapshot.docs.length === (paginationParams?.limit || 10));
      } else {
        setHasMore(false);
      }

    } catch (err: any) {
      setError(err.message || 'Error fetching data');
      console.error('Firestore fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const refresh = () => {
    setLastDoc(null);
    setHasMore(true);
    fetchData();
  };

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage(prev => prev + 1);
      fetchData({}, {}, true);
    }
  };

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    if (initialFetch) {
      if (realtime) {
        // Set up real-time listener
        const q = buildQuery(collectionName);
        
        unsubscribe = onSnapshot(q, 
          (snapshot) => {
            const documents = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
            })) as unknown as T[];
            
            setData(documents);
            setLoading(false);
            setError(null);
          },
          (err) => {
            setError(err.message);
            setLoading(false);
          }
        );
      } else {
        // One-time fetch
        fetchData();
      }
    } else {
      setLoading(false);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [collectionName, realtime, initialFetch]);

  return {
    data,
    loading,
    error,
    refresh,
    fetchData,
    pagination: {
      hasMore,
      loadMore,
      page,
      totalPages,
    },
  };
};

// Hook for single document
export const useDocument = <T extends DocumentData>(
  collectionName: string,
  docId: string | null,
  options: UseFirestoreOptions = {}
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { realtime = false } = options;

  useEffect(() => {
    if (!docId) {
      setData(null);
      setLoading(false);
      return;
    }

    let unsubscribe: Unsubscribe | null = null;

    const fetchDocument = async () => {
      try {
        setLoading(true);
        setError(null);

        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData({
            id: docSnap.id,
            ...docSnap.data(),
          } as unknown as T);
        } else {
          setData(null);
          setError('Document not found');
        }
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (realtime) {
      // Set up real-time listener
      const docRef = doc(db, collectionName, docId);
      
      unsubscribe = onSnapshot(docRef, 
        (docSnap) => {
          if (docSnap.exists()) {
            setData({
              id: docSnap.id,
              ...docSnap.data(),
            } as unknown as T);
          } else {
            setData(null);
            setError('Document not found');
          }
          setLoading(false);
          setError(null);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        }
      );
    } else {
      fetchDocument();
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [collectionName, docId, realtime]);

  return { data, loading, error };
};

// CRUD operations hook
export const useFirestoreCRUD = <T extends DocumentData>(collectionName: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (data: Omit<T, 'id'>): Promise<APIResponse<string>> => {
    try {
      setLoading(true);
      setError(null);

      const docData = {
        ...data,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      const docRef = await addDoc(collection(db, collectionName), docData);

      return {
        success: true,
        data: docRef.id,
        message: 'Document created successfully',
      };
    } catch (err: any) {
      const errorMessage = err.message || 'Error creating document';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const update = async (id: string, data: Partial<T>): Promise<APIResponse<void>> => {
    try {
      setLoading(true);
      setError(null);

      const docRef = doc(db, collectionName, id);
      const updateData = {
        ...data,
        updatedAt: Timestamp.now(),
      };

      await updateDoc(docRef, updateData);

      return {
        success: true,
        message: 'Document updated successfully',
      };
    } catch (err: any) {
      const errorMessage = err.message || 'Error updating document';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id: string): Promise<APIResponse<void>> => {
    try {
      setLoading(true);
      setError(null);

      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);

      return {
        success: true,
        message: 'Document deleted successfully',
      };
    } catch (err: any) {
      const errorMessage = err.message || 'Error deleting document';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    create,
    update,
    remove,
    loading,
    error,
  };
};