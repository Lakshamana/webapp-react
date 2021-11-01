import { useMutation } from '@apollo/client';
import { useHistory, Link } from 'react-router-dom';
import { Box, Checkbox, Flex } from '@chakra-ui/react';
import { Button, Input } from "components";
import { MUTATION_SIGNIN } from "services/graphql"
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next'
import { initialValues, validationSchema } from "./settings";
import { AUTH_TOKEN } from 'config/constants';

const SigninForm = () => {
	const { t } = useTranslation()
	const history = useHistory();

	const [signIn] = useMutation(MUTATION_SIGNIN, {
		onCompleted: async (result) => {
			if (!result?.signIn) {
				alert('Failed to login, check your email or password!')
				return
			}

			await localStorage.setItem(AUTH_TOKEN, result.signIn.accessToken);
			history.push('/home')
		},
		onError: (error) => {
			// TO-DO ERROR COMPONENT
			alert('Failed to login, check your email or password!')
		}
	});

	const { values, handleSubmit, handleChange, errors } = useFormik({
		initialValues: {
			...initialValues
		},
		validationSchema,
		validateOnChange: false,
		validateOnBlur: false,
		onSubmit: async () => {
			signIn({
				variables: { ...values }
			})
		}
	});

	return (
		<Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={3}>
			<Input
				name="email"
				onChange={handleChange("signIn.email")}
				value={values.signIn.email}
				type="text"
				placeholder={t('signin.label.email')}
				errorMessage={errors.signIn?.email}
				error={!!errors.signIn?.email}
			/>
			<Input
				name='password'
				type={'password'}
				onChange={handleChange("signIn.password")}
				value={values.signIn.password}
				placeholder={t('signin.label.password')}
				errorMessage={errors.signIn?.password}
				error={!!errors.signIn?.password}
			/>
			<Box w="100%" py={1}>
				<Checkbox>{t('signin.label.save_as_default')}</Checkbox>
			</Box>
			{/* TO-DO LOADING (LOAD IS NOT DEFINED ON FIGMA) */}
			<Button width={1} marginBottom={10} type={'submit'} label={t('signin.actions.login')} onClick={handleSubmit}></Button>
			{/* TO-DO FORGOT PASSWORD, CREATE ATOM FOR LINKS */}
			<Link style={{ 'textTransform': 'uppercase', 'fontWeight': 'bold' }} to="resetPassword">{t('signin.actions.forgot_password')}</Link>
		</Flex >
	);
}

export { SigninForm }
