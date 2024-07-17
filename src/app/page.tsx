"use client";
import { Link } from "@chakra-ui/next-js";

export default function Home() {
  return (
    <div>
      <div className="bg-[#FFF9DC] h-[100vh]">
        <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
          About
        </Link>
      </div>
    </div>
  );
}
