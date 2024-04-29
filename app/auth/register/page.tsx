import RegisterForm from "@/components/auth/RegisterForm";
import Loading from "@/components/loading";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-screen py-5 flex items-center">
      <Suspense fallback={<Loading />}>
        <RegisterForm />
      </Suspense>
    </div>
  );
}
