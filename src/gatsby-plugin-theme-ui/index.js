import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index";
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index";
import merge from "deepmerge";

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray

const myWaveTheme = merge(wavesTheme, {
    styles: {
      waves: {
        default: {
          Sticker: {
            height: ["100%", "80vh"],
            top: ["auto", "10vh"],
          },
        },
      },
    },
  }, {arrayMerge: overwriteMerge});

export default merge(blogTheme, myWaveTheme);
