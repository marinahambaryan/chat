import React from "react";

interface Props {
  onLeaveChat: () => void;
}

const ToolBar = ({ onLeaveChat }: Props) => {
  return (
    <div className="bg-gray-200 p-4 border-t border-gray-300 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <button
          onClick={onLeaveChat}
          className="bg-red-500 text-white p-2 rounded-lg"
        >
          Leave
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
