import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// eslint-disable-next-line boundaries/element-types
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
