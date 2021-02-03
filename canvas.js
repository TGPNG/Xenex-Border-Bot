const { createCanvas, Image } = require("canvas");

module.exports = {
    async createSingleCanvas() {
      try {
        const canvas = createCanvas(750, 1000);
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.src = `./chara1.png`; // chara img path here
        const border = new Image();
        // border.src = './temp.png';
        border.src = `./border.png`; // border image path here
        const borderCanvas = createCanvas(750, 1000);
        const borderCtx = borderCanvas.getContext("2d");
        borderCtx.drawImage(
          border,
          0,
          0,
          borderCanvas.width,
          borderCanvas.height
        );
        borderCtx.globalCompositeOperation = "source-in";
        borderCtx.fillStyle = "red"; // color here
        borderCtx.fillRect(0, 0, borderCanvas.width, borderCanvas.height);
        if (image.complete) {
          ctx.drawImage(image, 30, 20, canvas.width, canvas.height);
          ctx.drawImage(borderCanvas, 30, 20, canvas.width - 30, canvas.height);
          return canvas;
        }
        return;
      } catch (err) {
        console.log(err);
        return;
      }
    },
}