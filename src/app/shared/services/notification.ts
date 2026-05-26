import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public message = signal<string | null>(null)

  show(message: string): void{
    this.message.set(message)
  }

}
