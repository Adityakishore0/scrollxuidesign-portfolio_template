import { useEffect, useCallback } from "react";
import { playSound } from "@/lib/sound-engine";
import { dropLeatherSound } from "@/lib/drop-leather";
import { switchOffSound } from "@/lib/switch-off";

interface UseModalOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

export function useModal(
  isOpen: boolean,
  setOpen: (value: boolean) => void,
  options?: UseModalOptions
) {
  const onOpen = options?.onOpen;
  const onClose = options?.onClose;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const open = useCallback(() => {
    setOpen(true);

    setTimeout(() => {
      playSound(dropLeatherSound.dataUri, { volume: 0.2 }).catch(() => {});
    }, 80);

    onOpen?.();
  }, [setOpen, onOpen]);

  const close = useCallback(() => {
    setOpen(false);

    setTimeout(() => {
      playSound(switchOffSound.dataUri, { volume: 0.2 }).catch(() => {});
    }, 60);

    onClose?.();
  }, [setOpen, onClose]);

  return { open, close };
}