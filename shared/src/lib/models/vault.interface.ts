import { VaultCategory } from './vault-category.interface';

export interface Vault {
  id?: number;
  name: string;
  username: string;
  email: string;
  password: string;
  description: string;
  uri: string;
  category: VaultCategory;
  created_at: Date;
  updated_at: Date;
}
