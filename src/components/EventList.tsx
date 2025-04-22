
import React, { useState } from 'react';
import { Event, EventType, EventLocation } from '@/types/event';
import EventCard from './EventCard';
import { Button } from '@/components/ui/button';

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');
  const [selectedLocation, setSelectedLocation] = useState<EventLocation | 'all'>('all');

  const filteredEvents = events.filter(event => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesLocation = selectedLocation === 'all' || event.location === selectedLocation;
    return matchesType && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Event Type</h3>
          <div className="flex gap-2">
            <Button
              variant={selectedType === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedType('all')}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={selectedType === 'hackathon' ? 'default' : 'outline'}
              onClick={() => setSelectedType('hackathon')}
              size="sm"
            >
              Hackathons
            </Button>
            <Button
              variant={selectedType === 'technical' ? 'default' : 'outline'}
              onClick={() => setSelectedType('technical')}
              size="sm"
            >
              Technical
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Location</h3>
          <div className="flex gap-2">
            <Button
              variant={selectedLocation === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedLocation('all')}
              size="sm"
            >
              All
            </Button>
            <Button
              variant={selectedLocation === 'on-campus' ? 'default' : 'outline'}
              onClick={() => setSelectedLocation('on-campus')}
              size="sm"
            >
              On Campus
            </Button>
            <Button
              variant={selectedLocation === 'off-campus' ? 'default' : 'outline'}
              onClick={() => setSelectedLocation('off-campus')}
              size="sm"
            >
              Off Campus
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
