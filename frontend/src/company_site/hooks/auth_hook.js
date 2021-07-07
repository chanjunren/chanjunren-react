import {useState} from 'react';

const useAuth = () => {
  const [userInputFocused, setUserInputFocused] = useState(false);
  const [passInputFocused, setPassInputFocused] = useState(false);

  const focusUserInput = () => {
    setUserInputFocused(true);
  };

  const focusPassInput = () => {
    setPassInputFocused(true);
  };

  const unFocusUserInput = () => {
    setUserInputFocused(false);
  };

  const unFocusPassInput = () => {
    setPassInputFocused(false);
  };

  return [userInputFocused, passInputFocused,
    focusUserInput, focusPassInput, unFocusUserInput, unFocusPassInput];
};

export default useAuth;
