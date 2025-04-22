
import React from 'react';
import { Event } from '@/types/event';
import EventList from '@/components/EventList';
import { SidebarProvider } from '@/components/ui/sidebar';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <header className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="mt-2 text-gray-600">Manage all events</p>
              </div>
              <Button>Create New Event</Button>
            </header>
            <EventList events={[]} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
