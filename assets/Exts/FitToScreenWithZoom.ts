const { ccclass, property } = cc._decorator;

@ccclass
export default class FitToScreenWithZoom extends cc.Component {
    @property(cc.Camera)
    persistCamera: cc.Camera = null; 

    onEnable() {
        this.updateNodeSize();

        cc.view.setResizeCallback(() => this.updateNodeSize());
        window.addEventListener("orientationchange", () => {
            setTimeout(() => this.updateNodeSize(), 300);
        });
    }


    updateNodeSize() {
        const frame = cc.view.getFrameSize();

        // Lấy Canvas trong scene hiện tại
        const canvasNode = cc.find("Canvas");
        if (!canvasNode) {
            cc.warn("[FitToScreenWithZoom] Không tìm thấy Canvas!");
            return;
        }

        const canvas = canvasNode.getComponent(cc.Canvas);
        const design = canvas.designResolution;

        // Tính tỉ lệ thật giữa frame và design
        const scaleX = frame.width / design.width;
        const scaleY = frame.height / design.height;

        // Xác định realScale theo chế độ fit hiện tại
        let realScale = 1;
        if (canvas.fitWidth && canvas.fitHeight) {
            realScale = Math.min(scaleX, scaleY);
        } else if (canvas.fitWidth) {
            realScale = scaleX;
        } else if (canvas.fitHeight) {
            realScale = scaleY;
        } else {
            realScale = scaleX; // fallback
        }

        // Kích thước world (đã bù zoom)
        const widthInWorld = (frame.width / realScale) / this.persistCamera.zoomRatio;
        const heightInWorld = (frame.height / realScale) / this.persistCamera.zoomRatio;

        // Cập nhật node
        this.node.setContentSize(widthInWorld, heightInWorld);
        this.node.setPosition(this.persistCamera.node.position);

        cc.log(
            `[FitToScreenWithZoom] Scene=${cc.director.getScene().name} | fitW=${canvas.fitWidth} | fitH=${canvas.fitHeight} | scale=${realScale.toFixed(3)} | zoom=${this.persistCamera.zoomRatio}`
        );
    }

    onDestroy() {
        cc.view.setResizeCallback(null);
        window.removeEventListener("orientationchange", this.updateNodeSize);
    }

}
