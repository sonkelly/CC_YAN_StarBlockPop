
const { ccclass, property } = cc._decorator;
@ccclass
export default class PopupBase extends cc.Component {

    @property({ type: cc.Node }) container: cc.Node | null = null;

    close() {
        if (this.container) {
            this.container.active = false;
        }

    }

    open() {
        if (this.container) {
            this.container.active = true;
        }
    }

    protected onLoad(): void {
        this._tweenShowPopup = cc.tween(this.container).to(0.2, { opacity: 255 });
        this._tweenClosePopup = cc.tween(this.container).to(0.2, { opacity: 0 });
    }

    _tweenShowPopup: cc.Tween | null = null;
    _tweenClosePopup: cc.Tween | null = null;
    openWithEffect(): void {
        if (this.container) {
            this.container.active = true;
            this.container.opacity = 0;
            if (!this._tweenShowPopup) {
                this._tweenShowPopup = cc.tween(this.container).to(0.2, { opacity: 255 });
            }
            this._tweenShowPopup.start();
        }
    }

    closeWithEffect(): void {
        if (!this._tweenClosePopup) {
            this._tweenClosePopup = cc.tween(this.container).to(0.2, { opacity: 0 });
        }
        this._tweenClosePopup.call(() => {
            this.container.active = false;
        }).start();
    }
}
