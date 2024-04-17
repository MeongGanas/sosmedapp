import Navbar from "@/components/layout/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <Navbar children={children} />;
}
