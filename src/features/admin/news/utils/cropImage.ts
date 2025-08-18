export default function getCroppedImg(
  imageSrc: string,
  pixelCrop: { width: number; height: number; x: number; y: number },
  returnBlob = false
): Promise<string | Blob> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imageSrc;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }

      ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );

      if (returnBlob) {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("Blob conversion failed"));
        }, "image/jpeg");
      } else {
        const base64 = canvas.toDataURL("image/jpeg");
        resolve(base64);
      }
    };

    image.onerror = () => {
      reject(new Error("Image loading failed"));
    };
  });
}
