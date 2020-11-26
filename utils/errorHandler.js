module.exports = (response, err) => {
    response.status(500).json({
        success: false,
        message: err.message ? err.message : err
    })
}
