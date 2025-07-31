import { IRepository } from './IRepository';

export class BaseRepository<T extends { id: number }> implements IRepository<T> {
  protected items: T[];

  constructor(initialData: T[]) {
    this.items = [...initialData];
  }

  async getAll(): Promise<T[]> {
    return this.items;
  }

  async getById(id: number): Promise<T | undefined> {
    return this.items.find(item => item.id === id);
  }

  async create(item: T): Promise<T> {
    this.items.push(item);
    return item;
  }

  async update(id: number, updates: Partial<T>): Promise<T | undefined> {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return undefined;
    this.items[index] = { ...this.items[index], ...updates };
    return this.items[index];
  }

  async delete(id: number): Promise<boolean> {
    const originalLength = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    return this.items.length < originalLength;
  }

  async find(filter: Partial<T>): Promise<T[]> {
    return this.items.filter(item =>
      Object.entries(filter).every(([key, value]) => item[key as keyof T] === value)
    );
  }
}
