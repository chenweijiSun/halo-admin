import service from '@/utils/service'
import defaultSettings from '@/config/defaultSettings'
const baseUrl = defaultSettings.baseUrl + '/api/admin/journals/comments'

const journalCommentApi = {}

journalCommentApi.create = (comment) => {
  return service({
    url: baseUrl,
    data: comment,
    method: 'post'
  })
}

journalCommentApi.delete = commentId => {
  return service({
    url: `${baseUrl}/${commentId}`,
    method: 'delete'
  })
}

export default journalCommentApi
