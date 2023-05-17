import { Box, Text } from "@chakra-ui/react";
import Post from "./index";

export default function PostsList({
  posts
}: any) {
  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box px="4" align="center">
      // @ts-expect-error TS(2322): Type 'string' is not assignable to type 'Text'.
      {posts?.length === 0 ? (
        // @ts-expect-error TS(2304): Cannot find name 'textAlign'.
        <Text textAlign="center" fontSize="xl">
          // @ts-expect-error TS(2304): Cannot find name 'No'.
          No posts yet... Feeling a little lonely here.
        </Text>
      ) : (
        // @ts-expect-error TS(2749): 'Post' refers to a value, but is being used as a t... Remove this comment to see the full error message
        posts?.map((post: any) => <Post key={post.id} post={post} />)
      )}
    </Box>
  );
}