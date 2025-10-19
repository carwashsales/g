'use client';

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';

type VideoModalProps = {
  children: React.ReactNode;
  videoUrl: string;
};

export default function VideoModal({ children, videoUrl }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
