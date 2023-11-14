import { PdfFileInterface } from 'interfaces/pdf-file';
import { GetQueryInterface } from 'interfaces';

export interface AnalysisInterface {
  id?: string;
  pdf_file_id: string;
  num_words?: number;
  num_sentences?: number;
  most_common_word?: string;
  least_common_word?: string;
  created_at?: any;
  updated_at?: any;

  pdf_file?: PdfFileInterface;
  _count?: {};
}

export interface AnalysisGetQueryInterface extends GetQueryInterface {
  id?: string;
  pdf_file_id?: string;
  most_common_word?: string;
  least_common_word?: string;
}
