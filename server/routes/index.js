var express = require('express');
var router = express.Router();

router.get('/testData', function(req, res, next) {
  res.json(  
    {
      "gameID": "2019_08_01_dneafa_cmcafa_1",
      "auditor": "Joel Parker",
      "operator": "Zachary Vasilinda",
      "ffxPitches": 304,
      "gdPitches": 308,
      "missedPitches": 4,
      "missedBIP": 0,
      "pitchesAdd": 3,
      "pickAdd": 3
    }
  );
});

module.exports = router;
