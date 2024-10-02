"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Article } from "@pkrbt/openapi";
import { useRouter } from "next/navigation";

export default function ArticleView({ article }: { article: Article }) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{article.description ?? "-"}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          size={"sm"}
          onClick={() => router.push(`/articles/${article.documentId}/update`)}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
