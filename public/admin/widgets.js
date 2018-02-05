var MessageControl = createClass({
  render: function () {
    return h('div', {}, this.props.value)
  }
})

CMS.registerWidget('message', MessageControl)
