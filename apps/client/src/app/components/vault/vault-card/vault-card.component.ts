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
import { AvatarModule } from 'primeng/avatar';
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
    AvatarModule,
  ],
  templateUrl: './vault-card.component.html',
  styleUrl: './vault-card.component.scss',
})
export class VaultCardComponent {
  @Input({ required: true }) vault: Vault;
  @Output() requestPassword = new EventEmitter<number>();
  @Output() delete = new EventEmitter<{ id: number; event: Event }>();
  messageService = inject(MessageService);
  logoColors: Record<string, string> = {
    APPLE: 'linear-gradient(135deg, #000000, #555555)',
    TIKTOK: 'linear-gradient(135deg, #ff0050, #00f2ea, #000000)',
    FACEBOOK: 'linear-gradient(135deg, #1877f2, #898F9C)',
    YOUTUBE: 'linear-gradient(135deg, #FF0000, #282828)',
    INSTAGRAM:
      'linear-gradient(135deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #777737, #FCAF45, #FFDC80)',
    EMAIL: 'linear-gradient(135deg, #405DE6, #5B51D8)',
    WORDPRESS: 'linear-gradient(135deg, #21759b, #000000)',
    TUMBLR: 'linear-gradient(135deg, #34526f, #000000)',
    MEGA: 'linear-gradient(135deg, #FF0000, #000000)',
    DROPBOX: 'linear-gradient(135deg, #3d9ae8, #000000)',
    TWITTER: 'linear-gradient(135deg, #000000, #555555)',
  };
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

  getGradientColor(category: string): string {
    return (
      this.logoColors[category] || 'linear-gradient(135deg, #ffffff, #000000)'
    );
  }
}
