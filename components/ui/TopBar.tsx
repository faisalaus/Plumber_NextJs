"use client";
interface TopBarProps {
  phoneNumber?: string;
  operatingHours?: string;
}

export default function TopBar({
  phoneNumber = "0415 316 044",
  operatingHours = "Monday to Sat 7:00 - 18:00",
}: TopBarProps) {
  return (
    <div className="bg-teal-900 text-white h-12 flex items-center z-50 relative">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center px-4 space-y-2 md:space-y-0">
        {/* Phone Number */}
        {phoneNumber && (
          <div
            className="flex items-center space-x-2"
            aria-label="Contact Information"
          >
            <span aria-hidden="true">📞</span>
            <span className="font-medium">{phoneNumber}</span>
          </div>
        )}

        {/* Operating Hours */}
        {operatingHours && (
          <div
            className="flex items-center space-x-2"
            aria-label="Operating Hours"
          >
            <span aria-hidden="true">🕒</span>
            <span className="font-medium">{operatingHours}</span>
          </div>
        )}
      </div>
    </div>
  );
}
