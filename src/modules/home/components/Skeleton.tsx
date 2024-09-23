import Container from "../../../shared/layouts/Container";
import { CardSkeleton } from "../../../shared/ui/skeleton/CardSkeleton";

const Skeleton = () => {
  return (
    <Container>
        <div className=" grid md:grid-cols-2 gap-x-3 gap-y-8">
          {[...Array(9)].map(item => (<CardSkeleton/>))}
        </div>
      </Container>
      
  );
};

export default Skeleton;