var heading = document.getElementById('heading');
var description = document.getElementById('description');
var post_btn = document.getElementById('post-btn');
var multipost = document.getElementById('multipost');

var arr = [{ head : `New Blog`,
desc : `tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed! Eius laudantium aliquid cupiditate fugit consectetur error mollitia ducimus necessitatibus deleniti, eum aspernatur. Molestias sint perferendis eum eius dolore voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, numquam officia obcaecati maiores tempora iure blanditiis perspiciatis quas quam sed modi saepe aliquid sint ipsum placeat consectetur similique eos hic! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus ex quos sapiente impedit ea fugiat totam repellat unde voluptates obcaecati distinctio ipsa hic earum ducimus, animi ut iusto ipsum illum.`,
},
{
    head : `New Blog`,
    desc : `Nostrum nam, repudiandae explicabo quod magnam ipsum deserunt fuga, quos voluptas, ratione temporibus quasi! Sit distinctio ducimus officia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto a error voluptas deserunt reiciendis earum iure facere modi cum. Unde facilis iusto quidem possimus, adipisci ad id deserunt quisquam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptas harum, quam tenetur nemo tempore reiciendis alias. Esse ab nihil sunt, quae iusto labore aliquid eius eaque. Maiores, architecto nobis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum pariatur iste ipsa, est placeat eos aliquid delectus consectetur necessitatibus tempora illo qui. Ipsa adipisci tenetur accusamus blanditiis dolore similique aliquam. Lorem, ipsum dolor .`
},
{
    head : `New blogg`,
    desc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, similique veniam quo ipsa laboriosam voluptatibus excepturi eius, fuga sequi nesciunt incidunt minus aut iusto libero eum ex obcaecati architecto quia! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat delectus unde reprehenderit id quam obcaecati nostrum eum rem eaque itaque ad adipisci repellendus, repudiandae incidunt ducimus exercitationem omnis iure debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci veniam nulla. sit amet consectetur adipisicing elit. Ipsam, aperiam illo! Rerum consequatur est temporibus. Totam eius mollitia quos voluptates quam, nam dignissimos consequuntur necessitatibus fugiat soluta ab asperiores ..`,

}];
displayPost();
post_btn.addEventListener('click', addPost)

function addPost(){

    if(heading.value == "" || description.value == "")
    {
        alert("You can't have Null Post");
        console.log(heading.value,description.value);
    }
    else{
        let obj = { head : heading.value,
            desc : description.value,
        }
        arr.push(obj);
        console.log(arr);
        heading.value= "";
        description.value = "";
        displayPost();
    }
    
}

function displayPost(){
    multipost.innerHTML = "";
    document.getElementById('status').innerText = "Want to post something?";
    for(let i = arr.length-1; i >= 0 ; i--) 
    {
        let div = `<main id="main">
        <div id="post">
            <h3>Blogger Buzz</h3>
        </div>
        <div id="post-add">
            <h3 id="head">${arr[i].head}</h3>
            <p id="desc">${arr[i].desc}</p>
        </div>
        <button id="edit-btn" onclick="edit('${arr[i].head}');">Edit Post</button>
        <button id="delete-btn" onclick="Delete('${arr[i].head}');">Delete Post</button>
    </main>`
        multipost.innerHTML += div;
    }
}

function Delete(item) {
    let index;
    for (let i = 0 ; i< arr.length; i++) {
        if (arr[i].head == item){
            index = i;
        }
    }
    arr.splice(index, 1);
    displayPost();
}
function edit(item){
    let index;
    for (let i = 0 ; i< arr.length; i++) {
        if (arr[i].head == item){
            index = i;
        }
    }
    heading.value = arr[index].head;
    description.value = arr[index].desc;
    Delete(arr[index].head);
    document.getElementById('status').innerText = 'Edit';
    document.getElementById('canvas').scrollIntoView() ;
}