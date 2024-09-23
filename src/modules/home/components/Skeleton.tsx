import Container from "../../../shared/layouts/Container";
import { CardSkeleton } from "../../../shared/ui/skeleton/CardSkeleton";

const Skeleton = () => {
  return (
    <Container>
        <div className="grid  grid-cols-2 lg:grid-cols-3 gap-4 pt-32">
          {[...Array(9)].map(item => (<CardSkeleton/>))}
        </div>
      </Container>
      
  );
};

export default Skeleton;