import * as yup from 'yup';

export const pdfFileValidationSchema = yup.object().shape({
  file_name: yup.string().required(),
  file_size: yup.number().integer().required(),
  upload_date: yup.date().required(),
  analyzed: yup.boolean().required(),
  num_pages: yup.number().integer().nullable(),
  file_path: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
