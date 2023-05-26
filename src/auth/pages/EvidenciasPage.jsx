import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from '../../store/auth';

const formData = {
  eviId: '',
  eviDato: '',
  eviImg: '',
  eviMensaje: '',
};

// 3.- tblEvidencias(eviId,eviDato,eviImágen,eviMensaje)

export const EvidenciasPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();

    // console.log({ email, password })
    // dispatch(startLoginWithEmailPassword({ email, password }));
  };

  return (
    <AuthLayout title='Login'>
      <form
        onSubmit={onSubmit}
        className='animate__animated animate__fadeIn animate__faster'
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={password}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
