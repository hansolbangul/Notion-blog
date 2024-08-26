"use client";

import React from "react";
import Link from "next/link";
import { useGetTags } from "@/src/service/usePostService";
import { useSearchParams } from "next/navigation";

const CategorySection = () => {
  const { data: tags } = useGetTags();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") || "/";

  const sortedTags = Object.entries(tags || {})
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  const getLinkClassName = (tag: string) =>
    `px-3 py-2 ${currentTag === tag ? "border-b-2 border-b-black text-black" : "text-gray-500"} hover:text-gray-800`;

  return (
    <div className="flex border-b-2 border-gray-100">
      <Link className={getLinkClassName("/")} href="/" passHref>
        <span className="text-body14 cursor-pointer">전체</span>
      </Link>
      {sortedTags.map(([tag, count]) => (
        <Link
          className={getLinkClassName(tag)}
          key={tag}
          href={`/?tag=${tag}`}
          passHref
        >
          <span className="text-body14 cursor-pointer">{tag}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategorySection;
