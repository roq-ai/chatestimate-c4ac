import * as yup from 'yup';

export const chatValidationSchema = yup.object().shape({
  message: yup.string().required(),
  response: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  pdf_file_id: yup.string().nullable().required(),
});
