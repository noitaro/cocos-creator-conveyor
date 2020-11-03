const {ccclass, property} = cc._decorator;

@ccclass
export default class InputScript extends cc.Component {

    @property(cc.Node)
    KonnbeaObject: cc.Node = null;

    @property(cc.Prefab)
    Obj: cc.Prefab = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        setInterval(() => this.addPrefab(), 1000);

        // const component = new cc.Scheduler();
        // // 4秒後にカウントを開始し、3秒ごとに1回コールバックを実行し、10 + 1回実行します。
        // var interval = 3;
        // var repeat = 10;
        // var delay = 4;
        // component.schedule(this.addPrefab, this, interval, repeat, delay);
        // this.addPrefab();
    }

    addPrefab() {
        // cc.log("addPrefab");
        const prefab = cc.instantiate(this.Obj);
        prefab.setPosition(this.node.parent.getPosition());
        this.KonnbeaObject.addChild(prefab);
    }

    // update (dt) {}
}
