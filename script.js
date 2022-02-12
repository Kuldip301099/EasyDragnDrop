function addblock() {
    const list_items = document.querySelectorAll('.list-item');
    const listofID = document.getElementById("list");
    const listitoms = document.createElement("div");
    listitoms.className = "list-item";
    listitoms.setAttribute("draggable", "true");
    listitoms.innerHTML = `List item ${list_items.length + 1}`;
    listofID.appendChild(listitoms)




    // addblock().addEventListener
    // const checkvar = addblock()
    // console.log(checkvar)
    //document.getElementById("ablock").addEventListener("click",addblock)
    const list_items_modified = document.querySelectorAll('.list-item');
    const checkAll = document.getElementsByClassName('list-item')
    // console.log(list_items_modified)
    console.log(checkAll)
    const lists = document.querySelectorAll('.list');
    //console.log(lists)
    let draggedItem = null;




    for (let i = 0; i < list_items_modified.length; i++) {
        const item = list_items_modified[i];

        item.addEventListener('dragstart', function () {
            draggedItem = item;
            //console.log(draggedItem)
            setTimeout(function () {
                item.style.display = 'none';
            }, 0)
        });

        item.addEventListener('dragend', function () {
            setTimeout(function () {
                draggedItem.style.display = 'block';
                draggedItem = null;
            }, 0);
        })

        for (let j = 0; j < lists.length; j++) {
            const list = lists[j];
            //console.log(list)

            list.addEventListener('dragover', function (e) {
                e.preventDefault();
            });

            list.addEventListener('dragenter', function (e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            });

            list.addEventListener('dragleave', function (e) {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            });

            list.addEventListener('drop', function (e) {
                console.log('drop');
                //    console.log(e)
                if (draggedItem !== null) {
                    this.append(draggedItem);
                }
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            });
        }
    }
}

addblock()

function remblock() {
    const list_items_modified = document.querySelectorAll('.list-item');
    const checkAll = document.getElementsByClassName('list-item')
    console.log(list_items_modified)
    console.log(checkAll)
    const lists = document.querySelectorAll('.list');
    console.log(lists)
    let draggedItem = null;




    for (let i = 0; i < list_items_modified.length; i++) {
        const item = list_items_modified[i];

        item.addEventListener('dragstart', function () {
            draggedItem = item;
            console.log(draggedItem)
            setTimeout(function () {
                item.style.display = 'none';
            }, 0)
        });

        item.addEventListener('dragend', function () {
            setTimeout(function () {
                draggedItem.style.display = 'block';
                draggedItem = null;
            }, 0);
        })

        for (let j = 0; j < lists.length; j++) {
            const list = lists[j];
            console.log(list)

            list.addEventListener('dragover', function (e) {
                e.preventDefault();
            });

            list.addEventListener('dragenter', function (e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
            });

            list.addEventListener('dragleave', function (e) {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            });

            list.addEventListener('drop', function (e) {
                console.log('drop');
                //console.log(e)
                if (draggedItem !== null) {
                    this.append(draggedItem);
                }
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            });
        }
    }


    //checkAll[list_items_modified.length - 1].remove()
    let len = checkAll.length
    for(let i = 0;i<list_items_modified.length;i++)
    {
        if(checkAll[i].textContent === `List item ${len}`)
        {
            checkAll[i].remove()
        }
    }
    // console.log(checkAll[list_items_modified.length - 1].textContent === `List item ${list_items_modified.length}`)
}