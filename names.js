var names = {};

names.nameList = [
    
    "Break Aga[YT]",
    "breakbot,tk"
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
