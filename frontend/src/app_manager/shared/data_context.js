import { createContext } from 'react';
import useHttpClient from '../../company_site/hooks/http_hook';

const DataContext = createContext({
  fetchData: () => {},
  fetchApplications: () => {},
  fetchTemiUnits: () => {},
  fetchAppUsers: () => {},
  applications: [],
  applicationsMap: {},
  temiUnits: [],
  users: [],
  isLoading: null,
  errorEncountered: null,
  clearError: () => {},
});

export default DataContext;
