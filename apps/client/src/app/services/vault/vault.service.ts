import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, Vault } from '@event-trackr/shared';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VaultService {
  private base_url = environment.api;
  httpClient = inject(HttpClient);

  getAllVault(): Observable<Response<Vault[]>> {
    return this.httpClient.get<Response<Vault[]>>(`${this.base_url}/vault`);
  }

  getAllVaultCategories(): Observable<Response<Vault[]>> {
    return this.httpClient.get<Response<Vault[]>>(
      `${this.base_url}/vault/categories`,
    );
  }

  getVaultById(id: number): Observable<Response<Vault>> {
    return this.httpClient.get<Response<Vault>>(`${this.base_url}/vault/${id}`);
  }

  createVault(vault: Vault): Observable<Response<Vault>> {
    return this.httpClient.post<Response<Vault>>(
      `${this.base_url}/vault`,
      vault,
    );
  }

  updateVault(vault: Vault): Observable<Response<Vault>> {
    return this.httpClient.put<Response<Vault>>(
      `${this.base_url}/vault/${vault.id}`,
      vault,
    );
  }

  deleteVault(id: number): Observable<Response<Vault[]>> {
    return this.httpClient.delete<Response<Vault[]>>(
      `${this.base_url}/vault/${id}`,
    );
  }
}
