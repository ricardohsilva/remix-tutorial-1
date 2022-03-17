import styled from "@emotion/styled";

interface IProps {
  image: string;
  title: string;
}

const StyledCover = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
  max-height: 500px;
`;

const StyledCoverTitle = styled.h1`
  position: absolute;
  top: 30%;
  color: white;
  padding-left: 1rem;
`;

export default function Cover({ image, title }: IProps) {
  const StyledCoverImage = styled.div`
    max-height: inherit;
    height: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${image});
  `;

  return (
    <StyledCover>
      <StyledCoverTitle>{title}</StyledCoverTitle>
      <StyledCoverImage></StyledCoverImage>
    </StyledCover>
  );
}