"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Searchbar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (querry: string) => {
    const params = new URLSearchParams(searchParams);
    if (querry) {
      params.set("username", querry);
    } else {
      params.delete("username");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search username..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-96"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
    </form>
  );
}
