import { HOME_COPY } from "../content/home";
import { TextBlock } from "../components/TextBlock";

const Home = () => {
  return (
    <>
      <TextBlock header={HOME_COPY.WHO.HEADER} body={HOME_COPY.WHO.BODY} />
      <TextBlock header={HOME_COPY.NEXT.HEADER} body={HOME_COPY.NEXT.BODY} />
      <TextBlock header={HOME_COPY.LAST.HEADER} body={HOME_COPY.LAST.BODY} />
    </>
  );
};

export default Home;
