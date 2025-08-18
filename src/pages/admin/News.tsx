import ArrowBack from "../../components/buttons/ArrowBack";
import { Heading, NewLists } from "../../features/admin/news";

const News = () => {
  return (
    <div>
      <ArrowBack className="ml-[20px] mt-[20px] md:ml-[30px]" />
      <Heading />
      <NewLists />
    </div>
  );
};

export default News;
