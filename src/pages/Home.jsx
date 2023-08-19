import { HOME_COPY } from "../content/home";
import { TextBlock } from "../components/TextBlock";

const Home = () => {
  return (
    <>
      <TextBlock header={HOME_COPY.WELCOME.HEADER} body={HOME_COPY.WELCOME.BODY} />
    </>
  );
};

export default Home;
