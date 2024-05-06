import { addComment, fetchCommentData } from "@/app/api/comments/route";
import { queryClient } from "@/app/provider";
import { useMutation, useQuery } from "@tanstack/react-query";

const useComments = () => {
  const { data: comments } = useQuery({
    queryKey: ["commentsList"],
    queryFn: fetchCommentData,
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
