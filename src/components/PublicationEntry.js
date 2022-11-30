import * as React from "react";

export default function PublicationEntry({ entry }) {
  return (
    <div class="flex items-center space-x-4">
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-gray-900 dark:text-white">
          {entry.title}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {entry.authors.map((author, index) => (
            <span>
              {author}
              {index === entry.authors.length - 1 ? "" : ", "}
            </span>
          ))}
        </p>
      </div>
      <div class="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white">
        link
      </div>
    </div>
  );
}
