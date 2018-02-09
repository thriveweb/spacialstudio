/* globals CMS createClass h */

// var MessageControl = createClass({
//   render: function () {
//     return h('div', {}, this.props.value)
//   }
// })
//
// CMS.registerWidget('message', MessageControl)

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'gallery',
  // Visible label
  label: 'Gallery',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'galleryImages',
      label: 'Gallery Images',
      widget: 'list',
      fields: [{ label: 'Image', name: 'image', widget: 'image' }]
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /<div class="Gallery">(.*)<\/div>.*/g,
  // (!\[([^\]]+)]\(([^)]+)\))<\/div>
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    console.log(match)
    return {
      galleryImages: match[1]
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    const imageStrings = obj.galleryImages
      ? obj.galleryImages
        .map(
          singleGalleryImage =>
            `${singleGalleryImage.alt}:${singleGalleryImage.image}`
        )
        .join(',')
      : ''
    return 'gallery ' + imageStrings
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return h('div', {}, JSON.stringify(obj, null, 2))
    // '<img src="http://img.youtube.com/vi/ />'
    // (data, getAsset) => <img src={getAsset(data.image || '')} alt={data.alt || ''} />
  }
})

CMS.registerEditorComponent({
  // Internal id of the component
  id: 'youtube',
  // Visible label
  label: 'Youtube',
  // Fields the user need to fill out when adding an instance of the component
  fields: [{ name: 'id', label: 'Youtube Video ID', widget: 'string' }],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      id: match[1]
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return 'youtube ' + obj.id
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return (
      '<img src="http://img.youtube.com/vi/' +
      obj.id +
      '/maxresdefault.jpg" alt="Youtube Video"/>'
    )
  }
})
