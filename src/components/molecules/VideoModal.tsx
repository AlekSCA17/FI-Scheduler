/**
 * Video Modal Component
 *
 * Displays a video in a modal overlay with Semestrix styling
 */
import { useEffect, useRef } from "react";
import SvgIcon from "@atoms/SvgIcon";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
  description?: string;
}

export default function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title = "Tutorial",
  description,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl animate-[slideUp_0.3s_ease-out]">
        <div className="rounded-2xl border border-base-300/20 dark:border-white/10 bg-base-100/95 dark:bg-base-dark/95 shadow-2xl backdrop-blur-md overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-base-300/20 dark:border-white/10 px-6 py-4 bg-base-100/50 dark:bg-base-dark/50">
            <div>
              <h3 className="text-xl font-bold text-base-content dark:text-white">
                {title}
              </h3>
              {description && (
                <p className="mt-1 text-sm text-base-content/70 dark:text-white/70">
                  {description}
                </p>
              )}
            </div>

            <button
              onClick={onClose}
              className="group rounded-lg p-2 transition-all duration-200 hover:bg-base-200 dark:hover:bg-white/10"
              aria-label="Cerrar"
            >
              <SvgIcon
                name="x"
                className="h-6 w-6 text-base-content/60 dark:text-white/60 group-hover:text-base-content dark:group-hover:text-white transition-colors"
              />
            </button>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video w-full bg-black">
            <video
              ref={videoRef}
              className="h-full w-full"
              controls
              controlsList="nodownload"
              autoPlay
            >
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>

          {/* Footer (optional actions) */}
          <div className="flex items-center justify-end gap-3 border-t border-base-300/20 dark:border-white/10 px-6 py-4 bg-base-100/50 dark:bg-base-dark/50">
            <button
              onClick={onClose}
              className="rounded-lg bg-primary px-6 py-2.5 font-medium text-primary-content transition-all duration-200 hover:bg-primary/90 dark:bg-accent dark:text-accent-content dark:hover:bg-accent/90 active:scale-95"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
