'use client'; // Mark as client component
export default function TopBar() {
    return (
      <div className="bg-blue-600 text-white py-3 z-50 relative">
        <div className="container mx-auto flex justify-between items-center text-base px-4">
          {/* Phone Number */}
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <span>Call Us: +123 456 7890</span>
          </div>
  
          {/* Operating Hours */}
          <div className="flex items-center space-x-2">
            <span>🕒</span>
            <span>Mon - Sat: 9:00 - 18:00</span>
          </div>
        </div>
      </div>
    );
  }