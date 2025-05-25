
import React from 'react';
import { X } from 'lucide-react';

interface CopyToastProps {
  isVisible: boolean;
  onClose: () => void;
}

const CopyToast: React.FC<CopyToastProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
        <span className="text-sm">Copied to clipboard</span>
        <button 
          onClick={onClose}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default CopyToast;
