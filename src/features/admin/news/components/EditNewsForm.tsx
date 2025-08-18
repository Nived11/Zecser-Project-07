import { useState, useCallback } from "react";
import { DialogFooter } from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Slider } from "../../../../components/ui/slider";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";
import type { NewsType } from "../hooks/useNews";
import getCroppedImg from "../utils/cropImage";
import { useUpdateNews } from "../hooks/useUpdateNews";

interface Props {
  news: NewsType | null;
  onSave: () => void;
}

const EditNewsForm = ({ news, onSave }: Props) => {
  const [title, setTitle] = useState(news?.title || "");
  const [description, setDescription] = useState(news?.description || "");
  const [cropImage, setCropImage] = useState<string | null>(null);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const { updateNews, createNews, isUpdating, isCreating, error } =
    useUpdateNews();

  const onCropComplete = useCallback((_: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const reader = new FileReader();
      reader.onload = () => {
        setCropImage(reader.result as string);
      };
      reader.readAsDataURL(selected);
    }
  };

  const handleSubmit = async () => {
    try {
      let finalImageUrl = news?.image_url;
      let croppedFile: File | undefined;

      if (cropImage && croppedAreaPixels) {
        const blob = await getCroppedImg(cropImage, croppedAreaPixels, true);
        croppedFile = new File([blob], "cropped.jpg", { type: "image/jpeg" });
      }

      const payload = {
        title: title || "",
        description: description || "",
        image_url: croppedFile ? undefined : finalImageUrl,
        file: croppedFile,
      };

      if (news) {
        await updateNews(news.id, payload);
        onSave();
      } else {
        const created = await createNews(payload);
        if (created) onSave();
      }
    } catch (err) {
      console.error("Failed to submit", err);
    }
  };

  return (
    <div className="space-y-4 relative">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="text-sm md:text-[16px]"
      />
      <Textarea
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="text-sm md:text-[16px]"
      />

      <div className="space-y-2">
        <Input type="file" accept="image/*" onChange={handleImageChange} className="cursor-pointer" />
        {cropImage ? (
          <div className="relative w-full h-64 bg-gray-100 rounded overflow-hidden">
            <Cropper
              image={cropImage}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
        ) : (
          news?.image_url && (
            <div className="aspect-[4/3]">
              <img
              src={news?.image_url}
              alt="preview"
              className="w-full h-full object-cover"
            />
            </div>
          )
        )}
        {cropImage && (
          <div className="pt-2">
            <Slider
              min={1}
              max={3}
              step={0.1}
              value={[zoom]}
              onValueChange={([v]) => setZoom(v)}
            />
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <DialogFooter>
        <Button
          disabled={isUpdating || isCreating}
          className="text-white"
          onClick={handleSubmit}
        >
          {isUpdating || isCreating ? "Saving..." : news ? "Save" : "Create"}
        </Button>
      </DialogFooter>
    </div>
  );
};

export default EditNewsForm;
