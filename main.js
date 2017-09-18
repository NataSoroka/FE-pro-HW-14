window.onload = function() {
    var wrap = document.querySelector(".wrapper");
    var menu;

    ////////////Create Class ItemsMenu////////////

    function ItemsMenu(title) {
        this.title = title;
        this.toDo = function() {
            this.parentNode.style.display = "none";
            var message = document.createElement("div");
            message.classList.add("message");
            message.innerHTML = title + "!";
            document.body.appendChild(message);

            setTimeout(function() {
                message.parentNode.removeChild(message);
            }, 2000);
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

        menu.style.display = "block";
        menu.style.left = event.offsetX + "px";
        menu.style.top = event.offsetY + "px";
        document.addEventListener("click", function() {
            menu.style.display = "none";
        })
    })
}