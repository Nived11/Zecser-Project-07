
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import Swal from "sweetalert2";
import type { AdminOrSubProps } from "../../components/admin-header/Header";

const UploadedVideosListPage: React.FC<AdminOrSubProps> = ({type}) => {
  const navigate = useNavigate();
  const [uploadedVideos, setUploadedVideos] = useState<any[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("uploadedVideos") || "[]");
    setUploadedVideos(stored);
  }, []);

  const handleDelete = (index: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this video?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = [...uploadedVideos];
        updated.splice(index, 1);
        setUploadedVideos(updated);
        localStorage.setItem("uploadedVideos", JSON.stringify(updated));

        Swal.fire("Deleted!", "The video has been deleted.", "success");
      }
    });
  };

  const handleEdit = (index: number) => {
    navigate(type==='Admin Panel' ? "/admin/learning-videos/upload" : "/sub-admin/learning-videos/upload", { state: { editIndex: index } });
  };

  const handleAddNew = () => {
    navigate(type==='Admin Panel' ? "/admin/learning-videos/upload" : "/sub-admin/learning-videos/upload");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
      <div className="max-w-3xl mx-auto flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold">Manage Chapter Videos</h1>
        <button
          onClick={handleAddNew}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow transition"
          title="Add New Video"
        >
          <FaPlus />
        </button>
      </div>

      <div className="max-w-3xl mx-auto space-y-5">
        {uploadedVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm flex items-center justify-between p-4"
          >
            {/* Left section: Thumbnail + Info */}
            <div className="flex items-center gap-4">
              <img
                src={video.thumbnail}
                alt="Thumbnail"
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h2 className="text-base font-semibold">{video.videoTitle}</h2>
                <p className="text-sm text-gray-600">
                  {video.unit} | {video.chapterName} | {video.part} | Class{" "}
                  {video.class} | {video.subject}
                </p>
              </div>
            </div>

            {/* Right section: Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:text-red-700"
                title="Delete"
              >
                <FaTrash />
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="text-gray-600 hover:text-gray-800"
                title="Edit"
              >
                <FaEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadedVideosListPage;
