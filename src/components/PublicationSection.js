import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PublicationEntry from "./PublicationEntry";

export default function PublicationSection() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPaperItem {
        nodes {
          title
          authors
          codeLink
          paperLink
          publishDate
          venue
        }
      }
    }
  `);
  return (
    <div class="mx-auto max-w-2xl">
      <div class="max-w-md rounded-lg border bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800 sm:p-8">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Publications
          </h3>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {data.allContentfulPaperItem.nodes.map((entry, index) => (
              <li class="py-3 sm:py-4" key={index}>
                <PublicationEntry entry={entry} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
