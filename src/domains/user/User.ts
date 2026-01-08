import { DomainEvent } from "../shared";

export class User implements DomainEvent {
  eventName = "User";
  occurredOn = new Date();

  constructor(public readonly id: string, public readonly username: string) {}
}

export interface UserProps {
  id?: string;
  username: string;
}

// tinggal diterusin
