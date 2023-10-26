import NodeCache, { Key } from 'node-cache';

class CacheManager {
  private static instance: CacheManager;
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
    this.cache.set('rooms', ['Channel chat']);
  }

  public static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }

    return CacheManager.instance;
  }

  public set(key: Key, value: any, ttl?: number): boolean {
    if (ttl) return this.cache.set(key, value, ttl);

    return this.cache.set(key, value);
  }

  public get(key: Key): any {
    return this.cache.get(key);
  }

  public del(keys: Key | Key[]): number {
    return this.cache.del(keys);
  }

  public mget(keys: Key[]) {
    return this.cache.mget(keys);
  }
}

const cacheManager = new CacheManager();
Object.freeze(cacheManager);

export default cacheManager;