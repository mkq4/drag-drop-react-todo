import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes';
import { useContext } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {user.isAuth && privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default observer(AppRouter);
