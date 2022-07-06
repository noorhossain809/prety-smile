import { Skeleton } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, admin, isLoading} = useAuth()
    if(isLoading) {return <Skeleton variant="rectangular" width={210} height={118} />}
    return (
      <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;