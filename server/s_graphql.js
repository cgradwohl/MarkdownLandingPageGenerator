var serverlessSDK = require('./serverless_sdk/index.js')
serverlessSDK = new serverlessSDK({
orgId: 'crits',
applicationName: 'helloworld',
appUid: 'PBdMHcT0L2lxWfBK5D',
orgUid: 'ssJp7T1f9ZdQn7ZpPp',
deploymentUid: '22e44b77-5eaf-4713-9dd4-8ca04cbb8892',
serviceName: 'markdownlandingpage',
shouldLogMeta: true,
disableAwsSpans: false,
disableHttpSpans: false,
stageName: 'dev',
pluginVersion: '3.5.0',
disableFrameworksInstrumentation: false})
const handlerWrapperArgs = { functionName: 'markdownlandingpage-dev-graphql', timeout: 6}
try {
  const userHandler = require('./dist/graphql.js')
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs)
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs)
}
