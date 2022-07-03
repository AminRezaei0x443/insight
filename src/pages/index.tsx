import Intro from '@/components/main/sections/Intro';
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Insight.d"
          description="Acquire insight by sharing and readimg, Pay for what you desire."
        />
      }
    >
      <Intro />
    </Main>
  );
};

export default Index;
