export type SessionStorage = Readonly<{
  getItem(item: string): string;
  setItem(key: string, item: string): void;
  removeItem(key: string): void;
  has(key: string): boolean;
}>;
