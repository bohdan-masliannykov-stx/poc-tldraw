import { useState } from "react";
import "./App.css";
import {
  Editor,
  Tldraw,
  TLEditorComponents,
  TLUiOverrides,
  useTldrawUiComponents,
  useRelevantStyles,
  DefaultStylePanel,
  DefaultStylePanelContent,
} from "tldraw";
import { Toolbar } from "./components/Toolbar";
import { BrushShapeUtil } from "./Brushes/Brush.util.tsx";
import { BrushTool } from "./Brushes/Brush.tool";

const components: TLEditorComponents = {};

const CustomUI = () => {
  const { StylePanel, ZoomMenu } = useTldrawUiComponents();

  return (
    <>
      <Toolbar />
      {StylePanel && <StylePanel />}
      {/* {ZoomMenu && <ZoomMenu />} */}
    </>
  );
};

const uiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    // Create a tool item in the ui's context.
    tools.brush = {
      id: "brush",
      icon: "brush-icon",
      label: "Brushes",
      kbd: "b",
      onSelect: () => {
        editor.setCurrentTool("brush");
      },
    };
    return tools;
  },
};

function CustomStylePanel() {
  // const editor = useEditor();
  const styles = useRelevantStyles();
  console.log("styles: ", styles);
  return (
    <div style={{ padding: "40px" }}>
      <DefaultStylePanel>
        <div style={{ padding: "20px" }}>Hello From Custom Panel</div>
      </DefaultStylePanel>
    </div>
  );
}

const TlDrawConfig = {
  tools: [BrushTool],
  shapeUtils: [BrushShapeUtil],
  overrides: uiOverrides,
};

const App = () => {
  const [editor, setEditor] = useState<Editor | null>(null);

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        tools={TlDrawConfig.tools}
        shapeUtils={TlDrawConfig.shapeUtils}
        overrides={TlDrawConfig.overrides}
        components={{ StylePanel: CustomStylePanel }}
        hideUi
        persistenceKey="custom-components-example"
        onMount={(editor) => setEditor(editor)}
      >
        <CustomUI />
      </Tldraw>
    </div>
  );
};

export default App;
