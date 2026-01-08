import { Entity } from "./Entity";

/**
 * Domain Event Interface
 */
export interface DomainEvent {
  eventName: string;
  occurredOn: Date;
}

/**
 * Aggregate Root - Entity utama dalam aggregate
 */
export abstract class AggregateRoot<T> extends Entity<T> {
  private _domainEvents: DomainEvent[] = [];

  get domainEvents(): DomainEvent[] {
    return this._domainEvents;
  }

  protected addDomainEvent(event: DomainEvent): void {
    this._domainEvents.push(event);
  }

  public clearEvents(): void {
    this._domainEvents = [];
  }
}
