import React, { useContext } from 'react';
import { Context } from '../contexts/index';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {
  const { signed } = useContext(Context);

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
}
