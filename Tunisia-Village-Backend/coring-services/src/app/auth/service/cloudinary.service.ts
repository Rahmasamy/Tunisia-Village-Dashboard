// cloudinary.service.ts

import cloudinary from "../../../common/cloudinary/cloudinary.config.js";
import streamifier from "streamifier";

export async function uploadPdfBuffer(
  buffer: Buffer,
  publicId: string
): Promise<string> {
  const uploadImg = new Promise<string>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
        folder: "membership-cards",
        public_id: publicId,
        overwrite: true,
      },
      (error, result) => (error ? reject(error) : resolve(result!.secure_url))
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });

  const baseUrl = await uploadImg;
  
  // To view the certificate as an image, we change the extension to .png
  const imageUrl = baseUrl.replace(/\.pdf$/, ".png");
  
  return imageUrl;
}