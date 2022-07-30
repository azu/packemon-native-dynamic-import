const main = async () => {
  const pkgDir = await import('pkg-dir');
  console.log(await pkgDir.packageDirectory());
};

main();
//# sourceMappingURL=index.mjs.map
