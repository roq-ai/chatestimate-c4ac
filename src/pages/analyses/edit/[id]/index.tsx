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
import { useRoqClient, useAnalysisFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { analysisValidationSchema } from 'validationSchema/analyses';
import { AnalysisInterface } from 'interfaces/analysis';
import { PdfFileInterface } from 'interfaces/pdf-file';

function AnalysisEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'analysis',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useAnalysisFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: AnalysisInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.analysis.update({
        data: values as RoqTypes.analysis,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/analyses');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<AnalysisInterface>({
    initialValues: data,
    validationSchema: analysisValidationSchema,
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
              label: 'Analyses',
              link: '/analyses',
            },
            {
              label: 'Update Analysis',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Analysis
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Num Words"
            formControlProps={{
              id: 'num_words',
              isInvalid: !!formik.errors?.num_words,
            }}
            name="num_words"
            error={formik.errors?.num_words}
            value={formik.values?.num_words}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('num_words', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Num Sentences"
            formControlProps={{
              id: 'num_sentences',
              isInvalid: !!formik.errors?.num_sentences,
            }}
            name="num_sentences"
            error={formik.errors?.num_sentences}
            value={formik.values?.num_sentences}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('num_sentences', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.most_common_word}
            label={'Most Common Word'}
            props={{
              name: 'most_common_word',
              placeholder: 'Most Common Word',
              value: formik.values?.most_common_word,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.least_common_word}
            label={'Least Common Word'}
            props={{
              name: 'least_common_word',
              placeholder: 'Least Common Word',
              value: formik.values?.least_common_word,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<PdfFileInterface>
            formik={formik}
            name={'pdf_file_id'}
            label={'Select Pdf File'}
            placeholder={'Select Pdf File'}
            fetcher={() => roqClient.pdf_file.findManyWithCount({})}
            labelField={'file_name'}
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
              onClick={() => router.push('/analyses')}
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
    entity: 'analysis',
    operation: AccessOperationEnum.UPDATE,
  }),
)(AnalysisEditPage);
