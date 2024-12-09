import { Tables } from "@/shared/supabase.d";
import { supabase } from "@/shared/supabase";

// 방명록 가져오기
export const fetchComment = async () => {
  const commentsQuery = await supabase
    .from("comments")
    .select("*")
    .order("id", { ascending: false })
    .returns<Tables<"comments">[]>();

  const { data: commentsData, error } = commentsQuery;
  if (error) {
    throw new Error(error.message);
  }
  return { data: commentsData, error };
};

// 방명록 등록
export const addComment = async (nickname: string, content: string) => {
  const { data, error } = await supabase
    .from("comments")
    .insert({ nickname, content })
    .select();

  if (error) {
    console.error("Error adding comment:", error.message);
    throw new Error(error.message); // 에러를 명확히 처리
  }

  return data;
};
