'use client';
import Autoplay from 'embla-carousel-autoplay';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function VideoGallery() {
  const videos = [
    '/vid (1).mp4',
    '/vid (2).mp4',
    '/vid (3).mp4',
    '/vid (4).mp4',
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {videos.map((videoSrc, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="rounded-lg overflow-hidden shadow-lg border aspect-video">
                <video
                  src={videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="sm:inline-flex" />
      <CarouselNext className="sm:inline-flex" />
    </Carousel>
  );
}
