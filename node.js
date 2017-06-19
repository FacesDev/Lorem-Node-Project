const express = require("express");
const app = express();
const loremIpsum = require("lorem-ipsum");

//  count: 3
//     , units: "paragraphs"
//     , sentenceLowerBound: 5
//     , sentenceUpperBound: 20
//     , format: "html"
//   });
let output = loremIpsum({
    count: 3,
     units: "paragraphs",
     sentenceLowerBound: 5,
     sentenceUpperBound: 20,
     format: "html"
});

app.get("/lorem", function (req, res){
    res.send(output);


});
app.listen(3000, () => {

});


