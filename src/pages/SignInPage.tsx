import { Title } from '@mantine/core';
import { SignInForm } from '@medplum/react';
import { useNavigate } from 'react-router-dom';

export function SignInPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <SignInForm

      onSuccess={() => navigate('/')}
    >
      <Title>Sign in to SoftTeco Demo</Title>
    </SignInForm>
  );
}
