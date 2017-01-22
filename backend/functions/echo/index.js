'use strict'

// for debugging
require('@google/cloud-debug').start()

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
exports.echo = function echo (req, res) {
  let response = {
    app: req.app,
    baseUrl: req.baseUrl,
    body: req.body,
    cookies: req.cookies,
    fresh: req.fresh,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    method: req.method,
    originalUrl: req.originalUrl,
    params: req.params,
    path: req.path,
    protocol: req.protocol,
    query: req.query,
    route: req.route,
    secure: req.secure,
    signedCookies: req.signedCookies,
    stale: req.stale,
    subdomains: req.subdomains,
    xhr: req.xhr
  }
  res.send(response)
}
