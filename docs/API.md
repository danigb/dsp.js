## Classes

<dl>
<dt><a href="#MultiDelay">MultiDelay</a></dt>
<dd></dd>
<dt><a href="#SingleDelay">SingleDelay</a></dt>
<dd></dd>
<dt><a href="#DFT">DFT</a></dt>
<dd></dd>
<dt><a href="#FFT">FFT</a></dt>
<dd></dd>
<dt><a href="#Reverb">Reverb</a></dt>
<dd></dd>
<dt><a href="#RFFT">RFFT</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#DSP">DSP</a></dt>
<dd><p>DSP is an object which contains general purpose utility functions and constants</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#GraphicalEq">GraphicalEq(sampleRate)</a></dt>
<dd><p>Create a Graphical Equalizer</p>
<p> Implementation of a graphic equalizer with a configurable bands-per-octave
 and minimum and maximum frequencies</p>
<p> Created by Ricard Marxer <a href="&#x6d;&#97;&#x69;&#x6c;&#x74;&#111;&#x3a;&#101;&#109;&#97;&#105;&#x6c;&#64;&#x72;&#x69;&#x63;&#x61;&#114;&#100;&#109;&#x61;&#x72;&#120;&#101;&#114;&#x2e;&#x63;&#111;&#109;">&#101;&#109;&#97;&#105;&#x6c;&#64;&#x72;&#x69;&#x63;&#x61;&#114;&#100;&#109;&#x61;&#x72;&#120;&#101;&#114;&#x2e;&#x63;&#111;&#109;</a> on 2010-05-23.
 Copyright 2010 Ricard Marxer. All rights reserved.</p>
</dd>
<dt><a href="#Oscillator">Oscillator(type, frequency, amplitude, bufferSize, sampleRate)</a></dt>
<dd><p>Oscillator class for generating and modifying signals</p>
</dd>
<dt><a href="#sinh">sinh(num)</a></dt>
<dd><p>Returns the hyperbolic sine of the number, defined as (exp(number) - exp(-number))/2
version: 1004.2314
discuss at: <a href="http://phpjs.org/functions/sinh">http://phpjs.org/functions/sinh</a>
original by: Onno Marsman</p>
</dd>
</dl>

<a name="MultiDelay"></a>

## MultiDelay
**Kind**: global class  

* [MultiDelay](#MultiDelay)
    * [new MultiDelay(maxDelayInSamplesSize, delayInSamples, masterVolume, delayVolume)](#new_MultiDelay_new)
    * [.setDelayInSamples(delayInSamples)](#MultiDelay+setDelayInSamples)
    * [.setMasterVolume(masterVolume)](#MultiDelay+setMasterVolume)
    * [.setDelayVolume(delayVolume)](#MultiDelay+setDelayVolume)
    * [.process(samples)](#MultiDelay+process) ⇒

<a name="new_MultiDelay_new"></a>

### new MultiDelay(maxDelayInSamplesSize, delayInSamples, masterVolume, delayVolume)
MultiDelay effect by Almer Thie (http://code.almeros.com).
Copyright 2010 Almer Thie. All rights reserved.
Example: http://code.almeros.com/code-examples/delay-firefox-audio-api/

This is a delay that feeds it's own delayed signal back into its circular
buffer. Also known as a CombFilter.

Compatible with interleaved stereo (or more channel) buffers and
non-interleaved mono buffers.


| Param | Type | Description |
| --- | --- | --- |
| maxDelayInSamplesSize | <code>Number</code> | Maximum possible delay in samples (size of circular buffer) |
| delayInSamples | <code>Number</code> | Initial delay in samples |
| masterVolume | <code>Number</code> | Initial master volume. Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |
| delayVolume | <code>Number</code> | Initial feedback delay volume. Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="MultiDelay+setDelayInSamples"></a>

### multiDelay.setDelayInSamples(delayInSamples)
Change the delay time in samples.

**Kind**: instance method of <code>[MultiDelay](#MultiDelay)</code>  

| Param | Type | Description |
| --- | --- | --- |
| delayInSamples | <code>Number</code> | Delay in samples |

<a name="MultiDelay+setMasterVolume"></a>

### multiDelay.setMasterVolume(masterVolume)
Change the master volume.

**Kind**: instance method of <code>[MultiDelay](#MultiDelay)</code>  

| Param | Type | Description |
| --- | --- | --- |
| masterVolume | <code>Number</code> | Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="MultiDelay+setDelayVolume"></a>

### multiDelay.setDelayVolume(delayVolume)
Change the delay feedback volume.

**Kind**: instance method of <code>[MultiDelay](#MultiDelay)</code>  

| Param | Type | Description |
| --- | --- | --- |
| delayVolume | <code>Number</code> | Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="MultiDelay+process"></a>

### multiDelay.process(samples) ⇒
Process a given interleaved or mono non-interleaved float value Array and adds the delayed audio.

**Kind**: instance method of <code>[MultiDelay](#MultiDelay)</code>  
**Returns**: A new Float64Array interleaved or mono non-interleaved as was fed to this function.  

| Param | Type | Description |
| --- | --- | --- |
| samples | <code>Array</code> | Array containing Float values or a Float64Array |

<a name="SingleDelay"></a>

## SingleDelay
**Kind**: global class  

* [SingleDelay](#SingleDelay)
    * [new SingleDelay(maxDelayInSamplesSize, delayInSamples, delayVolume)](#new_SingleDelay_new)
    * [.setDelayInSamples(delayInSamples)](#SingleDelay+setDelayInSamples)
    * [.setDelayVolume(delayVolume)](#SingleDelay+setDelayVolume)
    * [.process(samples)](#SingleDelay+process) ⇒

<a name="new_SingleDelay_new"></a>

### new SingleDelay(maxDelayInSamplesSize, delayInSamples, delayVolume)
SingleDelay effect by Almer Thie (http://code.almeros.com).
Copyright 2010 Almer Thie. All rights reserved.
Example: See usage in Reverb class

This is a delay that does NOT feeds it's own delayed signal back into its
circular buffer, neither does it return the original signal. Also known as
an AllPassFilter(?).

Compatible with interleaved stereo (or more channel) buffers and
non-interleaved mono buffers.


| Param | Type | Description |
| --- | --- | --- |
| maxDelayInSamplesSize | <code>Number</code> | Maximum possible delay in samples (size of circular buffer) |
| delayInSamples | <code>Number</code> | Initial delay in samples |
| delayVolume | <code>Number</code> | Initial feedback delay volume. Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="SingleDelay+setDelayInSamples"></a>

### singleDelay.setDelayInSamples(delayInSamples)
Change the delay time in samples.

**Kind**: instance method of <code>[SingleDelay](#SingleDelay)</code>  

| Param | Type | Description |
| --- | --- | --- |
| delayInSamples | <code>Number</code> | Delay in samples |

<a name="SingleDelay+setDelayVolume"></a>

### singleDelay.setDelayVolume(delayVolume)
Change the return signal volume.

**Kind**: instance method of <code>[SingleDelay](#SingleDelay)</code>  

| Param | Type | Description |
| --- | --- | --- |
| delayVolume | <code>Number</code> | Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="SingleDelay+process"></a>

### singleDelay.process(samples) ⇒
Process a given interleaved or mono non-interleaved float value Array and
returns the delayed audio.

**Kind**: instance method of <code>[SingleDelay](#SingleDelay)</code>  
**Returns**: A new Float64Array interleaved or mono non-interleaved as was fed to this function.  

| Param | Type | Description |
| --- | --- | --- |
| samples | <code>Array</code> | Array containing Float values or a Float64Array |

<a name="DFT"></a>

## DFT
**Kind**: global class  

* [DFT](#DFT)
    * [new DFT(bufferSize, sampleRate)](#new_DFT_new)
    * [.forward(buffer)](#DFT+forward) ⇒

<a name="new_DFT_new"></a>

### new DFT(bufferSize, sampleRate)
DFT is a class for calculating the Discrete Fourier Transform of a signal.


| Param | Type | Description |
| --- | --- | --- |
| bufferSize | <code>Number</code> | The size of the sample buffer to be computed |
| sampleRate | <code>Number</code> | The sampleRate of the buffer (eg. 44100) |

<a name="DFT+forward"></a>

### dfT.forward(buffer) ⇒
Performs a forward transform on the sample buffer.
Converts a time domain signal to frequency domain spectra.

**Kind**: instance method of <code>[DFT](#DFT)</code>  
**Returns**: The frequency spectrum array  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Array</code> | The sample buffer |

<a name="FFT"></a>

## FFT
**Kind**: global class  

* [FFT](#FFT)
    * [new FFT(bufferSize, sampleRate)](#new_FFT_new)
    * [.forward(buffer)](#FFT+forward) ⇒

<a name="new_FFT_new"></a>

### new FFT(bufferSize, sampleRate)
FFT is a class for calculating the Discrete Fourier Transform of a signal
with the Fast Fourier Transform algorithm.


| Param | Type | Description |
| --- | --- | --- |
| bufferSize | <code>Number</code> | The size of the sample buffer to be computed. Must be power of 2 |
| sampleRate | <code>Number</code> | The sampleRate of the buffer (eg. 44100) |

<a name="FFT+forward"></a>

### ffT.forward(buffer) ⇒
Performs a forward transform on the sample buffer.
Converts a time domain signal to frequency domain spectra.

**Kind**: instance method of <code>[FFT](#FFT)</code>  
**Returns**: The frequency spectrum array  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Array</code> | The sample buffer. Buffer Length must be power of 2 |

<a name="Reverb"></a>

## Reverb
**Kind**: global class  

* [Reverb](#Reverb)
    * [new Reverb(maxDelayInSamplesSize, delayInSamples, masterVolume, mixVolume, delayVolume, dampFrequency)](#new_Reverb_new)
    * [.setDelayInSamples(delayInSamples)](#Reverb+setDelayInSamples)
    * [.setMasterVolume(masterVolume)](#Reverb+setMasterVolume)
    * [.setMixVolume(mixVolume)](#Reverb+setMixVolume)
    * [.setDelayVolume(delayVolume)](#Reverb+setDelayVolume)
    * [.setDampFrequency(dampFrequency)](#Reverb+setDampFrequency)
    * [.process(samples)](#Reverb+process) ⇒

<a name="new_Reverb_new"></a>

### new Reverb(maxDelayInSamplesSize, delayInSamples, masterVolume, mixVolume, delayVolume, dampFrequency)
Reverb effect by Almer Thie (http://code.almeros.com).
Copyright 2010 Almer Thie. All rights reserved.
Example: http://code.almeros.com/code-examples/reverb-firefox-audio-api/

This reverb consists of 6 SingleDelays, 6 MultiDelays and an IIRFilter2
for each of the two stereo channels.

Compatible with interleaved stereo buffers only!


| Param | Type | Description |
| --- | --- | --- |
| maxDelayInSamplesSize | <code>Number</code> | Maximum possible delay in samples (size of circular buffers) |
| delayInSamples | <code>Number</code> | Initial delay in samples for internal (Single/Multi)delays |
| masterVolume | <code>Number</code> | Initial master volume. Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |
| mixVolume | <code>Number</code> | Initial reverb signal mix volume. Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |
| delayVolume | <code>Number</code> | Initial feedback delay volume for internal (Single/Multi)delays. Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |
| dampFrequency | <code>Number</code> | Initial low pass filter frequency. 0 to 44100 (depending on your maximum sampling frequency) |

<a name="Reverb+setDelayInSamples"></a>

### reverb.setDelayInSamples(delayInSamples)
Change the delay time in samples as a base for all delays.

**Kind**: instance method of <code>[Reverb](#Reverb)</code>  

| Param | Type | Description |
| --- | --- | --- |
| delayInSamples | <code>Number</code> | Delay in samples |

<a name="Reverb+setMasterVolume"></a>

### reverb.setMasterVolume(masterVolume)
Change the master volume.

**Kind**: instance method of <code>[Reverb](#Reverb)</code>  

| Param | Type | Description |
| --- | --- | --- |
| masterVolume | <code>Number</code> | Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="Reverb+setMixVolume"></a>

### reverb.setMixVolume(mixVolume)
Change the reverb signal mix level.

**Kind**: instance method of <code>[Reverb](#Reverb)</code>  

| Param | Type | Description |
| --- | --- | --- |
| mixVolume | <code>Number</code> | Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="Reverb+setDelayVolume"></a>

### reverb.setDelayVolume(delayVolume)
Change all delays feedback volume.

**Kind**: instance method of <code>[Reverb](#Reverb)</code>  

| Param | Type | Description |
| --- | --- | --- |
| delayVolume | <code>Number</code> | Float value: 0.0 (silence), 1.0 (normal), >1.0 (amplify) |

<a name="Reverb+setDampFrequency"></a>

### reverb.setDampFrequency(dampFrequency)
Change the Low Pass filter frequency.

**Kind**: instance method of <code>[Reverb](#Reverb)</code>  

| Param | Type | Description |
| --- | --- | --- |
| dampFrequency | <code>Number</code> | low pass filter frequency. 0 to 44100 (depending on your maximum sampling frequency) |

<a name="Reverb+process"></a>

### reverb.process(samples) ⇒
Process a given interleaved float value Array and copies and adds the reverb signal.

**Kind**: instance method of <code>[Reverb](#Reverb)</code>  
**Returns**: A new Float64Array interleaved buffer.  

| Param | Type | Description |
| --- | --- | --- |
| samples | <code>Array</code> | Array containing Float values or a Float64Array |

<a name="RFFT"></a>

## RFFT
**Kind**: global class  
<a name="new_RFFT_new"></a>

### new RFFT(bufferSize, sampleRate)
RFFT is a class for calculating the Discrete Fourier Transform of a signal
with the Fast Fourier Transform algorithm.

This method currently only contains a forward transform but is highly optimized.


| Param | Type | Description |
| --- | --- | --- |
| bufferSize | <code>Number</code> | The size of the sample buffer to be computed. Must be power of 2 |
| sampleRate | <code>Number</code> | The sampleRate of the buffer (eg. 44100) |

<a name="DSP"></a>

## DSP
DSP is an object which contains general purpose utility functions and constants

**Kind**: global variable  

* [DSP](#DSP)
    * [.deinterleave](#DSP.deinterleave) ⇒
    * [.getChannel](#DSP.getChannel) ⇒
    * [.invert(buffer)](#DSP.invert) ⇒
    * [.interleave(left, right)](#DSP.interleave) ⇒
    * [.mixSampleBuffers(sampleBuffer1, sampleBuffer2, negate, volumeCorrection)](#DSP.mixSampleBuffers) ⇒

<a name="DSP.deinterleave"></a>

### DSP.deinterleave ⇒
Converts a stereo-interleaved sample buffer into split-stereo (dual mono) sample buffers

**Kind**: static property of <code>[DSP](#DSP)</code>  
**Returns**: an Array containing left and right channels  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Array</code> | A stereo-interleaved sample buffer |

<a name="DSP.getChannel"></a>

### DSP.getChannel ⇒
Separates a channel from a stereo-interleaved sample buffer

**Kind**: static property of <code>[DSP](#DSP)</code>  
**Returns**: an Array containing a signal mono sample buffer  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Array</code> | A stereo-interleaved sample buffer |
| channel | <code>Number</code> | A channel constant (LEFT, RIGHT, MIX) |

<a name="DSP.invert"></a>

### DSP.invert(buffer) ⇒
Inverts the phase of a signal

**Kind**: static method of <code>[DSP](#DSP)</code>  
**Returns**: The inverted sample buffer  

| Param | Type | Description |
| --- | --- | --- |
| buffer | <code>Array</code> | A sample buffer |

<a name="DSP.interleave"></a>

### DSP.interleave(left, right) ⇒
Converts split-stereo (dual mono) sample buffers into a stereo interleaved sample buffer

**Kind**: static method of <code>[DSP](#DSP)</code>  
**Returns**: The stereo interleaved buffer  

| Param | Type | Description |
| --- | --- | --- |
| left | <code>Array</code> | A sample buffer |
| right | <code>Array</code> | A sample buffer |

<a name="DSP.mixSampleBuffers"></a>

### DSP.mixSampleBuffers(sampleBuffer1, sampleBuffer2, negate, volumeCorrection) ⇒
Helper method (for Reverb) to mix two (interleaved) samplebuffers. It's possible
to negate the second buffer while mixing and to perform a volume correction
on the final signal.

**Kind**: static method of <code>[DSP](#DSP)</code>  
**Returns**: A new Float64Array interleaved buffer.  

| Param | Type | Description |
| --- | --- | --- |
| sampleBuffer1 | <code>Array</code> | Array containing Float values or a Float64Array |
| sampleBuffer2 | <code>Array</code> | Array containing Float values or a Float64Array |
| negate | <code>Boolean</code> | When true inverts/flips the audio signal |
| volumeCorrection | <code>Number</code> | When you add multiple sample buffers, use this to tame your signal ;) |

<a name="GraphicalEq"></a>

## GraphicalEq(sampleRate)
Create a Graphical Equalizer

 Implementation of a graphic equalizer with a configurable bands-per-octave
 and minimum and maximum frequencies

 Created by Ricard Marxer <email@ricardmarxer.com> on 2010-05-23.
 Copyright 2010 Ricard Marxer. All rights reserved.

**Kind**: global function  

| Param | Type |
| --- | --- |
| sampleRate | <code>SampleRate</code> | 

**Example**  
```js
var eq = new GraphicalEq(44100)
```
<a name="Oscillator"></a>

## Oscillator(type, frequency, amplitude, bufferSize, sampleRate)
Oscillator class for generating and modifying signals

**Kind**: global function  
**Contructor**:   

| Param | Type | Description |
| --- | --- | --- |
| type | <code>Number</code> | A waveform constant (eg. DSP.SINE) |
| frequency | <code>Number</code> | Initial frequency of the signal |
| amplitude | <code>Number</code> | Initial amplitude of the signal |
| bufferSize | <code>Number</code> | Size of the sample buffer to generate |
| sampleRate | <code>Number</code> | The sample rate of the signal |


* [Oscillator(type, frequency, amplitude, bufferSize, sampleRate)](#Oscillator)
    * [.setAmp(amplitude)](#Oscillator+setAmp)
    * [.setFreq(frequency)](#Oscillator+setFreq)

<a name="Oscillator+setAmp"></a>

### oscillator.setAmp(amplitude)
Set the amplitude of the signal

**Kind**: instance method of <code>[Oscillator](#Oscillator)</code>  

| Param | Type | Description |
| --- | --- | --- |
| amplitude | <code>Number</code> | The amplitude of the signal (between 0 and 1) |

<a name="Oscillator+setFreq"></a>

### oscillator.setFreq(frequency)
Set the frequency of the signal

**Kind**: instance method of <code>[Oscillator](#Oscillator)</code>  

| Param | Type | Description |
| --- | --- | --- |
| frequency | <code>Number</code> | The frequency of the signal |

<a name="sinh"></a>

## sinh(num)
Returns the hyperbolic sine of the number, defined as (exp(number) - exp(-number))/2
version: 1004.2314
discuss at: http://phpjs.org/functions/sinh
original by: Onno Marsman

**Kind**: global function  

| Param | Type |
| --- | --- |
| num | <code>Number</code> | 

**Example**  
```js
sinh(-0.9834330348825909); // => -1.1497971402636502
```
