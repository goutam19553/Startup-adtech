import React from "react";
import { ArrowRight } from "lucide-react";

interface AdSpace {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  // price: number; ❌ Removed from UI use
}

interface AdCardProps {
  adSpace: AdSpace;
  setShowARPreview: (show: boolean) => void;
}

const AdCard: React.FC<AdCardProps> = ({ adSpace, setShowARPreview }) => {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm bg-white dark:bg-gray-900">
      <img
        src={adSpace.imageUrl}
        alt={adSpace.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-bharat-blue dark:text-white">
          {adSpace.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {adSpace.location}
        </p>

        {/* Price section removed */}

        <div className="mt-4 border-t dark:border-gray-700 pt-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => setShowARPreview(true)}
              className="btn-accent py-1 px-3 text-sm"
            >
              AR Preview
            </button>
            <button
              onClick={() =>
                alert("🚧 Coming Soon – This feature is under development!")
              }
              className="btn-primary py-1 px-3 text-sm flex items-center"
            >
              Details <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
