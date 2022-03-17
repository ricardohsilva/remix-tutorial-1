import styled from "@emotion/styled";
import { Link } from "remix";

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1rem;
`;

const StyledProductGridItem = styled.div`
  height: 400px;
  border-radius: 10%;
  border: 1px solid #eeeeee;
  transition: 0.5s;
  background-color: #fff;
  padding: 1rem;
  transition: 0.5s;
  &:hover {
    border: #11468f solid 1px;
  }
`;

const StyledProductGridItemText = styled.p`
  text-align: center;
  margin: 0.5rem;
  color: #11468f;
`;

const StyledProductGridItemImage = styled.img`
  height: 65%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export default function ProductGrid({ toys }: any) {
  return (
    <StyledProductGrid>
      {toys.map((toy: any, index: number) => (
        <StyledProductGridItem key={index}>
          {toy && toy.images && (
            <StyledProductGridItemImage src={toy.images[0].imageSrc} />
          )}
          <Link to={`/${toy.id}`} prefetch="none">
            <StyledProductGridItemText>{toy.name}</StyledProductGridItemText>
          </Link>
          <StyledProductGridItemText>${toy.price}.00</StyledProductGridItemText>
        </StyledProductGridItem>
      ))}
    </StyledProductGrid>
  );
}