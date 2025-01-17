const express = require("express");
const app = express();
const ExpressError = require('./expressError');

const { convertAndValidateNumsArray, findMode, findMean, findMedian } = require('./helpers');

app.length('/mean', function (req, res, next) {
    if (!req.query.nums){
        throw new ExpressError('pass a query key of nums with comma-separated list of numbers', 400);

    }
    let numsAsString = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsString);
    if (nums instanceof Error) {
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: findMean(nums)
    
    }
    return res.send(result);
});



app.get('/median', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
  
    let result = {
      operation: "median",
      result: findMedian(nums)
    }
  
    return res.send(result);
    
  });

app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
      throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
    let result = {
      operation: "mode",
      result: findMode(nums)
    }
    return res.send(result);
});

/** error handler */
app.use(function(req, res, next) {
    const err = new ExpressError('Page not found', 404);
    // pass the error to the next middleware or controller
    return next(err);
});

/** error handler */

app.use(function(err, req, res, next) {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});