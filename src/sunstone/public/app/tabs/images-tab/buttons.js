/* -------------------------------------------------------------------------- */
/* Copyright 2002-2016, OpenNebula Project, OpenNebula Systems                */
/*                                                                            */
/* Licensed under the Apache License, Version 2.0 (the "License"); you may    */
/* not use this file except in compliance with the License. You may obtain    */
/* a copy of the License at                                                   */
/*                                                                            */
/* http://www.apache.org/licenses/LICENSE-2.0                                 */
/*                                                                            */
/* Unless required by applicable law or agreed to in writing, software        */
/* distributed under the License is distributed on an "AS IS" BASIS,          */
/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   */
/* See the License for the specific language governing permissions and        */
/* limitations under the License.                                             */
/* -------------------------------------------------------------------------- */

define(function(require) {
  var Locale = require('utils/locale');

  var Buttons = {
    "Image.refresh" : {
      type: "action",
      layout: "refresh",
      alwaysActive: true
    },
    "Image.create_dialog" : {
      type: "create_dialog",
      layout: "create"
    },
    "Image.upload_marketplace_dialog" : {
      type: "action",
      text: '<i class="fa fa-share"/> '+ Locale.tr("MarketPlace")
    },
    "Image.import_dialog" : {
      type: "create_dialog",
      layout: "create",
      text:  Locale.tr("Import"),
      icon: '<i class="fa fa-download"/>'
    },
    "Image.chown" : {
      type: "confirm_with_select",
      text: Locale.tr("Change owner"),
      layout: "user_select",
      select: "User",
      tip: Locale.tr("Select the new owner") + ":"
    },
    "Image.chgrp" : {
      type: "confirm_with_select",
      text: Locale.tr("Change group"),
      layout: "user_select",
      select: "Group",
      tip: Locale.tr("Select the new group") + ":"
    },
    "Image.enable" : {
      type: "action",
      layout: "more_select",
      text: Locale.tr("Enable")
    },
    "Image.disable" : {
      type: "action",
      layout: "more_select",
      text: Locale.tr("Disable")
    },
    "Image.persistent" : {
      type: "action",
      layout: "more_select",
      text: Locale.tr("Make persistent")
    },
    "Image.nonpersistent" : {
      type: "action",
      layout: "more_select",
      text: Locale.tr("Make non persistent")
    },
    "Image.clone_dialog" : {
      type: "action",
      layout: "main",
      text: Locale.tr("Clone")
    },
    "Image.delete" : {
      type: "confirm",
      layout: "del",
      text: Locale.tr("Delete")
    },
  }

  return Buttons;
});
