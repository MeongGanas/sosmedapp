import ImageKit from "imagekit";

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function UploadSingleImage(image: File) {
  if (image.size !== 0) {
    const imageBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(imageBuffer);

    const response = await imageKit.upload({
      file: buffer,
      fileName: image.name,
    });
    return response.url;
  }
  return null;
}
