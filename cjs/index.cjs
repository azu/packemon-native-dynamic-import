'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null);

  if (e) {
    for (const k in e) {
      if (k !== 'default') {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }

  n.default = e;
  return Object.freeze(n);
}

const main = async () => {
  const pkgDir = await Promise.resolve().then(() => /*#__PURE__*/_interopNamespace(require('pkg-dir')));
  console.log(await pkgDir.packageDirectory());
};

main();
//# sourceMappingURL=index.cjs.map
