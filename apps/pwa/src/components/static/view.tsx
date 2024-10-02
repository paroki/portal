"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Static } from "@pkrbt/openapi";
import { useRouter } from "next/navigation";

interface Props {
  item: Static;
}

export default function StaticView({ item }: Props) {
  const router = useRouter();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.description ?? "-"}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          size={"sm"}
          onClick={() => router.push(`/statics/${item.documentId}/update`)}
        >
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
