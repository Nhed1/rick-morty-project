import { useNavigate } from "react-router-dom";

type PathProps = string | number;

export const useNavigation = (path: PathProps) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`${path}`);
  };
  return { handleNavigation };
};
