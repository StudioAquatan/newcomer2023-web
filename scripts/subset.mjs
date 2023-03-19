import { fontRange, targets } from "font-range";
import glob from "glob";

glob.glob("./public/fonts/**/*.woff2", async (err, files) => {
  console.log(files);
  for (const file of files) {
    await fontRange(file, targets.japanese, {
      saveDir: "./public/fonts/optimized",
    });
  }
});
