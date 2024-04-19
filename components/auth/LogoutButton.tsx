import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default async function LogoutButton() {
  const onClick = () => {
    signOut();
  };

  return (
    <Button className="w-full flex gap-2 items-center" onClick={onClick}>
      <LogOut className="h-5 w-5" />
      Logout
    </Button>
  );
}
