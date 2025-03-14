"use client";

import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import { SearchInput } from "../search-input";
import { Button } from "../ui/button";
import { MCPsCard } from "./mcps-card";
import type { MCP } from "./mcps-featured";

export function MCPsList({ data }: { data?: MCP[] | null }) {
  const [mcps, setMcps] = useState<MCP[]>(data ?? []);
  const [search, setSearch] = useQueryState("q");

  useEffect(() => {
    const filteredMcps = data?.filter((mcp) =>
      mcp.name.toLowerCase().includes(search?.toLowerCase() ?? ""),
    );

    setMcps(filteredMcps ?? []);
  }, [search]);

  return (
    <div className="mt-8">
      <SearchInput
        placeholder="Search MCPs"
        className="border-l-0 border-r-0 border-t-0 border-b-[1px] border-border px-0"
      />

      {mcps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {mcps?.map((mcp) => (
            <MCPsCard key={mcp.id} data={mcp} />
          ))}
        </div>
      ) : (
        <div className="mt-24 flex flex-col items-center">
          <div className="text-center text-sm text-[#878787]">
            No MCPs found
          </div>

          <Button
            variant="outline"
            className="mt-4 rounded-full border-border"
            onClick={() => setSearch(null)}
          >
            Clear search
          </Button>
        </div>
      )}
    </div>
  );
}
