import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastService } from '@shared/services/toast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-pass',
  imports: [ReactiveFormsModule],
  templateUrl: './recuperar-pass.html',
  styleUrl: './recuperar-pass.css',
})
export class RecuperarPass {
  private fb = inject(FormBuilder);
  private toastService = inject(ToastService);
  private router = inject(Router);

  protected resetForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
  });

  protected enviarEnlace(): void {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }

    console.log('Solicitando reset para:', this.resetForm.getRawValue().email);
    this.toastService.show('Si el correo existe, recibirás un enlace de recuperación', 'success');
    this.router.navigate(['/login']);
  }
}
