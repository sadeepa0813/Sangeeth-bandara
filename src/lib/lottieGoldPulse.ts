// A small, hand-authored Lottie animation: a soft gold ring pulsing around a
// glowing core. Used as an animated "mark" on the nav and the auth card.
const lottieGoldPulse = {
  v: '5.9.6',
  fr: 30,
  ip: 0,
  op: 90,
  w: 200,
  h: 200,
  nm: 'gold-pulse',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'ring',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [85] },
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 45, s: [30] },
            { t: 90, s: [85] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [78, 78, 100] },
            { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 45, s: [116, 116, 100] },
            { t: 90, s: [78, 78, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          nm: 'group',
          it: [
            { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [110, 110] }, nm: 'ellipse' },
            { ty: 'st', c: { a: 0, k: [0.86, 0.71, 0.4, 1] }, o: { a: 0, k: 90 }, w: { a: 0, k: 3 }, nm: 'stroke' },
            { ty: 'fl', c: { a: 0, k: [0.86, 0.71, 0.4, 0.12] }, o: { a: 0, k: 100 }, nm: 'fill' },
            { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'core',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [68, 68, 100] },
            { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 45, s: [100, 100, 100] },
            { t: 90, s: [68, 68, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          nm: 'group',
          it: [
            { ty: 'el', p: { a: 0, k: [0, 0] }, s: { a: 0, k: [46, 46] }, nm: 'ellipse' },
            { ty: 'fl', c: { a: 0, k: [0.96, 0.83, 0.52, 1] }, o: { a: 0, k: 100 }, nm: 'fill' },
            { ty: 'tr', p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
    },
  ],
}

export default lottieGoldPulse
