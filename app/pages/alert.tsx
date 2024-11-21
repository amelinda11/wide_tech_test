import React from 'react';

interface AlertProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const alertStyles = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className={`fixed top-4 right-4 rounded-lg shadow-md max-w-xs p-3 md:p-4 ${alertStyles[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-lg font-semibold text-gray-600 hover:text-gray-800">
          ×
        </button>
      </div>
    </div>
  );
};

export default Alert;
