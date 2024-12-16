"use client";

import { useEffect, useState } from "react";
import {Button, Modal, Placeholder} from "@telegram-apps/telegram-ui";
import {
    ModalHeader
} from "@telegram-apps/telegram-ui/dist/components/Overlays/Modal/components/ModalHeader/ModalHeader";
// import Modal from "@/components/Modal/Modal";


const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    if(!isMounted){
        return null;
    }

  return (
    <>

    </>
  );
};

export default ModalProvider;