import {
  RecordProps,
  TLBaseShape,
  T,
  TLUnknownShape,
  Geometry2d,
  Rectangle2d,
  ShapeUtil,
  HTMLContainer,
} from "tldraw";

type IBrushShape = TLBaseShape<
  "brush",
  {
    w: number;
    h: number;
  }
>;

class BrushShapeUtil extends ShapeUtil<IBrushShape> {
  static override type = "brush" as const;
  static override props: RecordProps<IBrushShape> = {
    w: T.number,
    h: T.number,
  };

  getDefaultProps(): any {} // read

  /**
   * used to tell library box boundaries
   *
   * @param {TLUnknownShape} shape
   * @return {*}  {Geometry2d}
   * @memberof BrushShapeUtil
   */
  getGeometry(shape: TLUnknownShape): Geometry2d {
    // todo change widht & height from shape props
    return new Rectangle2d({
      width: 100,
      height: 100,
      isFilled: true,
    });
  }

  /**
   * return HTML structure
   *
   * @param {TLUnknownShape} shape
   * @memberof BrushShapeUtil
   */
  component(shape: IBrushShape) {
    return (
      <HTMLContainer style={{ backgroundColor: "#efefef" }}>fake</HTMLContainer>
    );
  }

  /**
   * used for showing blue outline
   *
   * @param {TLUnknownShape} shape
   * @memberof BrushShapeUtil
   */
  indicator(shape: TLUnknownShape) {}
}

export { BrushShapeUtil };
