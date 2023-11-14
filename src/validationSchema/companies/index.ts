import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  is_active: yup.boolean().nullable(),
  location: yup.string().nullable(),
  industry: yup.string().nullable(),
  name: yup.string().required(),
});
