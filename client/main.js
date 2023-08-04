let baseURL = "http://localhost:4000/api"
const complimentBtn = document.getElementById("complimentButton")
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune)

//GET

const toDoListBtn = document.getElementById("toDoListButton")
const getToDoList = () => {
    axios.get("http://localhost:4000/api/toDoList/")
        .then(res => {

            const data = res.data;
            alert(data);
    });
};
toDoListBtn.addEventListener('click', getToDoList)

//POST

const toDoBtn = document.getElementById("toDoBtn")
let itemMessage = document.querySelector("#postItem")

function submitHandler(e) {
    let bodyObj = {
        item: itemMessage.value
    }

    postToDo(bodyObj)
    console.log(bodyObj)
    itemMessage.value = ''
}
const postToDo = (body) => {
    axios.post("http://localhost:4000/api/toDo/", body)
        .then(response => {
            // console.log(body)
            console.log(response.data)

            const data = response.data;
            alert(data);
    });
};
toDoBtn.addEventListener('click', submitHandler)

// PUT

const updateBtn = document.getElementById("updateListButton")
const updateNum = document.getElementById("updateNum")
const updateContent = document.getElementById("updateContent")

const updateListItem = (body) => {
    axios.put("http://localhost:4000/api/toDoList/:id", body)
        .then(res => {
            console.log("success")
            const data = res.data;
            alert(data);
    });
};
updateBtn.addEventListener('click', submitHandlerPut)

function submitHandlerPut() {
    let bodyObj = {
        id: updateNum.value,
        item: updateContent.value,
    }
    
    updateListItem(bodyObj)
    console.log(bodyObj)
    updateContent.value = ''
    updateNum.value = ''
}

// DELETE

const deleteBtn = document.getElementById("delteToDoListButton")
const deleteToDoListItem = () => {
    axios.delete("http://localhost:4000/api/toDoList/:id")
        .then(res => {
            console.log("success")
            const data = res.data;
            alert(data);
    });
};
deleteBtn.addEventListener('click', deleteToDoListItem)