var sdl = require('node-sdl2')
var ref = require('ref')
var Struct = require('ref-struct')
var ffi = require('ffi')
var libraryFile = require('node-sdl2-gfx-prebuilt')

// Types
var void_type = ref.types.void
var int = ref.types.int
var Uint8 = ref.types.uint8
var string = ref.types.CString
var Uint32 = ref.types.uint32
var float = ref.types.float
var double = ref.types.double
var string = ref.types.CString
var char = ref.types.char
var uchar = ref.types.uchar
var uint = ref.types.uint
var Sint16 = ref.types.short
var SDL_Surface_ptr = ref.refType(sdl.SDL_Surface)
var SDL_Renderer_ptr = ref.refType(sdl.SDL_Renderer)
var int_ptr = ref.refType(int)
var Sint16_ptr = ref.refType(Sint16)
var const_Sint16_ptr = Sint16_ptr
var void_ptr = ref.refType(void_type)
var uchar_ptr = ref.refType(ref.types.uchar)

// SDL2_framerate.h Structs
var FPSmanager = Struct({
  framecount: Uint32,
  rateticks: float,
  baseticks: Uint32,
  lastticks: Uint32,
  rate: Uint32
})
var FPSmanager_ptr = ref.refType(FPSmanager)


var gfx = ffi.Library(libraryFile, {
  // SDL2_rotozoom.h
  rotozoomSurface: [SDL_Surface_ptr, [double, double, int]],
  rotozoomSurfaceXY: [SDL_Surface_ptr, [SDL_Surface_ptr, double, double, double, int]],
  rotozoomSurfaceSize: [void_type, [int, int, double, double, int_ptr, int_ptr]],
  rotozoomSurfaceSizeXY: [void_type, [int, int, double, double, double, int_ptr, int_ptr]],
  zoomSurface: [SDL_Surface_ptr, [SDL_Surface_ptr, double, double, int]],
  zoomSurfaceSize: [void_type, [int, int, double, double, int_ptr, int_ptr]],
  shrinkSurface: [SDL_Surface_ptr, [SDL_Surface_ptr, int, int]],
  rotateSurface90Degrees: [SDL_Surface_ptr, [SDL_Surface_ptr, int]],

  // SDL2_framerate.h
  SDL_initFramerate: [void_type, [FPSmanager_ptr]],
  SDL_setFramerate: [int, [FPSmanager_ptr, Uint32]],
  SDL_getFramerate: [int, [FPSmanager_ptr]],
  SDL_getFramecount: [int, [FPSmanager_ptr]],
  SDL_framerateDelay: [Uint32, [FPSmanager_ptr]],

  // SDL2_gfxPrimitives.h
  pixelColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Uint32]],
  pixelRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],
  hlineColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32]],
  hlineRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Vertical line */

  vlineColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32]],
  vlineRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Rectangle */

  rectangleColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32]],
  rectangleRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Rounded-Corner Rectangle */

  roundedRectangleColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32]],
  roundedRectangleRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Filled rectangle (Box) */

  boxColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32]],
  boxRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16,
    Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Rounded-Corner Filled rectangle (Box) */

  roundedBoxColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32]],
  roundedBoxRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Line */

  lineColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32]],
  lineRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* AA Line */

  aalineColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32]],
  aalineRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Thick Line */
  thickLineColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16,
    Uint8, Uint32]],
  thickLineRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16,
    Uint8, Uint8, Uint8, Uint8, Uint8]],

  /* Circle */

  circleColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32]],
  circleRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Arc */

  arcColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32]],
  arcRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16,
    Uint8, Uint8, Uint8, Uint8]],

  /* AA Circle */

  aacircleColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32]],
  aacircleRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Filled Circle */

  filledCircleColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Uint32]],
  filledCircleRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Ellipse */

  ellipseColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32]],
  ellipseRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* AA Ellipse */

  aaellipseColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32]],
  aaellipseRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Filled Ellipse */

  filledEllipseColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Uint32]],
  filledEllipseRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Pie */

  pieColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16,
    Sint16, Sint16, Uint32]],
  pieRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Filled Pie */

  filledPieColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16,
    Sint16, Sint16, Uint32]],
  filledPieRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16,
    Sint16, Sint16, Uint8, Uint8, Uint8, Uint8]],

  /* Trigon */

  trigonColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32]],
  trigonRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16,
    Uint8, Uint8, Uint8, Uint8]],

  /* AA-Trigon */

  aatrigonColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32]],
  aatrigonRGBA: [int, [SDL_Renderer_ptr,  Sint16, Sint16, Sint16, Sint16, Sint16, Sint16,
    Uint8, Uint8, Uint8, Uint8]],

  /* Filled Trigon */

  filledTrigonColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16, Uint32]],
  filledTrigonRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, Sint16, Sint16, Sint16, Sint16,
    Uint8, Uint8, Uint8, Uint8]],

  /* Polygon */

  polygonColor: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr, int, Uint32]],
  polygonRGBA: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr,
    int, Uint8, Uint8, Uint8, Uint8]],

  /* AA-Polygon */

  aapolygonColor: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr, int, Uint32]],
  aapolygonRGBA: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr,
    int, Uint8, Uint8, Uint8, Uint8]],

  /* Filled Polygon */

  filledPolygonColor: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr, int, Uint32]],
  filledPolygonRGBA: [int, [SDL_Renderer_ptr, const_Sint16_ptr,
    const_Sint16_ptr, int, Uint8, Uint8, Uint8, Uint8]],

  /* Textured Polygon */

  texturedPolygon: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr, int, SDL_Surface_ptr, int, int]],

  /* Bezier */

  bezierColor: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr, int, int, Uint32]],
  bezierRGBA: [int, [SDL_Renderer_ptr, const_Sint16_ptr, const_Sint16_ptr,
    int, int, Uint8, Uint8, Uint8, Uint8]],

  /* Characters/Strings */

  gfxPrimitivesSetFont: [void_type, [void_ptr, Uint32, Uint32]],
  gfxPrimitivesSetFontRotation: [void_type, [Uint32]],
  characterColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, char, Uint32]],
  characterRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, char, Uint8, Uint8, Uint8, Uint8]],
  stringColor: [int, [SDL_Renderer_ptr, Sint16, Sint16, string, Uint32]],
  stringRGBA: [int, [SDL_Renderer_ptr, Sint16, Sint16, string, Uint8, Uint8, Uint8, Uint8]],

  // SDL2_imageFilter.h
    // Detect MMX capability in CPU
  SDL_imageFilterMMXdetect: [int, []],

  // Force use of MMX off (or turn possible use back on)
  SDL_imageFilterMMXoff: [void_type, []],
  SDL_imageFilterMMXon: [void_type, []],

  //
  // All routines return:
  //   0   OK
  //  -1   Error (internal error, parameter error)
  //

  //  SDL_imageFilterAdd: D = saturation255(S1 + S2)
  SDL_imageFilterAdd: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterMean: D = S1/2 + S2/2
  SDL_imageFilterMean: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterSub: D = saturation0(S1 - S2)
  SDL_imageFilterSub: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterAbsDiff: D = | S1 - S2 |
  SDL_imageFilterAbsDiff: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterMult: D = saturation(S1 * S2)
  SDL_imageFilterMult: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterMultNor: D = S1 * S2   (non-MMX)
  SDL_imageFilterMultNor: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterMultDivby2: D = saturation255(S1/2 * S2)
  SDL_imageFilterMultDivby2: [int, [uchar_ptr, uchar_ptr, uchar_ptr,
    uint]],

  //  SDL_imageFilterMultDivby4: D = saturation255(S1/2 * S2/2)
  SDL_imageFilterMultDivby4: [int, [uchar_ptr, uchar_ptr, uchar_ptr,
    uint]],

  //  SDL_imageFilterBitAnd: D = S1 & S2
  SDL_imageFilterBitAnd: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterBitOr: D = S1 | S2
  SDL_imageFilterBitOr: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterDiv: D = S1 / S2   (non-MMX)
  SDL_imageFilterDiv: [int, [uchar_ptr, uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterBitNegation: D = !S
  SDL_imageFilterBitNegation: [int, [uchar_ptr, uchar_ptr, uint]],

  //  SDL_imageFilterAddByte: D = saturation255(S + C)
  SDL_imageFilterAddByte: [int, [uchar_ptr, uchar_ptr, uint, uchar]],

  //  SDL_imageFilterAddUint: D = saturation255(S + (uint)C)
  SDL_imageFilterAddUint: [int, [uchar_ptr, uchar_ptr, uint, uint]],

  //  SDL_imageFilterAddByteToHalf: D = saturation255(S/2 + C)
  SDL_imageFilterAddByteToHalf: [int, [uchar_ptr, uchar_ptr, uint,
    uchar]],

  //  SDL_imageFilterSubByte: D = saturation0(S - C)
  SDL_imageFilterSubByte: [int, [uchar_ptr, uchar_ptr, uint, uchar]],

  //  SDL_imageFilterSubUint: D = saturation0(S - (uint)C)
  SDL_imageFilterSubUint: [int, [uchar_ptr, uchar_ptr, uint, uint]],

  //  SDL_imageFilterShiftRight: D = saturation0(S >> N)
  SDL_imageFilterShiftRight: [int, [uchar_ptr, uchar_ptr, uint, uchar]],

  //  SDL_imageFilterShiftRightUint: D = saturation0((uint)S >> N)
  SDL_imageFilterShiftRightUint: [int, [uchar_ptr, uchar_ptr, uint, uchar]],

  //  SDL_imageFilterMultByByte: D = saturation255(S * C)
  SDL_imageFilterMultByByte: [int, [uchar_ptr, uchar_ptr, uint, uchar]],

  //  SDL_imageFilterShiftRightAndMultByByte: D = saturation255((S >> N) * C)
  SDL_imageFilterShiftRightAndMultByByte: [int, [uchar_ptr, uchar_ptr, uint,
    uchar, uchar]],

  //  SDL_imageFilterShiftLeftByte: D = (S << N)
  SDL_imageFilterShiftLeftByte: [int, [uchar_ptr, uchar_ptr, uint,
    uchar]],

  //  SDL_imageFilterShiftLeftUint: D = ((uint)S << N)
  SDL_imageFilterShiftLeftUint: [int, [uchar_ptr, uchar_ptr, uint,
    uchar]],

  //  SDL_imageFilterShiftLeft: D = saturation255(S << N)
  SDL_imageFilterShiftLeft: [int, [uchar_ptr, uchar_ptr, uint, uchar]],

  //  SDL_imageFilterBinarizeUsingThreshold: D = S >= T ? 255:0
  SDL_imageFilterBinarizeUsingThreshold: [int, [uchar_ptr, uchar_ptr, uint,
    uchar]],

  //  SDL_imageFilterClipToRange: D = (S >= Tmin) & (S <= Tmax) 255:0
  SDL_imageFilterClipToRange: [int, [uchar_ptr, uchar_ptr, uint,
    uchar, uchar]],

  //  SDL_imageFilterNormalizeLinear: D = saturation255((Nmax - Nmin)/(Cmax - Cmin)*(S - Cmin) + Nmin)
  SDL_imageFilterNormalizeLinear: [int, [uchar_ptr, uchar_ptr, uint, int,
    int, int, int]]
})

// SDL2_gfxPrimitives.h Constants
gfx.SDL2_GFXPRIMITIVES_MAJOR = 1
gfx.SDL2_GFXPRIMITIVES_MINOR = 0
gfx.SDL2_GFXPRIMITIVES_MICRO = 2

// SDL2_rotozoom.h Constants
gfx.M_PI = 3.1415926535897932384626433832795
gfx.SMOOTHING_OFF = 0
gfx.SMOOTHING_ON = 1

// SDL2_framerate.h Constants
gfx.FPS_UPPER_LIMIT = 200
gfx.FPS_LOWER_LIMIT = 1
gfx.FPS_DEFAULT = 30

module.exports = gfx
