import {Injectable,signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ToastService {

  public message =signal<string | null>(null);

  public type =signal<'success' | 'error' | 'warning'>('success');

  public visible =signal(false);

  public show(message: string,type: 'success' | 'error' | 'warning' = 'success'): void {

    this.message.set(message);

    this.type.set(type);

    this.visible.set(true);

    setTimeout(() => {

      this.hide();

    }, 5000);

  }

  public hide(): void {

    this.visible.set(false);

  }

}