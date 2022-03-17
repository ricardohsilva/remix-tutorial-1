import { db } from "~/db";
import { json, LoaderFunction, useLoaderData } from "remix";
import Cover from "~/shared/components/cover";
import ProductGrid from "~/shared/components/ProductGrid";
import styled from "@emotion/styled";

export const loader: LoaderFunction = async () => {
  const data = await db.toy.findMany({
    include: {
      images: true,
    },
  });
  return json(data);
};

const StyledHomeProductContainer = styled.div`
  margin: 1rem 2rem;
`;


export default function Index() {
  const data = useLoaderData();
  return (
    <>
      <Cover
        title={"Star Wars Toys"}
        image={
          "https://images.unsplash.com/photo-1608983765214-3fb32be57d29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        }
      />
      <StyledHomeProductContainer>
        <ProductGrid toys={data} />
      </StyledHomeProductContainer>
    </>
  );
}