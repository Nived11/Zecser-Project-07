import { AddVaccancyForm } from "../../features/admin/AddVaccancy";

export default function AddvaccancyPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-xl font-bold">School Logo</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium">Home</a>
            <a href="#" className="text-sm font-medium">Learning</a>
            <a href="#" className="text-sm font-medium">Sports</a>
            <a href="#" className="text-sm font-medium">News</a>
            <a href="#" className="text-sm font-medium">Events</a>
            <a href="#" className="text-sm font-medium">Career</a>
            <a href="#" className="text-sm font-medium">Facility</a>
            <a href="#" className="text-sm font-medium">Contact Us</a>
          </nav>
        </div>
      </header>

      <div className="border-t border-gray-200 my-4" />

      {/* Main */}
      <main className="flex justify-center px-4">
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-4xl">
          <AddVaccancyForm />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-700 mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-gray-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">School Logo</h3>
                    <p className="text-sm">Explore Explore News Letter</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="text-sm hover:underline">Home</a></li>
                    <li><a href="#" className="text-sm hover:underline">Contact Us</a></li>
                    <li><a href="#" className="text-sm hover:underline">Stay Connected</a></li>
                    <li><a href="#" className="text-sm hover:underline">FAQs</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="text-sm hover:underline">Terms & Conditions</a></li>
                    <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
                    <button className="flex items-center justify-between w-full bg-white text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-100">
                        <span>Enter your email</span>
                        <svg
                        className="w-4 h-4 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>© 2025 School. All Rights Reserved.</p>
                </div>
            </div>  
        </footer>

    </div>
  );
}
