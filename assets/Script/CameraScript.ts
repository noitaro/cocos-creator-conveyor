const {ccclass, property} = cc._decorator;

@ccclass
export default class CameraScript extends cc.Component {

    @property(cc.Node)
    Camera: cc.Node = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    startTouchLocation: cc.Vec2 = null;
    startCameraPosition: cc.Vec3 = null;

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START, (event: {type: string, touch: cc.Touch}) => {
            // console.log(event.type, event);
            this.startTouchLocation = event.touch.getLocation();
            this.startCameraPosition = this.Camera.position;
            // this.startTouchLocation = this.Camera.convertTouchToNodeSpaceAR(event.touch);

        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event: {type: string, touch: cc.Touch}) => {
            // console.log(event.type, event);
            const touchLocation = event.touch.getLocation();
            // const touchLocation = this.Camera.convertTouchToNodeSpaceAR(event.touch);

            const newCameraPosition = cc.v3(
                this.startCameraPosition.x + ((touchLocation.x - this.startTouchLocation.x) * 0.01), 
                this.startCameraPosition.y, 
                this.startCameraPosition.z + ((touchLocation.y - this.startTouchLocation.y) * 0.01));
                
            console.log("NewCameraPosition: x=" + newCameraPosition.x + ", y=" + newCameraPosition.y + ", z=" + newCameraPosition.z);
            this.Camera.setPosition(newCameraPosition);

        });
        this.node.on(cc.Node.EventType.TOUCH_END, (event: {type: string, touch: cc.Touch}) => {
            // console.log(event.type, event);

        });
    }

    // update (dt) {}
}
