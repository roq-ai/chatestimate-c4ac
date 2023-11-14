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
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { chatValidationSchema } from 'validationSchema/chats';
import { UserInterface } from 'interfaces/user';
import { PdfFileInterface } from 'interfaces/pdf-file';
import { ChatInterface } from 'interfaces/chat';

function ChatCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: ChatInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.chat.create({ data: values as RoqTypes.chat });
      resetForm();
      router.push('/chats');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ChatInterface>({
    initialValues: {
      message: '',
      response: '',
      user_id: (router.query.user_id as string) ?? null,
      pdf_file_id: (router.query.pdf_file_id as string) ?? null,
    },
    validationSchema: chatValidationSchema,
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
              label: 'Chats',
              link: '/chats',
            },
            {
              label: 'Create Chat',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Chat
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.message}
            label={'Message'}
            props={{
              name: 'message',
              placeholder: 'Message',
              value: formik.values?.message,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.response}
            label={'Response'}
            props={{
              name: 'response',
              placeholder: 'Response',
              value: formik.values?.response,
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
              onClick={() => router.push('/chats')}
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
    entity: 'chat',
    operation: AccessOperationEnum.CREATE,
  }),
)(ChatCreatePage);
