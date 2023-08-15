import { Box, Button, Flex, Input } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'components/profile/Avatar' or ... Remove this comment to see the full error message
import Avatar from "components/profile/Avatar";
// @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
import { useAuth } from "hooks/auth";
// @ts-expect-error TS(2307): Cannot find module 'hooks/comments' or its corresp... Remove this comment to see the full error message
import { useAddComment } from "hooks/comments";
import { useForm } from "react-hook-form";

export default function NewComment({
  post
}: any) {
  const { id: postID } = post;
  const { user, isLoading: authLoading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
    uid: user?.id,
  });

  function handleAddComment(data: any) {
    addComment(data.text);
    reset();
  }

  if (authLoading) return "Loading...";

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box maxW="600px" mx="auto" py="6">
      // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Flex padding="4">
        // @ts-expect-error TS(2304): Cannot find name 'size'.
        <Avatar user={user} size="sm" />
        // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
        <Box flex="1" ml="4">
          // @ts-expect-error TS(2304): Cannot find name 'form'.
          <form onSubmit={handleSubmit(handleAddComment)}>
            // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
            <Box>
              // @ts-expect-error TS(2749): 'Input' refers to a value, but is being used as a ... Remove this comment to see the full error message
              <Input
                // @ts-expect-error TS(2304): Cannot find name 'size'.
                size="sm"
                // @ts-expect-error TS(2304): Cannot find name 'variant'.
                variant="flushed"
                // @ts-expect-error TS(2304): Cannot find name 'placeholder'.
                placeholder="Write comment..."
                // @ts-expect-error TS(2304): Cannot find name 'autoComplete'.
                autoComplete="off"
                {...register("text", { required: true })}
              // @ts-expect-error TS(2365): Operator '<' cannot be applied to types 'boolean' ... Remove this comment to see the full error message
              />
            </Box>
            // @ts-expect-error TS(2304): Cannot find name 'pt'.
            <Flex pt="2">
              // @ts-expect-error TS(2749): 'Button' refers to a value, but is being used as a... Remove this comment to see the full error message
              <Button
                // @ts-expect-error TS(2304): Cannot find name 'isLoading'.
                isLoading={commentLoading || authLoading}
                // @ts-expect-error TS(2304): Cannot find name 'type'.
                type="submit"
                // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
                colorScheme="teal"
                // @ts-expect-error TS(2304): Cannot find name 'size'.
                size="xs"
                // @ts-expect-error TS(2304): Cannot find name 'ml'.
                ml="auto"
              >
                // @ts-expect-error TS(2304): Cannot find name 'Add'.
                Add Comment
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}