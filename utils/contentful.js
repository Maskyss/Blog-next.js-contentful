import { BLOCKS, MARKS } from '@contentful/rich-text-types';





const options = {
  renderMark: {
    [MARKS.BOLD]: text => <p className='bold'>{text}</p>,
    [MARKS.ITALIC]: text => <p className='cursive'>{text}</p>,
    [MARKS.UNDERLINE]: text => <p className='underline'>{text}</p>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='paragraph'>{children}</p>,
  },
  renderText: text => text.replace('!', '?'),
};

export default options;