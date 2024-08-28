import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaultCardComponent } from './vault-card/vault-card.component';
import { VaultService } from '../../services/vault/vault.service';
import { Button } from 'primeng/button';
import { map, Observable, of } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AddVaultComponent } from './add-vault/add-vault.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Vault } from '@event-trackr/shared';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'event-trackr-vault',
  standalone: true,
  imports: [
    CommonModule,
    VaultCardComponent,
    Button,
    ConfirmDialogModule,
    ProgressSpinnerModule,
  ],
  providers: [VaultService, ConfirmationService, DialogService],
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss'],
})
export class VaultComponent implements OnInit {
  vaultService = inject(VaultService);
  messageService = inject(MessageService);
  dialogService = inject(DialogService);
  confirmationService = inject(ConfirmationService);
  modalRef!: DynamicDialogRef;
  vault$: Observable<Vault[]>;

  ngOnInit() {
    this.getAllVault();
  }

  getVaultById(id: number): void {
    this.vaultService
      .getVaultById(id)
      .pipe(map(vaultResponse => vaultResponse.result))
      .subscribe(vault => {
        this.copyPasswordToClipboard(vault.password ?? '');
        this.messageService.add({
          severity: 'info',
          summary: 'Exito',
          detail: 'Contraseña copiada al portapapeles',
        });
      });
  }

  openAddCredentialDialog(): void {
    this.modalRef = this.dialogService.open(AddVaultComponent, {
      header: 'Agregar credencial',
      modal: true,
    });
    this.modalRef.onClose.subscribe(({ success }) => {
      if (success) {
        this.getAllVault();
      }
    });
  }

  getAllVault(): void {
    this.vault$ = this.vaultService.getAllVault().pipe(
      map(vault => {
        return vault.result;
      }),
    );
  }

  copyPasswordToClipboard(password: string): void {
    navigator.clipboard.writeText(password);
  }

  deleteVault({ id, event }: { id: number; event: Event }): void {
    this.confirmationService.confirm({
      target: event.currentTarget as EventTarget,
      message: '¿Estas seguro de eliminar esta crendencial?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        this.vaultService
          .deleteVault(id)
          .pipe(map(({ result }) => result))
          .subscribe(vault => {
            this.vault$ = of(vault);
            this.messageService.add({
              severity: 'info',
              summary: 'Exito',
              detail: 'Credencial eliminada',
            });
          });
      },
    });
  }
}
