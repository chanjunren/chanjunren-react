import { createContext } from 'react';

const DataContext = createContext({
  fetchData: () => {},
  fetchApplications: () => {},
  fetchTemiUnits: () => {},
  fetchAppUsers: () => {},
  sendRequest: () => {},
  applications: [],
  applicationsMap: {},
  temiUnits: [],
  users: [],
  isLoading: null,
  errorEncountered: null,
  clearError: () => {},
});

export default DataContext;
