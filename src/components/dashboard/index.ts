import { Box, Button, Heading, HStack, Textarea } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'components/post/PostsList' or ... Remove this comment to see the full error message
import PostsLists from "components/post/PostsList";
// @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
import { useAuth } from "hooks/auth";
// @ts-expect-error TS(2307): Cannot find module 'hooks/posts' or its correspond... Remove this comment to see the full error message
import { useAddPost, usePosts } from "hooks/posts";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

function NewPost() {
  const { register, handleSubmit, reset } = useForm();
  const { addPost, isLoading: addingPost } = useAddPost();
  const { user, isLoading: authLoading } = useAuth();

  function handleAddPost(data: any) {
    addPost({
      uid: user.id,
      text: data.text,
    });
    reset();
  }

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box maxW="600px" mx="auto" py="10">
      // @ts-expect-error TS(2304): Cannot find name 'form'.
      <form onSubmit={handleSubmit(handleAddPost)}>
        // @ts-expect-error TS(2749): 'HStack' refers to a value, but is being used as a... Remove this comment to see the full error message
        <HStack justify="space-between">
          // @ts-expect-error TS(2749): 'Heading' refers to a value, but is being used as ... Remove this comment to see the full error message
          <Heading size="lg">New Post</Heading>
          <Button
            // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
            colorScheme="teal"
            // @ts-expect-error TS(2304): Cannot find name 'type'.
            type="submit"
            // @ts-expect-error TS(2304): Cannot find name 'isLoading'.
            isLoading={authLoading || addingPost}
            // @ts-expect-error TS(2304): Cannot find name 'loadingText'.
            loadingText="Loading"
          >
            // @ts-expect-error TS(2304): Cannot find name 'Post'.
            Post
          </Button>
        </HStack>
        <Textarea
          // @ts-expect-error TS(2304): Cannot find name 'as'.
          as={TextareaAutosize}
          // @ts-expect-error TS(2304): Cannot find name 'resize'.
          resize="none"
          // @ts-expect-error TS(2304): Cannot find name 'mt'.
          mt="5"
          // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
          placeholder="Create a new post..."
          // @ts-expect-error TS(2304): Cannot find name 'minRows'.
          minRows={3}
          // @ts-expect-error TS(2304): Cannot find name 'register'.
          {...register("text", { required: true })}
        // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
        />
      </form>
    </Box>
  );
}

export default function Dashboard() {
  const { posts, isLoading } = usePosts();

  if (isLoading) return "Loading posts...";

  return (
    <>
      // @ts-expect-error TS(2749): 'NewPost' refers to a value, but is being used as ... Remove this comment to see the full error message
      <NewPost />
      // @ts-expect-error TS(2588): Cannot assign to 'posts' because it is a constant.
      <PostsLists posts={posts} />
    </>
  );
}