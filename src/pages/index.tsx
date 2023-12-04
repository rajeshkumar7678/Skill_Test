import CreativeEnglishPage from "@/components/templates/CreativeEnglishPage";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <CreativeEnglishPage />
    </div>
  );
}
