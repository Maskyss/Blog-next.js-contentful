import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";

const options = {
  renderMark: {
    [MARKS.BOLD]: text => `<span class='bold'>${text}</span>`,

    [MARKS.ITALIC]: text => `<span class='cursive'>${text}</span>`,

    [MARKS.UNDERLINE]: text => `<span class='underline'>${text}</span>`
    // [MARKS]: text => `<p class='underline'>${text}</p>`,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => {
      return `<p class='paragraph'>${next(node.content)}</p>`;
    },
    
    [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
      var str1 = node.data.target.fields.file.url || null;
      while (str1.indexOf("/") == 0) {
        str1 = str1.substring(1);
      }
      const newImage = "http://" + str1;
      return `<img  src='${newImage}' />`;
    }
  },

  renderInline: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      console.log(node, children);
    },
    [INLINES.ASSET_HYPERLINK]: (node, children) => {
      console.log(node, children);
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      console.log(node, children);
    }
  },

  renderText: text => text.replace("!", "?")
};

export default options;
