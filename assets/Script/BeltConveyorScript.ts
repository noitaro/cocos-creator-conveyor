const {ccclass, property} = cc._decorator;

@ccclass
export default class BeltConveyorScript extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    @property(cc.Vec3)
    impulse: cc.Vec3 = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        const collider = this.getComponent(cc.Collider3D);
        collider.on('collision-stay', this.onCollision, this);
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

        const rigidBody = event.otherCollider.node.getComponent(cc.RigidBody3D);
        rigidBody.applyForce(this.impulse, cc.v3(0, 0, 0));
        // rigidBody.applyImpulse(this.impulse, cc.v3(0, 0, 0));
    }
}
