/**
 * Base Entity class
 * Entity memiliki identity yang unik
 */
export abstract class Entity<T> {
  protected readonly _id: T;

  constructor(id: T) {
    this._id = id;
  }

  get id(): T {
    return this._id;
  }

  public equals(entity?: Entity<T>): boolean {
    if (!entity) return false;
    return this._id === entity._id;
  }
}
