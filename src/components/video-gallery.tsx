
export default function VideoGallery() {
  const videos = ['/video1.mp4', '/video2.mp4'];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
      {videos.map((videoSrc, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg border aspect-video">
          <video
            src={videoSrc}
            controls
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
