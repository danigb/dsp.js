
var DSPJS = {
  DSP: require("./dsp"),
  DFT: require("./dft"),
  FFT: require("./fft"),
  RFFT: require("./rfft"),
  Sampler: require("./sampler"),
  Oscillator: require("./oscillator"),
  ADSR: require("./adsr"),
  IIRFilter: require("./filter-iir"),
  IIRFilter2: require("./filter-iir2"),
  WindowFunction: require("./window-function"),
  sinh: require("./sinh"),
  Biquad: require("./filter-biquad"),
  GraphicalEq: require("./eq-graphical"),
  MultiDelay: require("./delay-multi"),
  SingleDelay: require("./delay-single"),
  Reverb: require("./reverb")
};

if (typeof module === "object" && module.exports) module.exports = DSPJS;
if (typeof window !== "undefined") {
  console.log("JODER", window)
  Object.keys(DSPJS).forEach(function (k) {
    window[k] = DSPJS[k];
    console.log("EXPORT", k);
  });
}
