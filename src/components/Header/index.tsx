import { Button, ButtonsContainer, Container, Title } from "./styles";
import { Images } from "utils/Photos";
import { useParams, useNavigate } from "react-router-dom";

type RouteParams = {
  filter: string;
};

export const Header = () => {
  let { filter } = useParams<RouteParams>();
  let navigate = useNavigate();

  const navigateToFilter = (selectedFilter: string) => {
    navigate(`../${selectedFilter}`, { replace: true });
  };

  return (
    <Container>
      <Title> Meme Shot</Title>

      <ButtonsContainer>
        {Object.keys(Images).map((child) => (
          <Button
            className={child === filter ? "selected" : ""}
            onClick={() => navigateToFilter(child)}
          >
            {child}
          </Button>
        ))}
      </ButtonsContainer>
    </Container>
  );
};
