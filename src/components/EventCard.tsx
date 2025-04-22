
import React from 'react';
import { Event } from '@/types/event';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${event.image})` }}
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
          <Badge 
            variant={event.type === 'hackathon' ? 'default' : 'secondary'}
            className="ml-2"
          >
            {event.type}
          </Badge>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <Badge variant="outline" className="mb-3">
          {event.location === 'on-campus' ? 'On Campus' : 'Off Campus'}
        </Badge>
        <p className="text-gray-600 line-clamp-2">{event.description}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 px-4 py-3">
        <button className="text-primary hover:underline font-medium">
          Learn more →
        </button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
