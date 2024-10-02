"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Article } from "@pkrbt/openapi";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { create, update } from "@/services/article";
import invariant from "tiny-invariant";

interface Props {
  article: Partial<Article>;
  context: string;
}

const FormSchema = z.object({
  title: z.string().min(1, {
    message: "Judul harus diisi",
  }),
  description: z.string().optional(),
});

export default function ArticleForm({ article, context }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...article,
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(context);
    if ("create" == context) {
      await create(data);
    } else {
      invariant(article.documentId);
      await update(article.documentId, data);
    }

    return false;
  };
  return (
    <div>
      <h1>{article.title}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Judul</FormLabel>
                <FormControl>
                  <Input placeholder="judul" {...field} />
                </FormControl>
                <FormDescription>Masukkan judul artikel</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi</FormLabel>
                <FormControl>
                  <Input placeholder="deskripsi" {...field} />
                </FormControl>
                <FormDescription>deskripsi singkat artikel</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Simpan</Button>
        </form>
      </Form>
    </div>
  );
}
