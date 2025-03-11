"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { parseAsBoolean, useQueryState } from "nuqs";
import { CompanyForm } from "../forms/company";

export function CreateCompanyModal() {
  const [open, setOpen] = useQueryState(
    "add-company",
    parseAsBoolean.withDefault(false),
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add Company</DialogTitle>
        </DialogHeader>

        <CompanyForm />
      </DialogContent>
    </Dialog>
  );
}
