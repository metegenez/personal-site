import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const projects = [
  {
    title: "Apache Arrow",
    description: "Committer to Apache Arrow, focusing on Rust implementation and query engine improvements.",
    slug: "apache-arrow",
    date: "2023-present",
    link: "https://github.com/apache/arrow-rs"
  },
  {
    title: "Apache DataFusion",
    description: "Contributing to query optimization and execution in Rust-based analytical query engine.",
    slug: "datafusion",
    date: "2023-present",
    link: "https://github.com/apache/arrow-datafusion"
  },
  {
    title: "Arrow Datafusion Ballista",
    description: "Committer on Ballista, a distributed query engine for Apache Arrow.",
    slug: "flight-sql",
    date: "2023-present",
    link: "https://github.com/apache/datafusion-ballista"
  }
];

export default function ProjectsPage() {
  const featured = projects[0];
  const top2 = projects[1];
  const top3 = projects[2];

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Open source contributions.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          <Card>
            <Link href={featured.link} target="_blank">
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    <time dateTime={featured.date}>{featured.date}</time>
                  </div>
                </div>

                <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    View project <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Link href={project.link} target="_blank">
                  <article className="p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-zinc-100">{project.date}</span>
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-zinc-100 group-hover:text-white">
                      {project.title}
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      {project.description}
                    </p>
                  </article>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
