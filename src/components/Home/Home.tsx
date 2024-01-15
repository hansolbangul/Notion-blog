"use client";

import React, { useCallback, useState } from "react";
import Container from "../Elements/Container";
import Search from "./Search/Search";
import PostList from "./PostList/PostList";
import { TPosts } from "@/src/types";
import Commend from "../Post/Commend";

type Props = {
  posts: TPosts;
  tags: { [tag: string]: number };
};

export default function Home({ posts, tags }: Props) {
  const [search, setSearch] = useState("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearch(value);
    },
    [search]
  );

  return (
    <Container.Col className="px-4">
      <Search onChange={onChange} value={search} />
      <PostList search={search} posts={posts} tags={tags} />
    </Container.Col>
  );
}
