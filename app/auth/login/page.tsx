import LoginForm from "@/components/auth/LoginForm";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center">
      <Suspense fallback={<Loading />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
