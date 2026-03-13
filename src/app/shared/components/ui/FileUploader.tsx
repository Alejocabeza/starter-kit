"use client";

import { UploadButton } from "@/app/shared/utils/uploadthing";
// eslint-disable-next-line boundaries/element-types
import { type OurFileRouter } from "@/app/api/uploadthing/core";

interface FileUploaderProps {
  onClientUploadComplete: (res: { url: string; name: string }[]) => void;
  onUploadError: (error: Error) => void;
  endpoint?: keyof OurFileRouter;
}

export function FileUploader({
  onClientUploadComplete,
  onUploadError,
  endpoint = "imageUploader",
}: FileUploaderProps) {
  return (
    <div className="border-base-content/20 bg-base-200/50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-4">
      <UploadButton
        endpoint={endpoint}
        onClientUploadComplete={(res: { url: string; name: string }[]) => {
          console.log("Files: ", res);
          onClientUploadComplete(res);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
          onUploadError(error);
        }}
        appearance={{
          button: "btn btn-primary",
          container: "w-full max-w-xs",
        }}
      />
    </div>
  );
}
