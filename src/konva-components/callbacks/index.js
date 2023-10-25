/**
 * CanvasAPI is a way to expose CanvasRenderingContext2D
 * 
 * @param {this} ctx - refers to Konva.Shape's exposed sceneFunc(tion) itself
 * @param {Object} shape - refers to Konva.Shape object itself
 */
export function CanvasAPI(Konva〵Shape〵Rect, ctx, shape){

    /* console.log(this === shape) */// # true

    // DEV_NOTE # use the shape as reference to current Konva.Shape and set its attributes as if done during its initialisation 
    shape.setAttrs({
        width: 400,
        height: 200,
        stroke: '#ff0000', 
        strokeWidth: 20
    })

    Konva〵Shape〵Rect.setAttrs({
        ...Konva〵Shape〵Rect.getAttrs()
        ,
        ...shape.getClientRect()
    })
    const [syncWidth, syncHeight] = [(Konva〵Shape〵Rect.x() + Konva〵Shape〵Rect.width() / 2), (Konva〵Shape〵Rect.y() + Konva〵Shape〵Rect.height() / 2)]

    /** Snippet source {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasAPI2D/arc } */
    ctx.beginPath();
    ctx.arc(syncWidth, syncHeight, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#ff0000';
    ctx.fill()
    ctx.stroke();

    return this;

}