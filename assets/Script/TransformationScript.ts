const {ccclass, property} = cc._decorator;

@ccclass
export default class TransformationScript extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        const collider = this.getComponent(cc.Collider3D);
        collider.on('trigger-exit', this.onCollision, this);
    }

    // update (dt) {}
    
    onCollision (
        event: { 
            type: string, 
            selfCollider: cc.Collider3D, 
            otherCollider: cc.Collider3D, 
            contacts: []; 
        }) {
        // console.log(event.type, event);

    }
}
