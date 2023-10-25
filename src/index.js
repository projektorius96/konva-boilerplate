import '@gloch96/typed-getters';
import { Stage, Layer, Group, Node, Shape, Rect } from './konva-components/index.js';
import { CanvasAPI } from './konva-components/callbacks/index.js';
export default void function(){

    const 
        Default = Symbol('Default'),
        Konva〵Node〵Defaults = new Node({
            name: `${Default.isSymbol?.description}-${Node.name}`,
            container: document.getElementById('app'),
            width: window.innerWidth * 0.98,
                x: 10,
            height: window.innerHeight * 0.97,
                y: 10,
        })
        ,
        Konva〵Shape〵Rect = new Rect({
            strokeWidth: 20,
            stroke: 'black',
        })
        ,
        Konva〵Stage = new Stage({
            ...Konva〵Node〵Defaults,
        })
        .add( 
            new Layer({name: `${Default.isSymbol?.description}-${Layer.name}`, draggable: true})
            .add(
                new Group({
                    name: `${Default.isSymbol?.description}-${Group.name}`,
                    x: innerWidth/6,
                    y: innerHeight/6,
                })
                .add(
                    Konva〵Shape〵Rect,
                    new Shape({name: `${Default.isSymbol?.description}-${Shape.name}`, sceneFunc: function(...args){
                        CanvasAPI.call(this, Konva〵Shape〵Rect, ...args)
                    }})
                )
            )
    )
    ,
    Konva〵Layers = Konva〵Stage.getLayers()
    ;

    const Konva〵Shape〵Rect〵DefaultStroke = Konva〵Shape〵Rect.stroke();
    if (Konva〵Layers.length){
        Konva〵Layers.at(0)
        .on('dragmove', ()=>{
            Konva〵Shape〵Rect.stroke('blue')
        })
        .on('dragend', ()=>{
            Konva〵Shape〵Rect.stroke(Konva〵Shape〵Rect〵DefaultStroke)
        })
    }
        
}()