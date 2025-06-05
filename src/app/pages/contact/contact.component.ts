import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  fb = inject(FormBuilder);
  enviado = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  async onSubmit() {
    if (this.form.invalid) return;

    const formData = new FormData();
    formData.append('name', this.form.value.name ?? '');
    formData.append('email', this.form.value.email ?? '');
    formData.append('message', this.form.value.message ?? '');
    formData.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/ajax/sergiobg.isc@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      this.enviado = true;

      this.form.reset();
    } catch (err) {
      alert('Hubo un error al enviar el mensaje');
    }
  }
}
