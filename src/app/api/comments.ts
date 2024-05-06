import { Tables } from "@/shared/supabase.d";
import { supabase } from "@/shared/supabase";

// 방명록 가져오기
export const fetchComment = async () => {
  const commentsQuery = await supabase
    .from("comments")
    .select("*, profile(*)")
    .order("id", { ascending: false })
    .returns<Tables<"comments">[]>();

  const { data: commentsData, error } = commentsQuery;
  return { data: commentsData, error };
};

// 방명록 등록
export const addComment = async (
  userId: string,
  nickname: string,
  content: string
) => {
  await supabase
    .from("comments")
    .insert({ user_id: userId, nickname, content })
    .select();
};
