import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

type Props = {
  size?: number;
  className?:string
};
const ArrowBack = ({ size = 25,className }: Props) => {
  const navigate = useNavigate();
  return (
    <button className={className} onClick={() => navigate(-1)}>
      <IoIosArrowBack size={size} />
    </button>
  );
};

export default ArrowBack;
