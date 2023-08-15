import { Flex, IconButton } from "@chakra-ui/react";
// @ts-expect-error TS(2307): Cannot find module 'hooks/auth' or its correspondi... Remove this comment to see the full error message
import { useAuth } from "hooks/auth";
import {
  FaRegHeart,
  FaHeart,
  FaComment,
  FaRegComment,
  FaTrash,
} from "react-icons/fa";
// @ts-expect-error TS(2307): Cannot find module 'hooks/posts' or its correspond... Remove this comment to see the full error message
import { useToggleLike, useDeletePost } from "hooks/posts";
import { Link } from "react-router-dom";
// @ts-expect-error TS(2307): Cannot find module 'lib/routes' or its correspondi... Remove this comment to see the full error message
import { PROTECTED } from "lib/routes";
// @ts-expect-error TS(2307): Cannot find module 'hooks/comments' or its corresp... Remove this comment to see the full error message
import { useComments } from "hooks/comments";

export default function Actions({
  post
}: any) {
  const { id, likes, uid } = post;
  const { user, isLoading: userLoading } = useAuth();

  const isLiked = likes.includes(user?.id);
  const config = {
    id,
    isLiked,
    uid: user?.id,
  };

  const { toggleLike, isLoading: likeLoading } = useToggleLike(config);
  const { deletePost, isLoading: deleteLoading } = useDeletePost(id);
  const { comments, isLoading: commentsLoading } = useComments(id);

  return (
    // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
    <Flex p="2">
      // @ts-expect-error TS(2749): 'Flex' refers to a value, but is being used as a t... Remove this comment to see the full error message
      <Flex alignItems="center">
        // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton
          // @ts-expect-error TS(2552): Cannot find name 'onClick'. Did you mean 'onclick'... Remove this comment to see the full error message
          onClick={toggleLike}
          // @ts-expect-error TS(2304): Cannot find name 'isLoading'.
          isLoading={likeLoading || userLoading}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="md"
          // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
          colorScheme="red"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="ghost"
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          // @ts-expect-error TS(2304): Cannot find name 'isRound'.
          isRound
        />
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {likes.length}
      </Flex>
      // @ts-expect-error TS(2304): Cannot find name 'alignItems'.
      <Flex alignItems="center" ml="2">
        // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton
          // @ts-expect-error TS(2304): Cannot find name 'as'.
          as={Link}
          // @ts-expect-error TS(2304): Cannot find name 'to'.
          to={`${PROTECTED}/comments/${id}`}
          // @ts-expect-error TS(2304): Cannot find name 'isLoading'.
          isLoading={commentsLoading}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="md"
          // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
          colorScheme="teal"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="ghost"
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={comments?.length === 0 ? <FaRegComment /> : <FaComment />}
          // @ts-expect-error TS(2304): Cannot find name 'isRound'.
          isRound
        />
        // @ts-expect-error TS(18004): No value exists in scope for the shorthand propert... Remove this comment to see the full error message
        {comments?.length}
      </Flex>

      // @ts-expect-error TS(2304): Cannot find name 'userLoading'.
      {!userLoading && user.id === uid && (
        // @ts-expect-error TS(2749): 'IconButton' refers to a value, but is being used ... Remove this comment to see the full error message
        <IconButton
          // @ts-expect-error TS(2304): Cannot find name 'ml'.
          ml="auto"
          // @ts-expect-error TS(2304): Cannot find name 'onClick'.
          onClick={deletePost}
          // @ts-expect-error TS(2304): Cannot find name 'isLoading'.
          isLoading={deleteLoading}
          // @ts-expect-error TS(2304): Cannot find name 'size'.
          size="md"
          // @ts-expect-error TS(2304): Cannot find name 'colorScheme'.
          colorScheme="red"
          // @ts-expect-error TS(2304): Cannot find name 'variant'.
          variant="ghost"
          // @ts-expect-error TS(2304): Cannot find name 'icon'.
          icon={<FaTrash />}
          // @ts-expect-error TS(2304): Cannot find name 'isRound'.
          isRound
        />
      )}
    </Flex>
  );
}