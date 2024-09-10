const express = require("express");
const router = express.Router();

//local:host3000/api
router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET - SUCCESS ",
        metadata: { hostname: req.hostname, method: req.method },
    });
});

router.get("/:got", (req, res) => {
    const got = req.params.id;
    res.status(200).json({
        message: "GET - SUCCESS  id: got",
        id: got,
        metadata: { hostname: req.hostname, method: req.method },
    });
});

router.post("/", (req,res) => {
    const { data } = req.body.data;
    res.status(200).json({
        message: "POST to /api id:None",
        data,
        metadata: { hostname: req.hostname, method: req.method },

    });
});

router.delete("/:deletion", (req,res) => {
    const deletion = req.params.id;
    const { data } = req.body.data;
    res.status(200).json({
        message: "DELETE from /api id: deletion",
        id: deletion,
        data,
        metadata: { hostname: req.hostname, method: req.method },

    });
});

router.put("/:putting", (req,res) => {
    const putting = req.params.id;
    const { data } = req.body.data;
    res.status(200).json({
        message: "PUT to /api id: putting",
        id: putting,
        data,
        metadata: { hostname: req.hostname, method: req.method },

    });
});
module.exports = router;