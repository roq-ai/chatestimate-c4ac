import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, usePdfFileFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { pdfFileValidationSchema } from 'validationSchema/pdf-files';
import { PdfFileInterface } from 'interfaces/pdf-file';
import { UserInterface } from 'interfaces/user';

function PdfFileEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'pdf_file',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = usePdfFileFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: PdfFileInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.pdf_file.update({
        data: values as RoqTypes.pdf_file,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/pdf-files');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<PdfFileInterface>({
    initialValues: data,
    validationSchema: pdfFileValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Pdf Files',
              link: '/pdf-files',
            },
            {
              label: 'Update Pdf File',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Pdf File
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.file_name}
            label={'File Name'}
            props={{
              name: 'file_name',
              placeholder: 'File Name',
              value: formik.values?.file_name,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="File Size"
            formControlProps={{
              id: 'file_size',
              isInvalid: !!formik.errors?.file_size,
            }}
            name="file_size"
            error={formik.errors?.file_size}
            value={formik.values?.file_size}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('file_size', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <FormControl id="upload_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Upload Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.upload_date ? new Date(formik.values?.upload_date) : null}
              onChange={(value: Date) => formik.setFieldValue('upload_date', value)}
            />
          </FormControl>

          <FormControl id="analyzed" display="flex" alignItems="center" mb="4" isInvalid={!!formik.errors?.analyzed}>
            <FormLabel htmlFor="switch-analyzed">Analyzed</FormLabel>
            <Switch
              id="switch-analyzed"
              name="analyzed"
              onChange={formik.handleChange}
              value={formik.values?.analyzed ? 1 : 0}
            />
            {formik.errors?.analyzed && <FormErrorMessage>{formik.errors?.analyzed}</FormErrorMessage>}
          </FormControl>

          <NumberInput
            label="Num Pages"
            formControlProps={{
              id: 'num_pages',
              isInvalid: !!formik.errors?.num_pages,
            }}
            name="num_pages"
            error={formik.errors?.num_pages}
            value={formik.values?.num_pages}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('num_pages', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.file_path}
            label={'File Path'}
            props={{
              name: 'file_path',
              placeholder: 'File Path',
              value: formik.values?.file_path,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/pdf-files')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'pdf_file',
    operation: AccessOperationEnum.UPDATE,
  }),
)(PdfFileEditPage);
