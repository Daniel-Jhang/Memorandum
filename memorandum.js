const content = document.getElementById('content');
const date = document.getElementById('date');
const time = document.getElementById('time');
const addBtn = document.getElementById('addBtn');
const deletedBtn = document.getElementById('deletedBtn');
const list = document.getElementById('list');

const listContent = [];

function refresh(){
    let htmlStr = '';

    listContent.forEach(function (item) {
        // console.log('item', item);
        htmlStr = htmlStr + `
        <div class="item">
          <div>
            <p>內容：${item.content}</p>
            <p>時間：${item.date} ${item.time}</p>
          </div>
        </div>
        `

        document.cookie = htmlStr;
    })

    list.innerHTML = htmlStr;
}

addBtn.addEventListener('click', function () {
    // console.log(content.value)
    // console.log(date.value)
    // console.log(time.value)

    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })

    // console.log(listContent);

    refresh();
    
})

deletedBtn.addEventListener('click', function () {
    listContent.pop();

    let htmlStr = '';

    refresh();

})