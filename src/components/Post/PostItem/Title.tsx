import React from "react";

type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return <h2 className="mb-2 text-xl md:text-2xl font-bold cursor-pointer ">{title}</h2>;
}
