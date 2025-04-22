
import React from 'react';
import { Event } from '@/types/event';
import EventList from '@/components/EventList';

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

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus Events</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover upcoming hackathons and technical events, both on and off campus.
          </p>
        </header>
        <main>
          <EventList events={sampleEvents} />
        </main>
      </div>
    </div>
  );
};

export default Index;
