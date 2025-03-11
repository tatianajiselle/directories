"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { type ChangeEvent, type DragEvent, useState } from "react";

interface UploadLogoProps {
  onUpload?: (url: string) => void;
  prefix: string;
  image?: string | null;
}

export default function UploadLogo({
  onUpload,
  prefix,
  image,
}: UploadLogoProps) {
  const [preview, setPreview] = useState<string | null>(image ?? null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      return;
    }

    const MAX_FILE_SIZE = 1024 * 1024; // 1MB in bytes
    if (file.size > MAX_FILE_SIZE) {
      return;
    }

    setIsUploading(true);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        setPreview(dataUrl);
      };
      reader.readAsDataURL(file);

      // Upload to Supabase Storage
      const supabase = createClient();
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(`${prefix}/${fileName}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        throw error;
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage
        .from("avatars")
        .getPublicUrl(`${prefix}/${fileName}`);

      onUpload?.(publicUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div
      className={`relative w-[100px] h-[100px] border border-border 
         transition-colors duration-200 cursor-pointer`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleFileInput}
        accept="image/*"
      />

      {preview ? (
        <Image
          src={preview}
          alt="Logo preview"
          fill
          className="object-cover rounded-lg"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm text-gray-500">
          <svg
            className="w-6 h-6 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-xs text-center px-2">
            Drop logo or click to upload
          </span>
        </div>
      )}
    </div>
  );
}
