

const { ccclass, property } = cc._decorator;

@ccclass
export default class PersistNode extends cc.Component {

    onLoad() {
        cc.game.addPersistRootNode(this.node);
        cc.game.on(cc.game.EVENT_SHOW, this.onShow, this);
        cc.game.on(cc.game.EVENT_HIDE, this.onHide, this);
    }

    backHome() {}

    onViewShow(event: { node: cc.Node }) {
        console.log(event.node.name);
    }

    onViewHidden(event: { node: cc.Node }) {
        
    }

    onDestroy() {

    }

   

    onShow() {}

    onHide() {
    }

    start() {
        
    }

    onLoadingSuccess() {}

    onGameStart() {}
}