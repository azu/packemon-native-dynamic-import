"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main = async () => {
    const pkgDir = await import("pkg-dir");
    console.log(await pkgDir.packageDirectory());
};
main();
