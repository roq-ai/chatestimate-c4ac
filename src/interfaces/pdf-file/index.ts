import { AnalysisInterface } from 'interfaces/analysis';
import { ChatInterface } from 'interfaces/chat';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PdfFileInterface {
  id?: string;
  file_name: string;
  file_size: number;
  upload_date?: any;
  user_id: string;
  analyzed?: boolean;
  num_pages?: number;
  file_path: string;
  created_at?: any;
  updated_at?: any;
  analysis?: AnalysisInterface[];
  chat?: ChatInterface[];
  user?: UserInterface;
  _count?: {
    analysis?: number;
    chat?: number;
  };
}

export interface PdfFileGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_name?: string;
  user_id?: string;
  file_path?: string;
}
