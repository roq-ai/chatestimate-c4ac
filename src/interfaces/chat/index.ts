import { UserInterface } from 'interfaces/user';
import { PdfFileInterface } from 'interfaces/pdf-file';
import { GetQueryInterface } from 'interfaces';

export interface ChatInterface {
  id?: string;
  user_id: string;
  pdf_file_id: string;
  message: string;
  response?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  pdf_file?: PdfFileInterface;
  _count?: {};
}

export interface ChatGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  pdf_file_id?: string;
  message?: string;
  response?: string;
}
