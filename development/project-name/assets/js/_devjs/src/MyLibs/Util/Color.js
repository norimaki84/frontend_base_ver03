// ------------------------------------------------------------
//
//  Color
//
// ------------------------------------------------------------

export default class Color {

  constructor() {


  }

  // rgbからHEXカラー取得
  // -----------------------------------
  // @r : 0~255
  // @g : 0~255
  // @b : 0~255
  // return : ex "#FFFFFF"
  // -----------------------------------
  getHexColor(r,g,b) {
      var str;
      str = (r << 16 | g << 8 | b).toString(16);
      return "#" + new Array(7 - str.length).join("0") + str;
  }

}