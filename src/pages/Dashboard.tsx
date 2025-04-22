import React from 'react';
import { Event } from '@/types/event';
import EventList from '@/components/EventList';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/DashboardSidebar';

// Sample events data (in a real app, this would come from an API)
const sampleEvents: Event[] = [
  {
    id: '1',
    title: 'Campus Hackathon 2025',
    description: 'Join us for 24 hours of coding, innovation, and fun! Great prizes to be won.',
    type: 'hackathon',
    location: 'on-campus',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
  },
  {
    id: '2',
    title: 'AI Workshop Series',
    description: 'Learn about the latest developments in artificial intelligence and machine learning.',
    type: 'technical',
    location: 'on-campus',
    date: 'April 1, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
  },
  {
    id: '3',
    title: 'Regional Code Festival',
    description: 'A weekend of coding challenges, workshops, and networking with industry experts.',
    type: 'hackathon',
    location: 'off-campus',
    date: 'May 20, 2025',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
  },
];

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">My Events Dashboard</h1>
              <p className="mt-2 text-gray-600">Manage and track your events</p>
            </header>
            <EventList events={sampleEvents} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
