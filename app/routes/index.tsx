import { db } from "~/db";
import { json, LoaderFunction, useLoaderData } from "remix";
import Cover from "~/shared/components/cover";
import ProductGrid from "~/shared/components/ProductGrid";
import styled from "@emotion/styled";
import redisClient from "~/shared/utils/redis";

export const loader: LoaderFunction = async () => {
  // Get the Cache with the key home:allToys
  const toysCache = await redisClient.get('home:allToys');
  // Time Before Loading
  const t0 = new Date().getTime();

  // If Cache hit, return the cache
  if (toysCache) {
    // Time After Searching for Cache
    const t1 = new Date().getTime();

    // Response Time Result
    const responseTime = `${t1 - t0}ms`;

    // Return Cache data
    return json({ toys: JSON.parse(toysCache), responseTime: responseTime });
  }

  // If Cache Miss, Load Data from Prisma
  const data = await db.toy.findMany({
    include: {
      images: true,
    },
  });

  // Time After Loading
  const t1 = new Date().getTime();

  // Response Time Result
  const responseTime = `${t1 - t0}ms`;

  // Set Cache
  redisClient.set('home:allToys', JSON.stringify(data), 'EX', 30);

  // Return Prisma data
  return json({ toys: data, responseTime: responseTime });
};

const StyledHomeProductContainer = styled.div`
  margin: 1rem 2rem;
`;


export default function Index() {
  const data = useLoaderData();
  return (
    <>
      {/* We are going to add the result in our Cover Title */}
      <Cover
        title={`Star Wars Toys - Loading Time: ${data.responseTime}`}
        image={
          "https://images.unsplash.com/photo-1608983765214-3fb32be57d29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        }
      />
      <StyledHomeProductContainer>
        <ProductGrid toys={data.toys} />
      </StyledHomeProductContainer>
    </>
  );
}