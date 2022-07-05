import { Container, Grid, Title } from "./styles";
import { Images } from "utils/Photos";
import { useParams } from "react-router-dom";

type RouteParams = {
  filter: string;
};

export const PhotoGrid = () => {
  let { filter } = useParams<RouteParams>();

  return (
    <Container>
      {filter && Images[filter] ? (
        <>
          <Title>{Images[filter].title}</Title>
          <Grid>
            {Images[filter].childs.map((child) => (
              <img src={child.image} alt={child.name} />
            ))}
          </Grid>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
