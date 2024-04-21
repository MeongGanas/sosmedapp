"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormError, FormSuccess } from "../auth/FormMessage";
import { Button } from "../ui/button";
import CreatePost from "@/actions/post/create";
import { useFormState, useFormStatus } from "react-dom";
import { Label } from "../ui/label";

export default function CreatePostForm() {
  const [state, dispatch] = useFormState(CreatePost, undefined);
  const { pending } = useFormStatus();

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Create Post</CardTitle>
        <CardDescription>Fill below form to create a new post.</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={dispatch} className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              name="image"
              type="file"
              disabled={pending}
              accept="image/jpeg, image/jpg, image/png, image/webp"
              required
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="caption">Caption (optional)</Label>
            <Textarea
              id="caption"
              name="caption"
              placeholder="Your caption"
              disabled={pending}
            />
          </div>

          {!state?.success && <FormError message={state?.message} />}
          {state?.success && <FormSuccess message={state?.message} />}
          <Button disabled={pending} type="submit" className="w-full">
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
