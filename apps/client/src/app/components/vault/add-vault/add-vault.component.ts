import { Component, inject, OnInit } from '@angular/core';
import { VaultService } from '../../../services/vault/vault.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AsyncPipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { map } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
@Component({
  selector: 'event-trackr-add-vault',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    AsyncPipe,
    DropdownModule,
    ButtonModule,
    ProgressSpinnerModule,
    InputTextareaModule,
  ],
  templateUrl: './add-vault.component.html',
  styleUrl: './add-vault.component.scss',
})
export class AddVaultComponent implements OnInit {
  private readonly vaultService = inject(VaultService);
  private readonly messageService = inject(MessageService);
  private readonly ref = inject(DynamicDialogRef);

  formBuilder = inject(FormBuilder);
  addFormGroup: FormGroup;
  categories$ = this.vaultService
    .getAllVaultCategories()
    .pipe(map(({ result }) => result));

  ngOnInit(): void {
    this.addFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      username: [''],
      email: [''],
      password: ['', Validators.required],
      uri: [''],
      description: [''],
      vaultCategory: [null],
    });
  }

  addVault(): void {
    if (this.addFormGroup.invalid) {
      return;
    }

    this.vaultService.createVault(this.addFormGroup.value).subscribe(() => {
      this.addFormGroup.reset();
      this.messageService.add({
        severity: 'info',
        summary: 'Exito',
        detail: 'Credencial agregada',
      });
      this.ref.close({ success: true });
    });
  }

  closeAddVaultDialog(): void {
    this.addFormGroup.reset();
    this.ref.close({ success: false });
  }
}
