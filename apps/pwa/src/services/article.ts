"use server";
import api from "@/utils/api";
import { Article } from "@pkrbt/openapi";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function create(payload: Article) {
  try {
    await api.article.create({
      ...payload,
    });
  } catch (e) {
    console.log(e);
  }
  revalidatePath("/(blog)/articles", "page");
  redirect(`/articles`);
}

export async function update(documentId: string, payload: Article) {
  try {
    console.log(payload);
    await api.article.update(documentId, {
      ...payload,
    });
  } catch (e) {
    console.log(e);
  }
  revalidatePath("/(blog)/articles", "page");
  revalidatePath(`/(blog)/articles/[documentId]/update`, "page");
  redirect(`/articles`);
}

export async function remove() {}
