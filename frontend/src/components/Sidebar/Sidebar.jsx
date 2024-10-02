/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Switch } from "antd";
import {
  Search,
  LayoutDashboard,
  Calendar,
  CheckSquare,
  Paintbrush,
  Moon,
  ChevronDown,
  Settings,
  HelpCircle,
  Clock,
} from "lucide-react";

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ activeItem, setActiveItem }) => {
  //   const [activeItem, setActiveItem] = useState('Calendar');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Overview" },
    { icon: <Calendar size={20} />, label: "Calendar" },
    { icon: <CheckSquare size={20} />, label: "To do list" },
  ];

  const themeColors = ["#3b82f6", "#22c55e", "#f97316", "#ef4444", "#8b5cf6"];

  return (
    <motion.div
      initial={{ width: 250 }}
      animate={{ width: isCollapsed ? 100 : 300 }}
      className={`h-screen bg-white ${
        isDarkMode ? "dark:bg-gray-800 dark:text-white" : ""
      } p-4 shadow-lg`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='flex items-center mb-8'>
        <div className='w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3'>
          <Clock size={24} color='white' />
        </div>
      </motion.div>

      <div className='mb-6'>
        <Input
          prefix={<Search size={18} className='text-gray-400' />}
          placeholder='Search'
          className='rounded-lg'
        />
      </div>

      <nav>
        {menuItems.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveItem(item.label)}
            className={`flex items-center p-3 rounded-lg cursor-pointer mb-2 ${
              activeItem === item.label ? "bg-purple-100 text-purple-600" : ""
            }`}>
            {item.icon}
            {!isCollapsed && <span className='ml-3'>{item.label}</span>}
          </motion.div>
        ))}
      </nav>

      <div className='mt-8'>
        <div className='flex items-center mb-4'>
          <Paintbrush size={20} className='mr-3' />
          {!isCollapsed && <span>Theme</span>}
        </div>
        {!isCollapsed && (
          <div className='flex space-x-2 mb-4'>
            {themeColors.map((color) => (
              <motion.div
                key={color}
                whileHover={{ scale: 1.2 }}
                className='w-6 h-6 rounded-full cursor-pointer'
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center'>
            <Moon size={20} className='mr-3' />
            {!isCollapsed && <span>Dark mode</span>}
          </div>
          <Switch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className='flex items-center cursor-pointer'>
          <ChevronDown size={20} className='mr-3' />
          {!isCollapsed && <span>Collapsed</span>}
        </motion.div>
      </div>

      <div className='mt-8'>
        {["Settings", "Help center"].map((item, index) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center p-3 rounded-lg cursor-pointer mb-2'>
            {index === 0 ? <Settings size={20} /> : <HelpCircle size={20} />}
            {!isCollapsed && <span className='ml-3'>{item}</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
