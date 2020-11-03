const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    start () {
        // init logic
        // this.label.string = this.text;

        // 物理システムを有効にする.
        cc.director.getPhysics3DManager().enabled = true;
    }
}
