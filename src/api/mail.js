import service from '@/utils/service'
import defaultSettings from '@/config/defaultSettings'
const baseUrl = defaultSettings.baseUrl + '/api/admin/mails'

const mailApi = {}

mailApi.testMail = mailData => {
  return service({
    url: `${baseUrl}/test`,
    method: 'post',
    data: mailData
  })
}

export default mailApi
