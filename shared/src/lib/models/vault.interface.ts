import { VaultCategory } from './vault-category.interface';

export interface Vault {
  id?: number;
  name: string;
  username: string;
  email: string;
  password?: string;
  description: string;
  uri: string;
  vaultCategory: VaultCategory;
  created_at: Date;
  updated_at: Date;
}
