import { db } from "~/db";
import { json, LoaderFunction, useLoaderData } from "remix";
import Cover from "~/shared/components/cover";
import ProductGrid from "~/shared/components/ProductGrid";
import styled from "@emotion/styled";
import redisClient from "~/shared/utils/redis";

export const loader: LoaderFunction = async () => {
  
	// Step 1 - Define a key to store the cache
	const cacheKey = 'allToys';
  let dataRecords = [];
  const t0 = new Date().getTime();

  // Step 2 - Retrieve the cache using the key for all toys
  const toysCache = await redisClient.get(cacheKey);

  // Step 3 - Check if we have a Cache Hit
  if (toysCache) {
		// Step 3.A - Use data from cache
		dataRecords = JSON.parse(toysCache);
  } else {
	  // Step 3.B.1 - Use data from the Database
	  dataRecords = await db.toy.findMany({
	    include: {
	      images: true,
	    },
	  });
		// Step 3.B.2 - Set Cache for 30 seconds
	  redisClient.set(cacheKey, JSON.stringify(dataRecords), 'EX', 30);
	}

  const t1 = new Date().getTime();
  const responseTime = `${t1 - t0}ms`;

  // Step 4 - Return the data
  return json({ toys: dataRecords, responseTime: responseTime });
}

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