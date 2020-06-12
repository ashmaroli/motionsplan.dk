let motionsplan = {}

motionsplan.WaistRatio = function() {

  function getWaistHeightRatio(waist, height) {
    return waist / height;
  }

  function getWaistHipRatio(waist, hip) {
    return waist / hip;
  }

  var publicAPI = {
    getWaistHeightRatio : getWaistHeightRatio,
    getWaistHipRatio : getWaistHipRatio
  };

  return publicAPI;
}

module.exports = motionsplan;
