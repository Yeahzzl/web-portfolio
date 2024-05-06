import { addComment, fetchComment } from "@/app/api/comments";
import { queryClient } from "@/app/provider";
import { useMutation, useQuery } from "@tanstack/react-query";

const useComments = (nickname: string, content: string) => {
  const { data: comments } = useQuery({
    queryKey: ["commentsList"],
    queryFn: fetchComment,
  });

  const addCommentMutate = useMutation({
    mutationFn: async () => await addComment(nickname, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["commentsList"] });
    },
  });
  return { comments, addCommentMutate };
};

export default useComments;
