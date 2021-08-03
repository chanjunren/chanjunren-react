import { createContext } from 'react';

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
