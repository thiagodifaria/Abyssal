import React from 'react';

const supportsAutomaticPlayback = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false;
  }

  const motionPreference =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const connection =
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;
  const deviceMemory = navigator.deviceMemory;

  return (
    !motionPreference &&
    !(connection && connection.saveData) &&
    (!deviceMemory || deviceMemory > 4)
  );
};

const LazyVideo = ({
  autoPlay = false,
  releaseOnExit = true,
  src,
  ...videoProps
}) => {
  const videoRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [canAutoPlay, setCanAutoPlay] = React.useState(false);

  React.useEffect(() => {
    setCanAutoPlay(supportsAutomaticPlayback());
  }, []);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          return;
        }

        setIsVisible(false);
        video.pause();

        if (releaseOnExit) {
          video.removeAttribute('src');
          video.load();
          setIsLoaded(false);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();

      if (releaseOnExit) {
        video.removeAttribute('src');
        video.load();
      }
    };
  }, [releaseOnExit, src]);

  React.useEffect(() => {
    if (isVisible && (!autoPlay || canAutoPlay)) {
      setIsLoaded(true);
    }
  }, [autoPlay, canAutoPlay, isVisible]);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const updatePlayback = () => {
      if (
        document.hidden ||
        !isVisible ||
        !isLoaded ||
        !autoPlay ||
        !canAutoPlay
      ) {
        video.pause();
        return;
      }

      video.play().catch(() => {});
    };

    const handleVisibilityChange = () => updatePlayback();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    updatePlayback();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [autoPlay, canAutoPlay, isLoaded, isVisible]);

  return (
    <video
      {...videoProps}
      ref={videoRef}
      src={isLoaded ? src : undefined}
      muted
      autoPlay={false}
      preload="none"
    />
  );
};

export default React.memo(LazyVideo);
