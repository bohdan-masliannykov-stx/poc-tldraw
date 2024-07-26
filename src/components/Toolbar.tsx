import { useEffect } from "react";
import { useTools, track, DefaultToolbar } from "tldraw";
import { useEditor } from "@tldraw/editor";

export const Toolbar = track(() => {
  const editor = useEditor();
  const tools = useTools();

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key) {
        case "b": {
          editor.setCurrentTool("brush");
          break;
        }
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div className="custom-layout" style={{ zIndex: 1, position: "absolute" }}>
      <div className="custom-toolbar">
        <button
          className="custom-button"
          data-isactive={editor.getCurrentToolId() === "brush"}
          onClick={() => editor.setCurrentTool("brush")}
        >
          Pencil
        </button>
        <button
          className="custom-button"
          data-isactive={editor.getCurrentToolId() === "eraser"}
          onClick={() => editor.setCurrentTool("eraser")}
        >
          Eraser
        </button>
      </div>
    </div>
  );
});
