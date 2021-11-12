// import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'
import { Button, Input, Checkbox } from "components";
import { Props } from './types';
import { validationSchema } from "./settings";
import { useFormik } from 'formik';
import { initialValues } from './settings';


const SigninForm = ({handleFormSubmit} : Props) => {
	const { t } = useTranslation();

	const { values, handleSubmit, handleChange, errors } = useFormik({
		initialValues: {
		  ...initialValues
		},
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: async () => {
		  handleFormSubmit({...values})
		}
	  });

	return (
		<Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={3}>
			<Input
				name="signIn.email"
				onChange={handleChange}
				type="text"
				value={values.signIn.email}
				placeholder={t('signin.label.email')}
				errorMessage={errors.signIn?.email}
				error={!!errors.signIn?.email}
			/>
			<Input
				name='signIn.password'
				type={'password'}
				onChange={handleChange}
				value={values.signIn.password}
				placeholder={t('signin.label.password')}
				errorMessage={errors.signIn?.password}
				error={!!errors.signIn?.password}
			/>
			<Box w="100%" py={1}>
				<Checkbox label={t('signin.label.save_as_default')}></Checkbox>
			</Box>
			{/* TO-DO LOADING (LOAD IS NOT DEFINED ON FIGMA) */}
			<Button width={1} marginBottom={10} type={'submit'} label={t('signin.actions.login')} onClick={handleSubmit}></Button>
		</Flex >
	);
}

export { SigninForm }
