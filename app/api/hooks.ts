import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react';
import { ApiError } from './types';
import { snapshot, subscribe, session, type DemoState } from './demo';

export function useDemoState(): DemoState {
  return useSyncExternalStore(subscribe, snapshot, snapshot);
}

export function useDemo<T>(select: (s: DemoState) => T): T {
  const state = useDemoState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => select(state), [state]);
}

export function useSession() {
  return useDemo(s => session(s));
}

export interface AsyncState<T> { data?: T; error?: ApiError; loading: boolean; reload: () => void }

/** Runs an API call, re-running when deps or the demo data change. */
export function useAsync<T>(fn: () => Promise<T>, deps: unknown[]): AsyncState<T> {
  const state = useDemoState();
  const [res, setRes] = useState<{ data?: T; error?: ApiError; loading: boolean }>({ loading: true });
  const [tick, setTick] = useState(0);
  const first = useRef(true);
  useEffect(() => {
    let live = true;
    // Background refreshes keep showing the previous data instead of a skeleton.
    setRes(r => ({ ...r, loading: first.current || r.data === undefined }));
    fn().then(data => { if (live) { first.current = false; setRes({ data, loading: false }); } },
      error => { if (live) setRes({ error: error instanceof ApiError ? error : new ApiError('UNKNOWN', '알 수 없는 문제가 생겼어요.'), loading: false }); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, state, tick]);
  const reload = useCallback(() => setTick(t => t + 1), []);
  return { ...res, reload };
}

/** Wraps a mutation with pending + error state. */
export function useAction<A extends unknown[], R>(fn: (...args: A) => Promise<R>) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const run = useCallback(async (...args: A): Promise<R | undefined> => {
    setPending(true);
    setError(null);
    try {
      return await fn(...args);
    } catch (e) {
      setError(e instanceof ApiError ? e : new ApiError('UNKNOWN', '알 수 없는 문제가 생겼어요.'));
      return undefined;
    } finally {
      setPending(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { run, pending, error, setError };
}
