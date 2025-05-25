import React from 'react';
import { X } from 'lucide-react';
interface CopyToastProps {
  isVisible: boolean;
  onClose: () => void;
}
const CopyToast: React.FC<CopyToastProps> = ({
  isVisible,
  onClose
}) => {
  if (!isVisible) return null;
  return <div className="fixed bottom-4 right-4 z-50">
      
    </div>;
};
export default CopyToast;