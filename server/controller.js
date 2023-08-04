let base = 2
const toDoObject = [
    { id: 0, item: "Finish working on back room"},
    { id: 1, item: "Go play basketball"},
]
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortune = ["Stay away from old ladies if you value your life.", "Excuses are the bricks to the house of failure.", "A wise man once said, mind your own buisness!","The chicken is poisoned, eat at your own risk.","Sometimes everyone is the worst."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    postToDo: (req, res) => {
   
        let { item } = req.body
         let newToDo = {
            id: base,
            item,
        }
        console.log(newToDo)
         toDoObject.push(newToDo)
        base++
        res.status(200).send(JSON.stringify(toDoObject.map(item => item.item)));//extract the values of the item property from each object in the toDoObject array and then convert those values into a JSON-formatted string
    },

    getToDoList: (req, res) => {
    res.status(200).send(JSON.stringify(toDoObject.map(item => item.item)));//extract the values of the item property from each object in the toDoObject array and then convert those values into a JSON-formatted string
    },

    deleteToDoListItem: (request, response) => {
        // console.log(request.params)
        toDoObject.splice(request.params.id, 1)
        response.status(200).send(JSON.stringify(toDoObject.map(item => item.item)))//extract the values of the item property from each object in the toDoObject array and then convert those values into a JSON-formatted string
    },

    updateListItem: (request, response) => {
        // console.log(request.body)
        const itemToUpdate = toDoObject.find((item) => item.id === parseInt(request.body['id']))//searches for an item within the toDoObject array that has an id matching the id provided. The found item (or undefined if not found) is stored in itemToUpdate.
        // console.log(itemToUpdate);
        itemToUpdate.item = request.body.item
        response.status(200).send(JSON.stringify(toDoObject.map(item => item.item)))//extract the values of the item property from each object in the toDoObject array and then convert those values into a JSON-formatted string
    }
}