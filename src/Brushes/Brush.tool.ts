import { StateNode, TLStateNodeConstructor } from "@tldraw/editor";
import { Brushing } from "./toolStates/Brushing";
import { Idle } from "./toolStates/Idle";

/** @public */
export class BrushTool extends StateNode {
  static override id = "brush";
  static override initial = "idle";
  static override isLockable = false;
  static override children = (): TLStateNodeConstructor[] => [Idle, Brushing];

  override shapeType = "brush";

  override onExit = () => {
    const drawingState = this.children!["brushing"] as Brushing;
    drawingState.initialShape = undefined;
  };
}
