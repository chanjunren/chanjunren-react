import { useCallback, useState } from 'react';
import useHttpClient from '../../shared/hooks/http_hook';

const getData = () => {
  const [applications, setApplications] = useState([]);
  const [temiUnits, setTemiUnits] = useState([]);
  const [users, setUsers] = useState([]);
  const { isLoading, errorEncountered, sendRequest, clearError } =
    useHttpClient();

  const fetchData = async (token) => {
    await fetchApplications(token);
    await fetchAppUsers(token);
    await fetchTemiUnits(token);
  };

  const fetchApplications = useCallback(async (token) => {
    const getApplications = async () => {
      let responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/apps/`,
        'GET',
        null,
        { Authorization: 'Bearer ' + token },
      );
      setApplications(responseData.applications);
    };
    try {
      await getApplications();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const fetchTemiUnits = useCallback(async (token) => {
    const getTemiUnits = async () => {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/temis/`,
        'GET',
        null,
        { Authorization: 'Bearer ' + token },
      );
      setTemiUnits(responseData.Units);
    };
    try {
      await getTemiUnits();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const fetchAppUsers = useCallback(async (token) => {
    const getAppUsers = async () => {
      let responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/`,
        'GET',
        null,
        { Authorization: 'Bearer ' + token },
      );
      // console.log(responseData);
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
    temiUnits,
    users,
    sendRequest,
    isLoading,
    errorEncountered,
    clearError,
  };
};

export default getData;
