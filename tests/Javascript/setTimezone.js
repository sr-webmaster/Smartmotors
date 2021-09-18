const moment = require('moment-timezone')
jest.doMock('moment', () => {
  moment.tz.setDefault('Asia/Yekaterinburg')
  return moment
})
