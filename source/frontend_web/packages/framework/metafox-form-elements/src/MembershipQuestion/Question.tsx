/**
 * @type: formElement
 * name: form.element.MembershipQuestion
 * chunkName: formElement
 */
import { FormFieldProps } from '@metafox/form';
import { useGlobal } from '@metafox/framework';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  styled,
  TextField
} from '@mui/material';
import { useFormikContext } from 'formik';
import { camelCase, isEmpty, isString } from 'lodash';
import React from 'react';
import ErrorMessage from '../ErrorMessage';
import Answer from './Answer';
import { NEW, TypeQuestion, UPDATE } from './type';

const BtnMoreAnswer = styled(Button)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.mixins.pxToRem(13),
  color: theme.palette.primary.main,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(0.5),
  marginLeft: theme.spacing(5),
  width: 'fit-content',
  '&:hover': {
    textDecoration: 'underline'
  }
}));

const typeOptions = [
  { value: TypeQuestion.CheckBox, label: 'checkbox' },
  { value: TypeQuestion.Select, label: 'multiple_choice' },
  { value: TypeQuestion.FreeAnswer, label: 'written_answer' }
];

const MembershipQuestionDialog = ({
  name,
  formik,
  disabled: forceDisabled
}: FormFieldProps) => {
  const { i18n } = useGlobal();
  const formikProps: any = useFormikContext();

  // init fields data
  React.useEffect(() => {
    let valueOption = [];

    if (isEmpty(formikProps.initialValues?.options)) {
      valueOption = [
        { title: '', id: new Date().getMilliseconds(), type: NEW },
        { title: '', id: new Date().getMilliseconds() + 1, type: NEW }
      ];
    }

    if (!isEmpty(formikProps.initialValues?.options)) {
      valueOption = formikProps.initialValues?.options;
    }

    if (!isEmpty(formikProps.values?.options)) {
      valueOption = formikProps.values?.options;
    }

    if (formikProps.values?.type_id === TypeQuestion.FreeAnswer) {
      valueOption = undefined;
    }

    formik.setFieldValue('options', valueOption, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formikProps.values?.type_id]);

  const handleAddAnswer = () => {
    const newValue = [
      ...formikProps.values?.options,
      { title: '', id: new Date().getMilliseconds(), type: NEW }
    ];

    formik.setFieldValue('options', newValue);
  };

  const handleChangeAnswer = (e, item) => {
    const { value } = e.target;

    // eslint-disable-next-line no-confusing-arrow
    const newValue = formikProps.values.options?.map(answer =>
      answer.id === item.id
        ? {
            ...answer,
            title: value.trim(),
            type:
              !!formik.initialValues?.options && item.type !== NEW
                ? UPDATE
                : NEW
          }
        : answer
    );

    formik.setFieldValue('options', newValue);
  };

  const handleBlurQuestion = e => {
    if (!formik.values?.question?.trim()) formik.setFieldValue('question', '');

    formik.handleBlur(e);
  };

  const handleRemoveAnswer = (id: number) => {
    const newValue = formik.values.options?.filter(item => item.id !== id);
    formik.setFieldValue('options', newValue);
  };

  return (
    <FormControl
      fullWidth
      margin="normal"
      data-testid={camelCase(`field ${name}`)}
    >
      <Box>
        <Box sx={{ height: '40px', display: 'flex' }}>
          <TextField
            id="question"
            name="question"
            sx={{ flex: 1, minWidth: 0, marginRight: 2 }}
            size="small"
            label={i18n.formatMessage({ id: 'add_a_question' })}
            variant="outlined"
            inputProps={{
              maxLength: 255
            }}
            error={!!(formik.submitCount && formik.errors.question)}
            value={formikProps.values?.question}
            onChange={formik.handleChange}
            onBlur={handleBlurQuestion}
          />
          <Select
            id="type_id"
            name="type_id"
            sx={{ height: '100%' }}
            value={formikProps.values?.type_id}
            onChange={formik.handleChange}
          >
            {typeOptions.map(({ value, label }, index) => (
              <MenuItem key={index.toString()} value={value}>
                {i18n.formatMessage({ id: label })}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <ErrorMessage error={formik.errors?.question} />
      </Box>
      {formikProps.values.type_id !== TypeQuestion.FreeAnswer ? (
        <>
          {formikProps.values?.options?.map((item, index) => {
            return (
              <Answer
                formik={formik}
                key={item.id.toString()}
                value={item.title}
                type={formikProps.values.type_id}
                error={
                  !isEmpty(formik.errors?.options) &&
                  formik.errors?.options?.at(index)
                }
                onRemove={() => handleRemoveAnswer(item.id)}
                onChange={e => handleChangeAnswer(e, item)}
              />
            );
          })}
          <BtnMoreAnswer
            onClick={handleAddAnswer}
            variant="text"
            color="primary"
            size="small"
            disabled={forceDisabled}
          >
            {i18n.formatMessage({ id: 'add_answer' })}
          </BtnMoreAnswer>
          {isString(formik.errors) && <ErrorMessage error={formik.errors} />}
        </>
      ) : null}
    </FormControl>
  );
};

export default MembershipQuestionDialog;
