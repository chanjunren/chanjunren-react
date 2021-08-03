import { useCallback, useState, useEffect } from 'react';
import useHttpClient from '../../company_site/hooks/http_hook';
import { BASE_ADDRESS } from '../../util/values';

const getData = () => {
  const [applications, setApplications] = useState([]);
  const [temiUnits, setTemiUnits] = useState([]);
  const [users, setUsers] = useState([]);

  const [applicationsMap, setApplicationsMap] = useState({});

  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();

  const fetchData = () => {};

  const fetchApplications = useCallback(async () => {
    const getApplications = async () => {
      let responseData = await sendRequest(`${BASE_ADDRESS}/api/apps`);
      console.log(responseData);
      setApplications(responseData.applications);
    };
    try {
      await getApplications();
      updateAppMap();
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    updateAppMap();
  }, [applications]);

  const updateAppMap = () => {
    let tempMap = {};
    for (let i = 0; i < applications.length; i++) {
      tempMap[applications[i].id] = applications[i].name;
    }
    console.log(tempMap);
    setApplicationsMap(tempMap);
  };

  const fetchTemiUnits = useCallback(async () => {
    const getTemiUnits = async () => {
      const responseData = await sendRequest(`${BASE_ADDRESS}/api/temis`);
      console.log(responseData);
      setTemiUnits(responseData.Units);
    };
    try {
      await getTemiUnits();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const fetchAppUsers = useCallback(async () => {
    const getAppUsers = async () => {
      let responseData = await sendRequest(`${BASE_ADDRESS}/api/users`);
      console.log(responseData);
      setUsers(responseData.users);
    };
    try {
      await getAppUsers();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return {
    fetchData,
    fetchApplications,
    fetchTemiUnits,
    fetchAppUsers,
    applications,
    applicationsMap,
    temiUnits,
    users,
    isLoading,
    errorEncountered,
    clearError,
  };
};

export default getData;
