import * as yup from 'yup';

export const analysisValidationSchema = yup.object().shape({
  num_words: yup.number().integer().nullable(),
  num_sentences: yup.number().integer().nullable(),
  most_common_word: yup.string().nullable(),
  least_common_word: yup.string().nullable(),
  pdf_file_id: yup.string().nullable().required(),
});
