export default (function () {
  let UUID = 0
  return {
    get: function () {
      return `ui-${UUID++}`
    },
  }
})()
