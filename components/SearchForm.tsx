"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "./ui/input";

interface SearchFormProps {
  onSubmit: (url: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const [urlInput, setUrlInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload
    onSubmit(urlInput);
  };

  return (
    <form
      className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5"
      onSubmit={handleSubmit}
    >
      <label
        className="flex-center relative w-full max-w-3xl"
        htmlFor="urlInput"
      >
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="Search icon"
        />
        <Input
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          type="text"
          placeholder="Enter URL"
          id="urlInput"
          value={urlInput}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
}
