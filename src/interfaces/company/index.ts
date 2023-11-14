import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  is_active?: boolean;
  location?: string;
  industry?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user?: UserInterface[];

  _count?: {
    user?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  name?: string;
}
