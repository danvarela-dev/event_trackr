import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vault } from '@event-trackr/shared';
import { CardModule } from 'primeng/card';
import { EllipsisPipe } from '../../../utils/pipes/ellipsis.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { ChipModule } from 'primeng/chip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'event-trackr-vault-card',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    TooltipModule,
    CardModule,
    EllipsisPipe,
    ChipModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
  ],
  templateUrl: './vault-card.component.html',
  styleUrl: './vault-card.component.scss',
})
export class VaultCardComponent {
  @Input({ required: true }) vault: Vault;
  @Output() requestPassword = new EventEmitter<number>();
  @Output() delete = new EventEmitter<{ id: number; event: Event }>();
  messageService = inject(MessageService);

  copyUsername(): void {
    navigator.clipboard.writeText(this.vault.username);

    this.messageService.add({
      severity: 'info',
      summary: 'Exito',
      detail: 'Usuario copiado al portapapeles',
    });
  }

  copyPassword(): void {
    this.requestPassword.emit(this.vault.id);
  }

  deleteCredentials(event: Event): void {
    const { id } = this.vault;
    if (id) {
      this.delete.emit({ id, event });
    }
  }
}
