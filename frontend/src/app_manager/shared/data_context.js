import { createContext } from 'react';
import useHttpClient from '../../company_site/hooks/http_hook';

export const DataContext = createContext({
  applications: [],
  temiUnits: [],
  users: [],
  setApplications: () => {},
  setTemiUnits: () => {},
  setUsers: () => {},
});
