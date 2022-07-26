'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const baseRouter = app.config.baseRouter  //  /api/v1
  router.post(baseRouter + '/admin/login',controller.admin.adminLogin)
  router.post(baseRouter + '/admin/logout',controller.admin.adminLogout)
};
