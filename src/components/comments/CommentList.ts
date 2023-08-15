import { Box } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'hooks/comments' or its corresp... Remove this comment to see the full error message
import { useComments } from "hooks/comments";
import Comment from "./Comment";

export default function CommentList({
  post
}: any) {
  const { id } = post;
  const { comments, isLoading } = useComments(id);

  if (isLoading) return "Loading...";

  return (
    // @ts-expect-error TS(2749): 'Box' refers to a value, but is being used as a ty... Remove this comment to see the full error message
    <Box>
      // @ts-expect-error TS(2304): Cannot find name 'key'.
      {comments.map((comment: any) => <Comment key={comment.id} comment={comment} />)}
    </Box>
  );
}