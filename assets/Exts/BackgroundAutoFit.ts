const { ccclass, property } = cc._decorator;

@ccclass
export default class BackgroundAutoFit extends cc.Component {

    @property({ type: cc.SpriteFrame }) desktopBg: cc.SpriteFrame = null;
    @property({ type: cc.SpriteFrame }) mobileBg: cc.SpriteFrame = null;
    @property() landscapeThreshold: number = 1.2;

    private _sprite: cc.Sprite = null;

    onLoad() {
        this._sprite = this.getComponent(cc.Sprite);
        if (!this._sprite) {
            return;
        }
        this.applyBackground();
        cc.view.on("canvas-resize", this.applyBackground, this);
    }

    onDestroy() {
        cc.view.off("canvas-resize", this.applyBackground, this);
    }

    private applyBackground = () => {
        if (!this._sprite) return;
        debugger
        const winSize = cc.winSize;
        const aspect = winSize.width / winSize.height;
        let targetFrame: cc.SpriteFrame = null;
        if (aspect >= this.landscapeThreshold) {
            targetFrame = this.desktopBg || this.mobileBg;
        } else {
            targetFrame = this.mobileBg || this.desktopBg;
        }

        if (!targetFrame) {
            return;
        }

        this._sprite.spriteFrame = targetFrame;
        const texSize = targetFrame.getOriginalSize();
        if (texSize.width === 0 || texSize.height === 0) return;
        const scaleX = winSize.width / texSize.width;
        const scaleY = winSize.height / texSize.height;
        const scale = Math.max(scaleX, scaleY);
        this.node.setScale(scale, scale);
        this.node.setPosition(cc.v2(0, 0));
    }
}
