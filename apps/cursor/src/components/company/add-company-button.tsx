"use client";

import { useQueryState } from "nuqs";
import { parseAsBoolean } from "nuqs";
import { Button } from "../ui/button";

export function AddCompanyButton() {
  const [_, setAddCompany] = useQueryState(
    "add-company",
    parseAsBoolean.withDefault(false),
  );

  return (
    <Button
      variant="outline"
      className="border-border rounded-full"
      onClick={() => setAddCompany(true)}
    >
      Add company
    </Button>
  );
}
