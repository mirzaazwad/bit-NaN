import { useState } from "react";
import { API_ROUTES } from "../../../api/apiRoutes";

export const useChat = (id:string|undefined) => {
  const [rawMessage, setRawMessage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = async () => {
    setRawMessage("");
    setLoading(true);
    try {
      const fetchResult = await fetch(API_ROUTES.forum.model.generate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        body: JSON.stringify({ prompt }),
      });

      const reader = fetchResult.body!.getReader();
      const dec = new TextDecoder();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const strval = dec.decode(value, { stream: true });
        const filteredStrval = strval.replace(",", "").trim();
        if (filteredStrval.startsWith("[") && !filteredStrval.endsWith("]")) {
          continue;
        } else if (
          !filteredStrval.startsWith("[") &&
          filteredStrval.endsWith("]")
        ) {
          continue;
        }
        if (filteredStrval.includes(",")) {
          setRawMessage(
            (rawMessage) => rawMessage + JSON.parse(`[${filteredStrval}]`)
          );
        } else if (filteredStrval) {
          setRawMessage(
            (rawMessage) => rawMessage + JSON.parse(filteredStrval)
          );
        }
      }
    } catch (error: any) {
      setError("Internal Server Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    rawMessage,
    setPrompt,
    prompt,
    loading,
    openModal,
    setOpenModal,
    error,
    setError
  };
};
