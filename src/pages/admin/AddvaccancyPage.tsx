import { AddVaccancyForm } from "../../features/admin/AddVaccancy";

export default function AddvaccancyPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <main className="flex justify-center px-4 py-10">
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-4xl">
          <AddVaccancyForm />
        </div>
      </main>

      
    </div>
  );
}
