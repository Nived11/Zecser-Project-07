// hooks/useNavigation.ts
import { useNavigate } from "react-router-dom";

/**
 * Returns a function that navigates to a given path.
 * Usage: const goTo = useNavigation(); goTo('/dashboard');
 */
const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  return goTo;
};

export default useNavigation;
