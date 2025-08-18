import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return handleLogout;
};

export default useLogout;
