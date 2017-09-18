window.onload = function() {
    var wrap = document.querySelector(".wrapper");
    var menu;

    ////////////Create Class ItemsMenu////////////

    function ItemsMenu(title) {
        this.title = title;
        this.toDo = function() {
            console.log(title);
        }
    }

    /////////////Create instance of a class////////

    var arrItems = [];
    arrItems.push(new ItemsMenu("Copy"));
    arrItems.push(new ItemsMenu("Past"));
    arrItems.push(new ItemsMenu("Cut"));

    //////////Create own context menu/////////////

    wrap.addEventListener('contextmenu', function(event) {
        event.preventDefault();

        if (!menu) {
            menu = document.createElement("div");
            menu.classList.add("menu");
            wrap.appendChild(menu);

            for (i in arrItems) {
                var item = document.createElement("div");
                item.classList.add("item");
                item.innerHTML = arrItems[i].title;
                item.addEventListener("click", arrItems[i].toDo);
                menu.appendChild(item);
            }
        }

        menu.style.left = event.offsetX + "px";
        menu.style.top = event.offsetY + "px";
    })
}