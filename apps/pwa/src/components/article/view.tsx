"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useUser from "@/hooks/use-user";
import { Article } from "@pkrbt/openapi";
import { useRouter } from "next/navigation";

export default function ArticleView({ article }: { article: Article }) {
  const router = useRouter();
  const user = useUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{article.description ?? "-"}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        {user?.role?.type == "author" && (
          <Button
            size={"sm"}
            onClick={() =>
              router.push(`/articles/${article.documentId}/update`)
            }
          >
            Edit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
